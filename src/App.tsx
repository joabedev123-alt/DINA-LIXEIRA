import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { QuoteDrawer } from './components/QuoteDrawer';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { categories, products } from './data/products';
import { Product, QuoteItem } from './types';
import { SearchX, Filter } from 'lucide-react';

export const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);



  // Filter products by Category and Search Term
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = selectedCategory === 'todos' || p.categoryId === selectedCategory;
      const query = searchTerm.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        (p.code && p.code.toLowerCase().includes(query)) ||
        (p.capacity && p.capacity.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  // Quote Cart Handlers
  const handleAddToQuote = (product: Product, quantity: number = 1, selectedColor?: string) => {
    setQuoteItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        if (selectedColor) updated[existingIndex].selectedColor = selectedColor;
        return updated;
      }
      return [...prev, { product, quantity, selectedColor }];
    });
  };

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveQuoteItem(productId);
      return;
    }
    setQuoteItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveQuoteItem = (productId: string) => {
    setQuoteItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearQuote = () => {
    setQuoteItems([]);
  };

  const isProductInQuote = (productId: string) => {
    return quoteItems.some((item) => item.product.id === productId);
  };

  return (
    <>
      {showSplash && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <img src="/logo.png" alt="Fort Lixeiras" style={{ maxWidth: '280px', height: 'auto', animation: 'pulse 2s infinite' }} />
        </div>
      )}
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc' }}>
      
      {/* Sticky Header */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        quoteCount={quoteItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Hero Section */}
      <Hero />

      {/* Main Catalog Area */}
      <main className="container" style={{ flex: 1, padding: '2rem 1.5rem' }}>
        
        {/* Category Filters */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Results Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--slate-600)', fontWeight: 600 }}>
            Exibindo <span style={{ color: 'var(--slate-900)', fontWeight: 800 }}>{filteredProducts.length}</span> produtos
            {selectedCategory !== 'todos' && ` em ${categories.find(c => c.id === selectedCategory)?.name}`}
          </div>

          {(searchTerm !== '' || selectedCategory !== 'todos') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('todos');
              }}
              style={{
                border: 'none',
                background: 'none',
                color: 'var(--primary-700)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              <Filter size={14} /> Limpar filtros
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={setModalProduct}
                onAddToQuote={(p) => handleAddToQuote(p, 1)}
                isInQuote={isProductInQuote(product.id)}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            backgroundColor: '#fff',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--slate-200)'
          }}>
            <SearchX size={48} style={{ color: 'var(--slate-400)', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--slate-800)', marginBottom: '0.5rem' }}>
              Nenhum produto encontrado
            </h3>
            <p style={{ color: 'var(--slate-600)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Não encontramos nenhum item correspondente a "{searchTerm}". Tente buscar por outros termos ou selecionar outra categoria.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('todos');
              }}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--primary-600)',
                color: '#fff',
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Ver Todos os Produtos
            </button>
          </div>
        )}

        {/* About & Trust Section */}
        <AboutSection />

      </main>

      {/* Product Detail Modal */}
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
        onAddToQuote={handleAddToQuote}
      />

      {/* Quote Drawer Side Bar */}
      <QuoteDrawer
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        items={quoteItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveQuoteItem}
        onClearQuote={handleClearQuote}
      />

      {/* Footer */}
      <Footer />

    </div>
    </>
  );
};

export default App;

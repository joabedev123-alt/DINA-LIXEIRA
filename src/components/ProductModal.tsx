import React, { useState } from 'react';
import { Product } from '../types';
import { X, Check, ShoppingBag, MessageSquare, Tag, Package, Layers, FileText, Maximize2 } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToQuote: (product: Product, quantity: number, selectedColor?: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToQuote,
}) => {
  if (!product) return null;

  const [activeTab, setActiveTab] = useState<'details' | 'catalogSheet'>('details');
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors && product.colors.length > 0 ? product.colors[0] : ''
  );
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const handleAdd = () => {
    onAddToQuote(product, quantity, selectedColor);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 1200);
  };

  const whatsappLink = `https://wa.me/5511999999999?text=${encodeURIComponent(
    `Olá! Tenho interesse no produto: ${product.name} (${product.code || 'S/N'}). Qtd: ${quantity}. Cor: ${selectedColor || 'Padrão'}. Por favor, me envie o orçamento.`
  )}`;

  const catalogImageSrc = product.catalogImage || product.image;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      backgroundColor: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }} onClick={onClose}>
      
      <div
        className="animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#fff',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: activeTab === 'catalogSheet' ? '1050px' : '880px',
          maxHeight: '92vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          transition: 'max-width 0.3s ease'
        }}
      >
        {/* Modal Top Bar */}
        <div style={{
          padding: '1rem 1.5rem',
          borderBottom: '1px solid var(--slate-200)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'var(--slate-900)',
          color: '#fff',
          borderTopLeftRadius: 'var(--radius-lg)',
          borderTopRightRadius: 'var(--radius-lg)'
        }}>
          {/* Navigation Tabs */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={() => setActiveTab('details')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: activeTab === 'details' ? 'var(--primary-600)' : 'rgba(255,255,255,0.1)',
                color: '#fff',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              <Package size={16} /> Visão Geral do Produto
            </button>

            <button
              onClick={() => setActiveTab('catalogSheet')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: activeTab === 'catalogSheet' ? 'var(--primary-600)' : 'rgba(255,255,255,0.1)',
                color: '#fff',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              <FileText size={16} /> Prancha do Catálogo Oficial
            </button>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab 1: VISÃO GERAL */}
        {activeTab === 'details' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            
            {/* Left Product Image */}
            <div style={{ backgroundColor: 'var(--slate-100)', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ maxWidth: '100%', maxHeight: '320px', objectFit: 'contain', borderRadius: 'var(--radius-md)' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = catalogImageSrc;
                }}
              />

              {/* Catalog Sheet Shortcut */}
              <button
                onClick={() => setActiveTab('catalogSheet')}
                style={{
                  marginTop: '1.25rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--primary-500)',
                  backgroundColor: 'var(--primary-50)',
                  color: 'var(--primary-800)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <FileText size={15} /> Ver Foto Oficial no Catálogo
              </button>
            </div>

            {/* Right Product Specifications */}
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <span className="badge badge-primary">{product.category}</span>
                {product.code && <span className="badge badge-accent">Cód: {product.code}</span>}
              </div>

              <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                {product.name}
              </h2>

              <p style={{ color: 'var(--slate-600)', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                {product.description}
              </p>

              {/* Specifications Box */}
              <div style={{ backgroundColor: 'var(--slate-50)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
                {product.capacity && (
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <Package size={16} color="var(--primary-600)" />
                    <strong>Capacidade:</strong> {product.capacity}
                  </div>
                )}
                {product.material && (
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <Layers size={16} color="var(--primary-600)" />
                    <strong>Material:</strong> {product.material}
                  </div>
                )}
                {product.dimensions && (
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Tag size={16} color="var(--primary-600)" />
                    <strong>Dimensões:</strong> {product.dimensions}
                  </div>
                )}
              </div>

              {/* Colors Selection */}
              {product.colors && product.colors.length > 0 && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-800)', display: 'block', marginBottom: '0.4rem' }}>
                    Cores Disponíveis no Catálogo:
                  </label>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        style={{
                          padding: '0.35rem 0.75rem',
                          fontSize: '0.8rem',
                          borderRadius: 'var(--radius-sm)',
                          border: selectedColor === color ? '2px solid var(--primary-600)' : '1px solid var(--slate-300)',
                          backgroundColor: selectedColor === color ? 'var(--primary-50)' : '#fff',
                          color: selectedColor === color ? 'var(--primary-800)' : 'var(--slate-700)',
                          fontWeight: selectedColor === color ? 700 : 500,
                          cursor: 'pointer'
                        }}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-800)' }}>
                  Quantidade:
                </label>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--slate-300)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{ width: '30px', height: '30px', border: 'none', background: 'var(--slate-100)', cursor: 'pointer', fontWeight: 700 }}
                  >
                    -
                  </button>
                  <span style={{ padding: '0 0.8rem', fontWeight: 700, fontSize: '0.9rem' }}>{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    style={{ width: '30px', height: '30px', border: 'none', background: 'var(--slate-100)', cursor: 'pointer', fontWeight: 700 }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: 'auto' }}>
                <button
                  onClick={handleAdd}
                  disabled={addedSuccess}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    padding: '0.8rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: addedSuccess ? '#059669' : 'var(--primary-600)',
                    color: '#fff',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer'
                  }}
                >
                  {addedSuccess ? <Check size={18} /> : <ShoppingBag size={18} />}
                  {addedSuccess ? 'Adicionado!' : 'Adicionar ao Orçamento'}
                </button>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    padding: '0.8rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: '#25d366',
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textAlign: 'center'
                  }}
                >
                  <MessageSquare size={18} /> Cotar via WhatsApp
                </a>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: PRANCHA ORIGINAL DO CATÁLOGO */}
        {activeTab === 'catalogSheet' && (
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--slate-900)', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--primary-500)', fontWeight: 700 }}>
                  Catálogo Oficial Fort Lixeiras
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>
                  {product.name} ({product.category})
                </h3>
              </div>
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.8rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  color: '#fff',
                  border: 'none',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                <Maximize2 size={14} /> {isZoomed ? 'Tamanho Normal' : 'Ampliar Imagem'}
              </button>
            </div>

            {/* Catalog Sheet Display Container */}
            <div style={{
              width: '100%',
              maxHeight: isZoomed ? 'none' : '65vh',
              overflow: 'auto',
              borderRadius: 'var(--radius-md)',
              border: '2px solid rgba(255,255,255,0.1)',
              backgroundColor: '#000',
              display: 'flex',
              justifyContent: 'center',
              padding: '1rem'
            }}>
              <img
                src={catalogImageSrc}
                alt={`Prancha Catálogo - ${product.name}`}
                style={{
                  maxWidth: isZoomed ? 'none' : '100%',
                  width: isZoomed ? '1400px' : 'auto',
                  maxHeight: isZoomed ? 'none' : '60vh',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-sm)'
                }}
              />
            </div>

            <p style={{ fontSize: '0.8rem', color: 'var(--slate-400)', marginTop: '0.75rem', textAlign: 'center' }}>
              Imagem extraída diretamente da prancha técnica do catálogo oficial da fábrica.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

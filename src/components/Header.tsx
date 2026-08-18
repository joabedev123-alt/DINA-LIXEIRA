import React from 'react';
import { ShoppingBag, Search, Phone, ShieldCheck, Truck } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  quoteCount: number;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  setSearchTerm,
  quoteCount,
  onOpenQuote,
}) => {
  return (
    <header className="sticky top-0 z-40 glass-header">
      {/* Top Banner Bar */}
      <div style={{ backgroundColor: 'var(--slate-900)', color: 'var(--slate-300)', fontSize: '0.8rem', padding: '0.4rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Truck size={14} color="var(--primary-500)" /> Entrega rápida para todo o Brasil
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={14} color="var(--primary-500)" /> Produtos em Conformidade CONAMA & ANVISA
            </span>
          </div>
          <div>
            <a
              href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--accent-whatsapp)', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
            >
              <Phone size={13} /> Atendimento Direto via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="container" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
        
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }} onClick={() => setSearchTerm('')}>
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(135deg, var(--primary-600), var(--primary-800))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-glow)',
            color: '#fff',
            fontWeight: 800,
            fontSize: '1.4rem'
          }}>
            F
          </div>
          <div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--slate-900)', lineHeight: 1.1 }}>
              FORT <span style={{ color: 'var(--primary-600)' }}>LIXEIRAS</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--slate-600)', fontWeight: 500 }}>
              Soluções em Coleta e Descarte
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div style={{ flex: 1, maxWidth: '500px', position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--slate-400)' }} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por lixeira, cesto, container, capacidade..."
            style={{
              width: '100%',
              padding: '0.75rem 1rem 0.75rem 2.8rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--slate-300)',
              backgroundColor: 'var(--slate-50)',
              fontSize: '0.9rem',
              outline: 'none',
              transition: 'all var(--transition-fast)'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--primary-500)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--slate-300)'}
          />
        </div>

        {/* Quote Basket Button */}
        <button
          onClick={onOpenQuote}
          style={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.65rem 1.2rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--primary-600)',
            color: '#fff',
            border: 'none',
            fontWeight: 600,
            fontSize: '0.9rem',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
            transition: 'all var(--transition-fast)'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-700)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-600)'}
        >
          <ShoppingBag size={18} />
          <span>Meu Orçamento</span>
          {quoteCount > 0 && (
            <span style={{
              backgroundColor: '#fff',
              color: 'var(--primary-700)',
              borderRadius: 'var(--radius-full)',
              padding: '0.1rem 0.5rem',
              fontSize: '0.75rem',
              fontWeight: 800
            }}>
              {quoteCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

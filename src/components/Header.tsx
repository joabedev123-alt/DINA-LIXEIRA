import React from 'react';
import { ShoppingBag, Search, ShieldCheck, Truck } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

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
        <div className="container mobile-header-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
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
              href="https://wa.me/5594991196781?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--accent-whatsapp)', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
            >
              <WhatsAppIcon size={13} /> Atendimento Direto via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="container mobile-header-main" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
        
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setSearchTerm('')}>
          <img src="/logo.png" alt="Fort Lixeiras" style={{ height: '46px', width: 'auto' }} />
        </div>

        {/* Search Bar */}
        <div className="mobile-header-search" style={{ flex: 1, maxWidth: '500px', position: 'relative' }}>
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

      </div>
    </header>
  );
};

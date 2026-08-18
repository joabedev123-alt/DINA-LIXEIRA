import React from 'react';
import { Product } from '../types';
import { Eye, Plus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  isInQuote: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onAddToQuote,
  isInQuote,
}) => {
  return (
    <div className="glass-card" style={{
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      position: 'relative'
    }}>
      {/* Featured Badge */}
      {product.featured && (
        <span style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          zIndex: 2,
          backgroundColor: 'var(--primary-600)',
          color: '#fff',
          fontSize: '0.7rem',
          fontWeight: 700,
          padding: '0.25rem 0.6rem',
          borderRadius: 'var(--radius-full)',
          textTransform: 'uppercase'
        }}>
          Destaque
        </span>
      )}

      {/* Code Badge */}
      {product.code && (
        <span style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          zIndex: 2,
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(4px)',
          color: '#e2e8f0',
          fontSize: '0.7rem',
          fontWeight: 600,
          padding: '0.25rem 0.6rem',
          borderRadius: 'var(--radius-sm)',
        }}>
          {product.code}
        </span>
      )}

      {/* Image Container */}
      <div className="product-image-wrapper" onClick={() => onViewDetails(product)}>
        <img
          src={product.catalogImage || product.image}
          alt={product.name}
          onError={(e) => {
            (e.target as HTMLImageElement).src = product.image;
          }}
        />
        <div style={{
          position: 'absolute',
          bottom: '0.6rem',
          left: '50%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
          backgroundColor: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(4px)',
          color: '#fff',
          padding: '0.35rem 0.6rem',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.72rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.3rem'
        }}>
          <Eye size={13} /> Foto Oficial do Catálogo
        </div>
      </div>

      {/* Content Body */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary-700)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
          {product.category}
        </div>

        <h3
          className="text-break"
          onClick={() => onViewDetails(product)}
          style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            color: 'var(--slate-900)',
            marginBottom: '0.5rem',
            cursor: 'pointer',
            lineHeight: 1.3
          }}
        >
          {product.name}
        </h3>

        <p className="text-break" style={{
          fontSize: '0.85rem',
          color: 'var(--slate-600)',
          marginBottom: '1rem',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          flex: 1
        }}>
          {product.description}
        </p>

        {/* Specifications Pills */}
        {product.capacity && (
          <div style={{ marginBottom: '1.2rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="badge badge-primary">
              Capacidade: {product.capacity}
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="card-buttons-grid">
          <button
            className="card-btn"
            onClick={() => onViewDetails(product)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--slate-300)',
              backgroundColor: '#fff',
              color: 'var(--slate-700)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            <Eye size={16} /> Ver Detalhes
          </button>

          <button
            className="card-btn"
            onClick={() => onAddToQuote(product)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              backgroundColor: isInQuote ? 'var(--slate-800)' : 'var(--primary-600)',
              color: '#fff',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            {isInQuote ? <Check size={16} color="#34d399" /> : <Plus size={16} />}
            {isInQuote ? 'Adicionado' : 'Orçamento'}
          </button>
        </div>
      </div>
    </div>
  );
};

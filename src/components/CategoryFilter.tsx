import React from 'react';
import { Category } from '../types';
import { Grid, Recycle, Truck, Sparkles, Footprints, Trees } from 'lucide-react';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Recycle': return <Recycle size={18} />;
    case 'Truck': return <Truck size={18} />;
    case 'Sparkles': return <Sparkles size={18} />;
    case 'Footprints': return <Footprints size={18} />;
    case 'Trees': return <Trees size={18} />;
    default: return <Grid size={18} />;
  }
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div style={{ margin: '2.5rem 0 1.5rem' }} id="catalogo">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--slate-900)' }}>
            Categorias de Produtos
          </h2>
          <p style={{ color: 'var(--slate-600)', fontSize: '0.9rem' }}>
            Filtre por tipo de aplicação ou material do coletor
          </p>
        </div>
      </div>

      <div style={{
        display: 'flex',
        gap: '0.75rem',
        flexWrap: 'wrap',
        paddingBottom: '0.75rem'
      }}>
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.75rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                border: isSelected ? '2px solid var(--primary-600)' : '1px solid var(--slate-200)',
                backgroundColor: isSelected ? 'var(--primary-600)' : '#fff',
                color: isSelected ? '#fff' : 'var(--slate-700)',
                fontWeight: isSelected ? 700 : 500,
                fontSize: '0.9rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxShadow: isSelected ? '0 4px 14px rgba(16, 185, 129, 0.3)' : 'var(--shadow-sm)',
                transition: 'all var(--transition-fast)'
              }}
            >
              {getCategoryIcon(cat.iconName)}
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

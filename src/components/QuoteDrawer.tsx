import React from 'react';
import { QuoteItem } from '../types';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: QuoteItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearQuote: () => void;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearQuote,
}) => {
  if (!isOpen) return null;

  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const generateWhatsAppMessage = () => {
    if (items.length === 0) return '';
    let text = `*SOLICITAÇÃO DE ORÇAMENTO - FORT LIXEIRAS*\n\n`;
    text += `Olá, gostaria de solicitar uma cotação para os seguintes itens:\n\n`;

    items.forEach((item, index) => {
      text += `*${index + 1}. ${item.product.name}*\n`;
      text += `   • Código: ${item.product.code || 'N/A'}\n`;
      text += `   • Quantidade: ${item.quantity} un.\n`;
      if (item.selectedColor) {
        text += `   • Cor/Opção: ${item.selectedColor}\n`;
      }
      text += `\n`;
    });

    text += `Por favor, me informe o valor total, condições de pagamento e prazo de entrega.`;
    return encodeURIComponent(text);
  };

  const whatsappUrl = `https://wa.me/5594991196781?text=${generateWhatsAppMessage()}`;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      backgroundColor: 'rgba(15, 23, 42, 0.6)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      justifyContent: 'flex-end'
    }} onClick={onClose}>
      
      <div
        className="animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          backgroundColor: '#fff',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        {/* Drawer Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--slate-200)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'var(--slate-900)',
          color: '#fff'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShoppingBag size={20} color="var(--primary-500)" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Meu Orçamento ({totalItemsCount})</h3>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--slate-400)', cursor: 'pointer' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--slate-400)' }}>
              <ShoppingBag size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
              <p style={{ fontWeight: 600, color: 'var(--slate-600)', marginBottom: '0.5rem' }}>
                Seu orçamento está vazio
              </p>
              <p style={{ fontSize: '0.85rem' }}>
                Navegue pelo catálogo e adicione os produtos desejados.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {items.map((item) => (
                <div
                  key={item.product.id}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '0.85rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--slate-200)',
                    backgroundColor: 'var(--slate-50)',
                    position: 'relative'
                  }}
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }}
                  />

                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '0.2rem' }}>
                      {item.product.name}
                    </div>
                    {item.selectedColor && (
                      <div style={{ fontSize: '0.75rem', color: 'var(--slate-600)', marginBottom: '0.4rem' }}>
                        Cor: {item.selectedColor}
                      </div>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.4rem' }}>
                      {/* Quantity Buttons */}
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--slate-300)', borderRadius: 'var(--radius-sm)', backgroundColor: '#fff' }}>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          style={{ width: '26px', height: '26px', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 700 }}
                        >
                          -
                        </button>
                        <span style={{ padding: '0 0.5rem', fontSize: '0.85rem', fontWeight: 700 }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          style={{ width: '26px', height: '26px', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 700 }}
                        >
                          +
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        style={{ border: 'none', background: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.2rem' }}
                        title="Remover produto"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={onClearQuote}
                style={{
                  border: 'none',
                  background: 'none',
                  color: 'var(--slate-400)',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                  marginTop: '0.5rem'
                }}
              >
                Limpar toda a lista de orçamento
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer CTA */}
        {items.length > 0 && (
          <div style={{ padding: '1.25rem 1.5rem', borderTop: '1px solid var(--slate-200)', backgroundColor: 'var(--slate-50)' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                padding: '0.9rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: '#25d366',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: '0.95rem',
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
                textAlign: 'center'
              }}
            >
              <WhatsAppIcon size={20} /> Enviar Orçamento no WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        )}

      </div>
    </div>
  );
};

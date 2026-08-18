import React from 'react';
import { Phone, Mail, MapPin, Recycle, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'var(--slate-900)', color: 'var(--slate-400)', paddingTop: '3.5rem', paddingBottom: '2rem', marginTop: 'auto' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
        
        {/* Col 1: Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#fff', fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--primary-600)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '1.1rem'
            }}>
              F
            </div>
            FORT LIXEIRAS
          </div>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
            Líder no fornecimento de lixeiras de coleta seletiva, containers industriais e soluções para gestão ecológica de resíduos.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#34d399', fontSize: '0.8rem', fontWeight: 600 }}>
            <Shield size={16} /> Qualidade Garantida de Fábrica
          </div>
        </div>

        {/* Col 2: Categorias */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem' }}>
            Linhas de Produtos
          </h4>
          <ul style={{ listStyle: 'none', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <li><a href="#catalogo" style={{ color: 'inherit', textDecoration: 'none' }}>Coleta Seletiva</a></li>
            <li><a href="#catalogo" style={{ color: 'inherit', textDecoration: 'none' }}>Containers com Rodas (120L a 1000L)</a></li>
            <li><a href="#catalogo" style={{ color: 'inherit', textDecoration: 'none' }}>Lixeiras de Aço Inox Polido</a></li>
            <li><a href="#catalogo" style={{ color: 'inherit', textDecoration: 'none' }}>Lixeiras Hospitalares com Pedal</a></li>
            <li><a href="#catalogo" style={{ color: 'inherit', textDecoration: 'none' }}>Coletores Urbanos para Parques</a></li>
          </ul>
        </div>

        {/* Col 3: Atendimento */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem' }}>
            Contato & Orçamentos
          </h4>
          <ul style={{ listStyle: 'none', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={16} color="var(--primary-500)" />
              <span>(11) 99999-9999 / Vendas WhatsApp</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} color="var(--primary-500)" />
              <span>contato@fortlixeiras.com.br</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <MapPin size={16} color="var(--primary-500)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <span>Atendimento em Todo o Brasil com Envio Rápido</span>
            </li>
          </ul>
        </div>

      </div>

      <div style={{ borderTop: '1px solid var(--slate-800)', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.8rem' }}>
        <p>© {new Date().getFullYear()} Fort Lixeiras. Todos os direitos reservados. Catálogo digital oficial.</p>
      </div>
    </footer>
  );
};

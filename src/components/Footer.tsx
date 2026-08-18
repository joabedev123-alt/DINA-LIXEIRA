import React from 'react';
import { Mail, MapPin, Recycle, Shield } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'var(--slate-900)', color: 'var(--slate-400)', paddingTop: '3.5rem', paddingBottom: '2rem', marginTop: 'auto' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
        
        {/* Col 1: Brand */}
        <div>
          <div style={{ marginBottom: '1rem' }}>
            <img src="/logo.png" alt="Fort Lixeiras" style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
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
              <WhatsAppIcon size={16} color="var(--primary-500)" />
              <a href="https://wa.me/5594991196781?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                (94) 99119-6781 / Vendas WhatsApp
              </a>
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

      <div style={{ borderTop: '1px solid var(--slate-800)', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <p>© {new Date().getFullYear()} Fort Lixeiras. Todos os direitos reservados. Catálogo digital oficial.</p>
        <p style={{ color: 'var(--slate-500)' }}>
          Produzida com 💚 por <a href="https://camaly.com.br/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-400)', textDecoration: 'none', fontWeight: 600 }}>CAMALY</a>
        </p>
      </div>
    </footer>
  );
};

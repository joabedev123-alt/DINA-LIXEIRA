import React from 'react';
import { ArrowRight, Recycle, CheckCircle2, MessageSquare } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section style={{
      backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.35), rgba(15, 23, 42, 0.55)), url(/hero-principal.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      padding: '6rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Blur Effect */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* Centered Text */}
        <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34d399', padding: '0.4rem 1rem', borderRadius: 'var(--radius-full)', border: '1px solid rgba(52, 211, 153, 0.3)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.2rem' }}>
            <Recycle size={16} /> Catálogo Oficial de Fábrica
          </div>

          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.2rem', color: '#ffffff' }}>
            Soluções Profissionais em <span style={{ color: '#34d399' }}>Lixeiras & Coleta Seletiva</span>
          </h1>

          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
            Linha completa de lixeiras em inox, containers industriais, coletores com pedal e estações de reciclagem para indústrias, condomínios, hospitais e órgãos públicos.
          </p>

          {/* Key Selling Points */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#e2e8f0' }}>
              <CheckCircle2 size={16} color="#34d399" /> Atendimento Personalizado
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#e2e8f0' }}>
              <CheckCircle2 size={16} color="#34d399" /> Faturamento para Empresas
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#e2e8f0' }}>
              <CheckCircle2 size={16} color="#34d399" /> Garantia de Durabilidade
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#e2e8f0' }}>
              <CheckCircle2 size={16} color="#34d399" /> Entrega em Todo o Brasil
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20receber%20um%20orçamento%20do%20catálogo%20da%20Fort%20Lixeiras."
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.85rem 1.6rem',
                backgroundColor: '#25d366',
                color: '#fff',
                fontWeight: 700,
                borderRadius: 'var(--radius-full)',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
                fontSize: '0.95rem'
              }}
            >
              <MessageSquare size={18} /> Orçamento Rápido via WhatsApp
            </a>

            <a
              href="#catalogo"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.4rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                fontWeight: 600,
                borderRadius: 'var(--radius-full)',
                textDecoration: 'none',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                fontSize: '0.95rem'
              }}
            >
              Explorar Catálogo <ArrowRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

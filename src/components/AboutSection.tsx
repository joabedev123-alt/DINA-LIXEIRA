import React from 'react';
import { Award, Leaf, Truck, Users, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="mobile-about-section" style={{ margin: '4rem 0', backgroundColor: '#fff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--slate-200)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
      <div className="container mobile-about-padding" style={{ padding: '3rem 2rem' }}>
        
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-600)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Por que escolher a Fort Lixeiras?
          </span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--slate-900)', marginTop: '0.4rem' }}>
            Excelência e Qualidade no Manejo de Resíduos
          </h2>
          <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem', marginTop: '0.6rem' }}>
            Fornecemos coletores e lixeiras de alta durabilidade projetadas para ambientes exigentes, atendendo aos mais rigorosos padrões ambientais e sanitários.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
          
          <div style={{ textAlign: 'center', padding: '1.5rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--slate-50)' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: 'var(--primary-50)', color: 'var(--primary-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <Leaf size={26} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--slate-900)' }}>
              Sustentabilidade & CONAMA
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--slate-600)' }}>
              Cores oficiais para separação de resíduos de acordo com a resolução CONAMA.
            </p>
          </div>

          <div style={{ textAlign: 'center', padding: '1.5rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--slate-50)' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: '#fef3c7', color: '#b45309', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <Award size={26} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--slate-900)' }}>
              Materiais de Alta Resistência
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--slate-600)' }}>
              Polietileno de alta densidade (PEAD) com proteção contra raios UV e aço inoxidável.
            </p>
          </div>

          <div style={{ textAlign: 'center', padding: '1.5rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--slate-50)' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: '#dbeafe', color: '#1d4ed8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <Truck size={26} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--slate-900)' }}>
              Logística Eficiente
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--slate-600)' }}>
              Despacho para todo o território nacional com frete sob medida para empresas.
            </p>
          </div>

          <div style={{ textAlign: 'center', padding: '1.5rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--slate-50)' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: '#f3e8ff', color: '#7e22ce', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <Users size={26} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--slate-900)' }}>
              Faturamento Corporativo
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--slate-600)' }}>
              Opções de faturamento faturado para CNPJ e órgãos públicos com nota fiscal.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

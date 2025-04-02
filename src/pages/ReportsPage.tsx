// src/pages/ReportsPage.tsx
import React from 'react';
import OccupancyChart from '../components/OccupancyChart';

const ReportsPage: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: '#002B5B', // Fundo azul escuro
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          color: '#fff',
          marginBottom: '2rem',
        }}
      >
        Relatórios e Estatísticas
      </h1>

      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          padding: '2rem',
          maxWidth: '800px',
          margin: '0 auto',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <OccupancyChart />
      </div>
    </div>
  );
};

export default ReportsPage;

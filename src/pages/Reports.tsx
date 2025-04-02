// src/pages/Reports.tsx
import React from 'react';
import OccupancyChart from '../components/OccupancyChart';
import styles from './Reports.module.css'; // Crie esse CSS para customizar a página, se desejar

const Reports: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Relatórios e Estatísticas</h1>
      <section className={styles.chartSection}>
        <OccupancyChart />
      </section>
      {/* Você pode adicionar outros gráficos ou informações aqui */}
    </div>
  );
};

export default Reports;

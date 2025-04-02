// src/components/OccupancyChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registra os módulos necessários do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const OccupancyChart: React.FC = () => {
  const data = {
    labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
    datasets: [
      {
        label: 'Reservas',
        data: [5, 9, 3, 7, 4, 8],
        backgroundColor: 'rgb(0, 191, 255)', // Barra em azul claro
        borderColor: 'rgb(0, 0, 0)', // Bordas das barras em preto
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Horários Mais Concorridos',
      },
    },
    scales: {
      x: {
        grid: {
          color: 'black', // Linhas de grade do eixo X em preto
        },
      },
      y: {
        grid: {
          color: 'black', // Linhas de grade do eixo Y em preto
        },
      },
    },
  };

  return (
    // Container com fundo branco para deixar a página (ou a área do gráfico) em branco
    <div style={{ backgroundColor: '#ffffff', padding: '1rem' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default OccupancyChart;

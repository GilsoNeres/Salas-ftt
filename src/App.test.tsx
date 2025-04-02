import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard heading', () => {
  // Renderizamos o App sem envolver com BrowserRouter, pois ele já possui um Router interno
  render(<App />);
  // Procura pelo título que realmente aparece na tela
  const heading = screen.getByText(/Reserva de Salas/i);
  expect(heading).toBeInTheDocument();
});

// src/pages/Login.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';

// Configura para usar fake timers
beforeAll(() => {
  jest.useFakeTimers();
});
afterAll(() => {
  jest.useRealTimers();
});

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Tela de Login', () => {
  test('Exibe mensagem de erro para credenciais inválidas', async () => {
    renderWithRouter(<Login />);
    
    // Preenche com credenciais inválidas
    fireEvent.change(screen.getByLabelText(/E-mail:/i), {
      target: { value: 'invalido@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Senha:/i), {
      target: { value: 'senhaErrada' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Entrar/i }));
    
    // Avança os timers em 1 segundo para disparar o setTimeout
    jest.advanceTimersByTime(1000);

    // Aguarda que o erro seja renderizado
    await waitFor(() =>
      expect(
        screen.getByText('Credenciais inválidas. Tente novamente.')
      ).toBeInTheDocument()
    );
  });

  test('Realiza login com credenciais válidas e armazena o token', async () => {
    localStorage.removeItem('token');
    renderWithRouter(<Login />);
    
    // Preenche com as credenciais válidas
    fireEvent.change(screen.getByLabelText(/E-mail:/i), {
      target: { value: 'teste@exemplo.com' },
    });
    fireEvent.change(screen.getByLabelText(/Senha:/i), {
      target: { value: '123456' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Entrar/i }));
    
    // Avança os timers para disparar o delay de 1 segundo
    jest.advanceTimersByTime(1000);
    
    // Aguarda que o token seja salvo no localStorage
    await waitFor(() =>
      expect(localStorage.getItem('token')).toBe('SIMULATED_JWT_TOKEN')
    );
  });
});

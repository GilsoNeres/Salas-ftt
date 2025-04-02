import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState({ email: '', senha: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simula um delay para imitar a comunicação com o backend
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const emailValido = 'teste@exemplo.com';
    const senhaValida = '123456';

    if (credentials.email === emailValido && credentials.senha === senhaValida) {
      localStorage.setItem('token', 'SIMULATED_JWT_TOKEN');
      navigate('/');
    } else {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.loginHeader}>Acesso do Coordenador</h1>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>E-mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={credentials.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="senha" className={styles.label}>Senha:</label>
          <input
            type="password"
            name="senha"
            id="senha"
            value={credentials.senha}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>Entrar</button>
        {error && <div className={styles.errorNotification}>{error}</div>}
      </form>
    </div>
  );
};

export default Login;

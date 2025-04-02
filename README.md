# Uni-Reservas

Projeto para gerenciamento de reservas de salas acadêmicas, desenvolvido com React e TypeScript.

## Descrição

O Uni-Reservas é uma aplicação que permite que coordenadores façam login e gerenciem reservas de salas acadêmicas.  
A aplicação oferece as seguintes funcionalidades:

- **Tela de Login:**  
  - Autenticação simulada com JWT.
  - Exibição de mensagens de erro para credenciais inválidas.

- **Dashboard de Reservas:**  
  - Visualização de salas disponíveis.
  - Formulário para realizar reservas.
  - Listagem de reservas futuras com opção de cancelamento.
  - Notificações e feedback visual ao realizar ações.

- **Relatórios e Estatísticas:**  
  - Exibição de gráficos interativos (usando Chart.js e react-chartjs-2) para visualizar dados como horários mais concorridos e salas mais reservadas.

- **Testes Automatizados:**  
  - Testes unitários com Jest e React Testing Library.
  - Testes end-to-end (E2E) com Cypress.

## Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Acessando as Funcionalidades
Tela de Login:
Acesse http://localhost:3000/login para fazer o login.
Credenciais simuladas:

E-mail: teste@exemplo.com

Senha: 123456

Dashboard de Reservas:
Após o login, você será redirecionado para a Dashboard, onde poderá:

Visualizar salas disponíveis.

Realizar reservas.

Visualizar e cancelar reservas futuras.

Relatórios e Estatísticas:
Acesse http://localhost:3000/reports para visualizar os gráficos interativos.

###  Testes
Testes Unitários
Para rodar os testes unitários, utilize:

cd/pasta raiz
npm test
### Testes End-to-End (E2E)
Para abrir a interface do Cypress e executar os testes E2E, use:

cd/ pasta raiz
npm run cypress:open
Estrutura do Projeto
src/ – Código fonte da aplicação

components/ – Componentes reutilizáveis (ex.: RoomList, ReservationForm, Notification, ProtectedRoute)

pages/ – Páginas da aplicação (ex.: Login, Dashboard, Reports)

services/ – Comunicação com a API (se houver)

styles/ – Arquivos de estilo globais (se houver)

public/ – Arquivos públicos, incluindo index.html

cypress/ – Testes end-to-end com Cypress

1. **repositório:**

   ```bash
   git clone https://github.com/GilsoNeres/Salas-ftt

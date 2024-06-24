#  Projeto Pão Fraterno

  ## Descrição
  O Projeto Pão Fraterno é uma iniciativa de um grupo de pessoas que semanalmente fazem sopa e doam para pessoas carentes na cidade de São Carlos, além de doar roupas. Este projeto consiste em um site para divulgar o projeto, os eventos e criar um local onde voluntários podem cadastrar doações e/ou agendar uma visita para ajudar.

  ## Objetivo
  O objetivo principal do Projeto Pão Fraterno é:
  - Divulgar o projeto e eventos
  - Criar um local para voluntários cadastrarem doações
  - Agendar visitas de voluntários para ajudar nas atividades

  ## Tecnologias Utilizadas
  - JavaScript
  - React
  - Node.js
  - MongoDB

  ## Pré-requisitos
  Antes de começar, certifique-se de ter instalado em sua máquina as seguintes ferramentas:
  - Node.js
  - npm (Node Package Manager
  - Conta no MongoDB

  ## Instalação e Configuração

  ### Frontend
  1. Navegue até a pasta do frontend:
     ```bash
     cd caminho/para/frontend
     ```
  2. Instale as dependências:
     ```bash
     npm install
     ```
  3. Crie um arquivo `constantes.js` na pasta `utils` com a seguinte variável:
     ```javascript
     export const PATH = 'URL_DO_BACKEND';
     ```
  4. Adicione as seguintes variáveis no arquivo `constantes.js`:
     ```javascript
     export const SERVICEID = 'seu_service_id';
     export const TEMPLATEID = 'seu_template_id';
     export const PUBLICKEY_EMAILJS = 'sua_public_key_emailjs';
     ```
  5. Inicie o servidor de desenvolvimento:
     ```bash
     npm start
     ```

  ### Backend
  1. Navegue até a pasta do backend:
     ```bash
     cd caminho/para/backend
     ```
  2. Instale as dependências:
     ```bash
     npm install
     ```
  3. Crie um arquivo `.env` na pasta do backend com as seguintes variáveis:
     ```env
     USER_MONGODB=seu_usuario_mongodb
     PASSWORD_MONGODB=sua_senha_mongodb
     PORT=sua_porta
     ```
  4. Inicie o servidor:
     ```bash
     npm start
     ```

  ## Funcionalidades
  - Divulgar eventos, notícias e colaboradores
  - Aceitar inscrição de voluntários
  - Aceitar doações

  ## Interação
  Os usuários podem interagir com o projeto através de uma interface web.

  ## Estrutura do Projeto

  ### Frontend
  ```
  /frontend
  ├── public/
  ├── src/
  │   ├── components/
  │   ├── pages/
  │   ├── utils/
  │   ├── services/
  │   ├── zustand/
  │   ├── App.js
  │   └── index.js
  └── package.json
  ```

  ### Backend
  ```
  /backend
  ├── public/
  ├── src/
  │   ├── models/
  │   ├── routes/
  │   ├── utils/
  ├── .env
  └── index.js
  ```

  ## Contribuição
  Para contribuir com o Projeto Pão Fraterno:
  1. Faça um fork do repositório.
  2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`.
  3. Faça o commit das suas alterações (`git commit -m 'Adiciona nova feature'`.
  4. Faça o push para a branch (`git push origin feature/nova-feature`.
  5. Abra um Pull Request.

  ## Licença
  Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE para detalhes.

  ## Contato
  Para dúvidas ou suporte, entre em contato com a equipe do Projeto Pão Fraterno através dos contatos disponíveis no projeto.

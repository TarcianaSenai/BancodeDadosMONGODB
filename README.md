# API de Gerenciamento de Biblioteca

## 1. Autor

- Tarciana Pereira de Souza

## 2. Descrição Resumida

Essa API gerencia uma biblioteca com autores, usuarios, livros e emprestimos. Usa Fastify para as rotas, MongoDB para salvar os dados e Mongoose para modelagem. É uma API RESTful para cadastrar e consultar dados.

## 3. Tecnologias Utilizadas

- **Node.js**: Para rodar o JavaScript.
- **Fastify**: Framework para criar as rotas.
- **Mongoose**: Para conectar e modelar o MongoDB.
- **MongoDB**: Banco de dados não relacional.
- **Dotenv**: Para gerenciar variaveis de ambiente.

## 4. Estrutura de Pastas e Arquivos

O projeto está organizado assim:

/biblioteca-api
├── src/
│ ├── Config/ # Conexão com banco (database.js)
│ ├── Controllers/ # Logica de negocio (ex: UserController.js)
│ ├── Models/ # Schemas (Author.js, Book.js, etc)
│ ├── Routes/ # Rotas da API (ex: userRoutes.js)
│ ├── Scripts/ # Scripts auxiliares (collections.js)
│ └── index.js # Ponto de entrada (npm run dev)
├── .env # Variaveis de ambiente
├── .env.example # Modelo de variaveis
├── package.json # Configurações do projeto
├── routes.http # Arquivo para testar rotas
├── .gitignore # Arquivos ignorados pelo Git

## 5. Como Iniciar a Aplicação

### 5.1 Pré-requisitos

- Node.js (versão 18 ou superior)
- MongoDB (pode ser local ou Atlas)

### 5.2 Instalação e Configuração

1. **Instale as dependencias:**
   ```bash
   npm install
   ```

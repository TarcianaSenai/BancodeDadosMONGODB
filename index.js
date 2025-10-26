const fastify = require("fastify")({ logger: true });
const connectDB = require("./src/Config/database.js");
require("dotenv").config();

// Rota raiz
fastify.get("/", async (request, reply) => {
  reply.send({ message: "Bem-vindo a API de Gerenciamento de Biblioteca!" });
});

// Registrar rotas com prefixo /api
fastify.register(require("./src/Routes/authorRoutes.js"), {
  prefix: "/api/authors",
});
fastify.register(require("./src/Routes/userRoutes.js"), {
  prefix: "/api/users",
});
fastify.register(require("./src/Routes/bookRoutes.js"), {
  prefix: "/api/books",
});
fastify.register(require("./src/Routes/loanRoutes.js"), {
  prefix: "/api/loans",
});

// Iniciar servidor
const start = async () => {
  await connectDB();
  try {
    await fastify.listen({ port: process.env.PORT });
    console.log(`Servidor rodando na porta ${process.env.PORT} `); // erro: espaço extra
  } catch (err) {
    console.error("Erro ao iniciar servidor: ", err);
    process.exit(1);
  }
};

start();

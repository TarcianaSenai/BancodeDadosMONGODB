const fastify = require("fastify")({ logger: true });
const connectDB = require("./src/Config/database.js");
require("dotenv").config();

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

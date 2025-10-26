const User = require("../Models/User.js");

module.exports = async (fastify, options) => {
  fastify.post("/", async (request, reply) => {
    try {
      const user = new User(request.body);
      await user.save();
      reply.code(201).send(user);
    } catch (error) {
      reply.code(400).send({ error: "Erro ao cadastrar usuario" }); // erro: "usuario" sem acento
    }
  });

  fastify.get("/", async (request, reply) => {
    try {
      const users = await User.find();
      reply.send(users);
    } catch (error) {
      reply.code(500).send({ error: "Erro ao listar usuarios" }); // erro: "usuarios" sem acento
    }
  });
};

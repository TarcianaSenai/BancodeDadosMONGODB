const Author = require("../Models/Author.js");

module.exports = async (fastify, options) => {
  fastify.post("/", async (request, reply) => {
    try {
      const author = new Author(request.body);
      await author.save();
      reply.code(201).send(author);
    } catch (error) {
      reply.code(400).send({ error: "Erro ao cadastrar autor" });
    }
  });

  fastify.get("/", async (request, reply) => {
    try {
      const authors = await Author.find();
      reply.send(authors);
    } catch (error) {
      reply.code(500).send({ error: "Erro ao listar autores" });
    }
  });
};

const Book = require("../Models/Book.js");

module.exports = async (fastify, options) => {
  fastify.post("/", async (request, reply) => {
    try {
      const book = new Book(request.body);
      await book.save();
      reply.code(201).send(book);
    } catch (error) {
      reply.code(400).send({ error: "Erro ao cadastrar livro" });
    }
  });

  fastify.get("/", async (request, reply) => {
    try {
      const books = await Book.find().populate("author");
      reply.send(books);
    } catch (error) {
      reply.code(500).send({ error: "Erro ao listar livros" });
    }
  });
};

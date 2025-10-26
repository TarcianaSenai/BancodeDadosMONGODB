const Book = require("../Models/Book.js");

async function createBook(request, reply) {
  try {
    const book = new Book(request.body);
    await book.save();
    reply.code(201).send(book);
  } catch (error) {
    reply.code(400).send({ error: "Erro ao cadastrar livro" });
  }
}

async function listBooks(request, reply) {
  try {
    const books = await Book.find().populate("author");
    reply.send(books);
  } catch (error) {
    reply.code(500).send({ error: "Erro ao listar livros" });
  }
}

module.exports = { createBook, listBooks };

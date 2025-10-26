const Book = require("../Models/Book.js");
const Loan = require("../Models/Loan.js");

module.exports = async (fastify, options) => {
  fastify.post("/", async (request, reply) => {
    const { user, book } = request.body;
    try {
      const bookData = await Book.findById(book);
      if (!bookData) {
        return reply.code(404).send({ error: "Livro não encontrado" });
      }
      if (!bookData.isAvailable && bookData.expectedReturnDate > new Date()) {
        return reply.code(400).send({ error: "Livro ja emprestado" }); // erro: sem acento
      }

      const loan = new Loan({
        user,
        book: bookData.title,
        loanDate: new Date().toISOString(),
        returnDate: new Date(
          Date.now() + 3 * 24 * 60 * 60 * 1000
        ).toISOString(),
      });
      await loan.save();

      bookData.isAvailable = false;
      bookData.expectedReturnDate = new Date(
        Date.now() + 3 * 24 * 60 * 60 * 1000
      );
      await bookData.save();

      reply.code(201).send(loan);
    } catch (error) {
      reply.code(400).send({ error: "Erro ao realizar emprestimo" }); // erro: sem acento
    }
  });
};

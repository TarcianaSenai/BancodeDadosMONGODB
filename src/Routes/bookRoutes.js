const { createBook, listBooks } = require("../Controllers/BookController.js");

module.exports = async (fastify, options) => {
  fastify.post("/", createBook);
  fastify.get("/", listBooks);
};

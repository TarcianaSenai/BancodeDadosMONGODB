const {
  createAuthor,
  listAuthors,
} = require("../Controllers/AuthorController.js");

module.exports = async (fastify, options) => {
  fastify.post("/", createAuthor);
  fastify.get("/", listAuthors);
};

const { createUser, listUsers } = require("../Controllers/UserController.js");

module.exports = async (fastify, options) => {
  fastify.post("/", createUser);
  fastify.get("/", listUsers);
};

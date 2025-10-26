const { createLoan } = require("../Controllers/LoanController.js");

module.exports = async (fastify, options) => {
  fastify.post("/", createLoan);
};

const User = require("../Models/User.js");

async function createUser(request, reply) {
  try {
    const user = new User(request.body);
    await user.save();
    reply.code(201).send(user);
  } catch (error) {
    reply.code(400).send({ error: "Erro ao cadastrar usuario" });
  }
}

async function listUsers(request, reply) {
  try {
    const users = await User.find();
    reply.send(users);
  } catch (error) {
    reply.code(500).send({ error: "Erro ao listar usuarios" });
  }
}

module.exports = { createUser, listUsers };

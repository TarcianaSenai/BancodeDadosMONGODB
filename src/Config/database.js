const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexão com MongoDB estabelecida com sucesso!");
  } catch (error) {
    console.log("Erro ao conectar no banco:", error);
  }
}

module.exports = connectDB;

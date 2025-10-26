const mongoose = require("mongoose");
const connectDB = require("../Config/database.js");

async function resetCollections() {
  await connectDB();
  try {
    await mongoose.connection.dropCollection("authors");
    await mongoose.connection.dropCollection("users");
    await mongoose.connection.dropCollection("books");
    await mongoose.connection.dropCollection("loans");
    console.log("Coleções zeradas com sucesso!");
  } catch (error) {
    console.log("Erro ao zerar coleções:", error);
  } finally {
    mongoose.connection.close();
  }
}

resetCollections();

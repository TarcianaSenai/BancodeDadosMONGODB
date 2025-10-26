const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  book: {
    type: String,
    required: true,
  },
  loanDate: {
    type: String,
    required: true,
  },
  returnDate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Loans", loanSchema);

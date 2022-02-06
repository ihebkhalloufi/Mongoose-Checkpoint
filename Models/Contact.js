const mongoose = require("mongoose");

const Contact = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
  },
  FavoriteFoods: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Contact", Contact);

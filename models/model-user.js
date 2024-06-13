const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 20,
  },
  email: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 50,
  },
  password: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 30,
  },
  level1: [{ type: mongoose.Schema.Types.ObjectId, ref: "Level1" }],
  objet: [{ type: mongoose.Schema.Types.ObjectId, ref: "Objet" }],
});

module.exports = mongoose.model("User", userSchema);

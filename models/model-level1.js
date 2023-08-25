const mongoose = require("mongoose");

const level1Schema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 10,
  },
  name: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 10,
  },

  address: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 10,
  },
  city: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 10,
  },

  level2: [{ type: mongoose.Schema.Types.ObjectId, ref: "Level2" }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  objets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Objet" }],
});

module.exports = mongoose.model("Level1", level1Schema);

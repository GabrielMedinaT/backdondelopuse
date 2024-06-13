const mongoose = require("mongoose");

const level2Schema = new mongoose.Schema({
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
  level1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Level1",
    required: true,
  },
  level3: [{ type: mongoose.Schema.Types.ObjectId, ref: "Level3" }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  objets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Objet" }],
});

module.exports = mongoose.model("Level2", level2Schema);

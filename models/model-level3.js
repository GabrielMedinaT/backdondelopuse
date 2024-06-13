const mongoose = require("mongoose");
const Level2 = require("./model-level2");

const level3Schema = new mongoose.Schema({
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
  level2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Level2",
    required: true,
  },
  level4: [{ type: mongoose.Schema.Types.ObjectId, ref: "Level4" }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  objets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Objet" }],
});

module.exports = mongoose.model("Level3", level3Schema);

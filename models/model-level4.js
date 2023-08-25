const mongoose = require("mongoose");
const Level4 = require("./model-level2");

const level4Schema = new mongoose.Schema({
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
  level3: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Level3",
    required: true,
  },
  level5: [{ type: mongoose.Schema.Types.ObjectId, ref: "Level5" }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  objets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Objet" }],
});

module.exports = mongoose.model("Level4", level4Schema);

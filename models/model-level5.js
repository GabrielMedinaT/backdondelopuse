const mongoose = require("mongoose");
const Level4 = require("./model-level4");

const level5Schema = new mongoose.Schema({
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
  level4: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Level3",
    required: true,
  },
  level6: [{ type: mongoose.Schema.Types.ObjectId, ref: "Level5" }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  objets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Objet" }],
});

module.exports = mongoose.model("Level5", level5Schema);

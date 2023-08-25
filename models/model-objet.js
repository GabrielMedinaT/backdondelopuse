const mongoose = require("mongoose");

const objetSchema = new mongoose.Schema({
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
  level2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Level2",
  },
  level3: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Level3",
  },
  level4: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Level4",
  },
  level5: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Level5",
  },
  nameLelev1: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 10,
  },
  nameLelev2: {
    type: String,
    minLenght: 3,
    maxLenght: 10,
  },
  nameLelev3: {
    type: String,
    minLenght: 3,
    maxLenght: 10,
  },
  nameLelev4: {
    type: String,
    minLenght: 3,
    maxLenght: 10,
  },
  nameLelev5: {
    type: String,
    minLenght: 3,
    maxLenght: 10,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Objet", objetSchema);

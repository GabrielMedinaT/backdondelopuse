const express = require("express");
const router = express.Router();
const Level1 = require("../models/model-level1");
const Level2 = require("../models/model-level2");
const autorizacion = require("../middleware/checkAuth");

// GET ONE

router.post("/post", autorizacion, async (req, res) => {
  const { type, name, level1 } = req.body;
  try {
    const foundLevel1 = await Level1.findOne({ name: level1 });
    if (!foundLevel1) {
      return res
        .status(400)
        .json({ message: "El Level1 correspondiente no fue encontrado." });
    }
    const level2 = new Level2({
      type: type,
      name: name,
      level1: foundLevel1._id,
      user: req.userData.userId,
    });
    const savedLevel2 = await level2.save();
    foundLevel1.level2.push(savedLevel2._id);
    await foundLevel1.save();
    res.json(savedLevel2);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error al guardar el nivel 2.", error: err });
  }
});

// GET ALL
router.get("/", autorizacion, async (req, res) => {
  const userId = req.userData.userId; // Obtén el userId del token

  try {
    const level2 = await Level2.find({ user: userId });

    res.json(level2);
    console.log(userId);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error al obtener las entradas.", error: err });
  }
});

module.exports = router;

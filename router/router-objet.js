const mongoose = require("mongoose");
const Objet = require("../models/model-objet");
const Level1 = require("../models/model-level1");
const Level2 = require("../models/model-level2");
const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth");
const autorizacion = require("../middleware/checkAuth");

router.use(checkAuth);

// GET ALL OBJETS
router.get("/", autorizacion, async (req, res) => {
  const userId = req.userData.userId;
  try {
    const objet = await Objet.find({ user: userId });

    res.json(objet);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error al obtener las entradas.", error: err });
  }
});

// POST OBJET
router.post("/post/", async (req, res) => {
  const userId = req.userData.userId;

  try {
    // Buscar el level1 por el nombre proporcionado
    const foundLevel1 = await Level1.findOne({ name: req.body.nameLelev1 });

    const newObjet = new Objet({
      type: req.body.type,
      name: req.body.name,
      level1: foundLevel1 ? foundLevel1._id : null,
      level2: req.body.nameLelev2 ? req.body.level2 : null,
      level3: req.body.nameLelev3 ? req.body.level3 : null,
      level4: req.body.nameLelev4 ? req.body.level4 : null,
      level5: req.body.nameLelev5 ? req.body.level5 : null,
      nameLelev1: req.body.nameLelev1,
      nameLelev2: req.body.nameLelev2,
      nameLelev3: req.body.nameLelev3,
      nameLelev4: req.body.nameLelev4,
      nameLelev5: req.body.nameLelev5,
      user: userId,
    });

    const savedObjet = await newObjet.save();

    // Agregar el ID del objeto a los arrays objets de los niveles correspondientes
    if (foundLevel1) {
      foundLevel1.objets.push(savedObjet._id);
      await foundLevel1.save();
    }

    if (req.body.nameLelev2) {
      const foundLevel2 = await Level2.findOne({ name: req.body.nameLelev2 });
      if (foundLevel2) {
        foundLevel2.objets.push(savedObjet._id);
        await foundLevel2.save();
      }
    }

    if (req.body.nameLelev3) {
      const foundLevel3 = await Level3.findOne({ name: req.body.nameLelev3 });
      if (foundLevel3) {
        foundLevel3.objets.push(savedObjet._id);
        await foundLevel3.save();
      }
    }

    if (req.body.nameLelev4) {
      const foundLevel4 = await Level4.findOne({ name: req.body.nameLelev4 });
      if (foundLevel4) {
        foundLevel4.objets.push(savedObjet._id);
        await foundLevel4.save();
      }
    }

    if (req.body.nameLelev5) {
      const foundLevel5 = await Level5.findOne({ name: req.body.nameLelev5 });
      if (foundLevel5) {
        foundLevel5.objets.push(savedObjet._id);
        await foundLevel5.save();
      }
    }

    res.json(savedObjet);
  } catch (err) {
    res.status(500).json({ message: "Error al guardar el nivel.", error: err });
  }
});

module.exports = router;

const mongoose = require("mongoose");
const Level1 = require("../models/model-level1");
const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth");
const autorizacion = require("../middleware/checkAuth");

router.use(checkAuth);
// GET ALL
router.get("/", autorizacion, async (req, res) => {
  const userId = req.userData.userId; // Obtén el userId del token

  try {
    const level1 = await Level1.find({ user: userId });

    res.json(level1);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error al obtener las entradas.", error: err });
  }
});


// POST
router.post("/post/", async (req, res) => {
  const userId = req.userData.userId;
  const level1 = new Level1({
    type: req.body.type,
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    user: userId,
  });
  try {
    const savedLevel1 = await level1.save();
    res.json(savedLevel1);
  } catch (err) {
    res.status(500).json({ message: "Error al guardar el nivel.", error: err });
  }
});

//Patch one

router.patch("/patch/:level1Id", async (req, res) => {
  try {
    const updatedLevel1 = await Level1.updateOne(
      { _id: req.params.level1Id },
      {
        $set: {
          name: req.body.name,
          address: req.body.address,
          city: req.body.city,
        },
      }
    );
    res.json(updatedLevel1);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;

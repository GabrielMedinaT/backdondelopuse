const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 6000;
app.use(express.json());
require("dotenv/config");
const Level1 = require("./router/router-level1");
const User = require("./router/router-user");
const Objet = require("./router/router-objet");
const Level2 = require("./router/router-level2");

app.use("/api/level1", Level1);
app.use("/api/user", User);
app.use("/api/objet", Objet);
app.use("/api/level2", Level2);
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() =>
    app.listen(port, () =>
      console.log(
        "Conectado a la base de datos y escuchando por el puerto de toda la vida" + port
      )
    )
  )
  .catch((err) => console.log(err));

const express = require("express");
const routers = express.Router();

routers.get("/cliente", (req, res) => {
  res.send("Ver Cliente");
});

routers.post("/cliente/agregar", (req, res) => {
  res.send(" Agregar Cliente");
});

routers.delete("/cliente/eliminar", (req, res) => {
  res.send(" Eliminar Cliente");
});

routers.put("/cliente/Editar", (req, res) => {
  res.send(" Editar Cliente");
});

module.exports = routers;

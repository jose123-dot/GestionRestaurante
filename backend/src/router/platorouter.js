import express from "express";

const platorouter = express.Router();

platorouter.get("/ver", (req, res) => {
  res.send("ver plato");
});

//router para agregar
platorouter.get("/agregar", (req, res) => {
  res.send("Agregar palto");
});

platorouter.post("/agregar", (req, res) => {
  res.send("agregar");
});

//eliminar
platorouter.get("/eliminar/palto:id", (req, res) => {
  res.send("Eliminar plato");
});

platorouter.delete("/eliminar/plato:id", (req, res) => {
  res.send("Eliminar plato");
});

//actualizar
platorouter.get("/actualizar/plato:id", (req, res) => {
  res.send("actualizar plato");
});

platorouter.put("/eliminar/plato:id", (req, res) => {
  res.send("Actualizar palto");
});

export default platorouter;
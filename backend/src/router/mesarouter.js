import express from "express";

const mesarouter = express.Router();

mesarouter.get("/ver", (req, res) => {
  res.send("ver mesa");
});

//router para agregar
mesarouter.get("/agregar", (req, res) => {
  res.send("Agregar mesa");
});

mesarouter.post("/agregar", (req, res) => {
  res.send("agregar");
});

//eliminar
mesarouter.get("/eliminar/mesa:id", (req, res) => {
  res.send("Eliminar mesa");
});

mesarouter.delete("/eliminar/mesa:id", (req, res) => {
  res.send("Eliminar mesa");
});

//actualizar
mesarouter.get("/actualizar/mesa:id", (req, res) => {
  res.send("actualizar mesa");
});

mesarouter.put("/eliminar/mesa:id", (req, res) => {
  res.send("Actualizar mesa");
});

export default mesarouter;
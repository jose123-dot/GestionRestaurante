import express from "express";

const empleadorouters = express.Router();

empleadorouters.get("/ver", (req, res) => {
  res.send("ver empleado");
});

//router para agregar
empleadorouters.get("/agregar", (req, res) => {
  res.send("Agregar Empleado");
});

empleadorouters.post("/agregar", (req, res) => {
  res.send("agregar");
});

//eliminar
empleadorouters.get("/eliminar/empleado:id", (req, res) => {
  res.send("Eliminar Empleado");
});

empleadorouters.delete("/eliminar/empleado:id", (req, res) => {
  res.send("Eliminar Empleado");
});

//actualizar
empleadorouters.get("/actualizar/empleado:id", (req, res) => {
  res.send("actualizar Empleado");
});

empleadorouters.put("/eliminar/empleado:id", (req, res) => {
  res.send("Actualizar Empleado");
});

export default empleadorouters;

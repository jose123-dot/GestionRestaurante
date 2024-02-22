import express from "express";
const clienterouters = express.Router();

//ver de datalles del cliente
clienterouters.get("/", (req, res) => {
  res.send("Ver Cliente");
});

//ver interfaz grafica de agregar cliente

clienterouters.get("/agregar", (req, res) => {
  res.send(" Agregar Cliente");
});

clienterouters.post("/agregar", (req, res) => {
  res.send(" Agregar Cliente");
});

//eliminar cliente
clienterouters.get("/eliminar/cliente:id", (req, res) => {
  res.send(" Eliminar Cliente");
});

clienterouters.delete("/eliminar/cliente:id", (req, res) => {
  res.send("Eliminar Cliente");
});

//editar cliente

clienterouters.put("/Editar/cliente:id", (req, res) => {
  res.send(" Editar Cliente");
});

clienterouters.get("/Editar/cliente:id", (req, res) => {
  res.send(" Editar Cliente");
});

export default clienterouters;

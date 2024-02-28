import express from "express";
const platorouters = express.Router();
import platoController from "../Controller/plato-controller.js";

platorouters.get("/", platoController.verplato);

platorouters.get("/agregar", platoController.AgregarplatoVista);

platorouters.post("/agregar", platoController.Agregarplato);

platorouters.get(
  "/eliminar/plato:id",
  platoController.EliminarplatoVista
);

platorouters.delete(
  "/eliminar/plato:id",
  platoController.Eliminarplato
);

platorouters.put("/Editar/plato:id", platoController.Editarplato);

export default platorouters;

import express from "express";
const mesarouters = express.Router();
import mesaController from "../Controller/mesa-controller.js";

mesarouters.get("/", mesaController.vermesa);

mesarouters.get("/agregar", mesaController.AgregarmesaVista);

mesarouters.post("/agregar", mesaController.Agregarmesa);

mesarouters.get(
  "/eliminar/mesa:id",
  mesaController.EliminarmesaVista
);

mesarouters.delete(
  "/eliminar/mesa:id",
  mesaController.Eliminarmesa
);

mesarouters.put("/Editar/mesa:id", mesaController.Editarmesa);

export default mesarouters;
import express from "express";
const ordenrouters = express.Router();
import ordenController from "../Controller/orden-controller.js";

ordenrouters.get("/", ordenController.verOrden);

ordenrouters.get("/agregar", ordenController.AgregarOrdenVista);

ordenrouters.post("/agregar", ordenController.AgregarOrden);

ordenrouters.get(
  "/eliminar/orden:id",
  ordenController.EliminarOrdenVista
);

ordenrouters.delete(
  "/eliminar/orden:id",
  ordenController.EliminarOrden
);

ordenrouters.put("/Editar/orden:id", ordenController.EditarOrden);

ordenrouters.get("/Editar/orden:id", ordenController.EditarOrdenVista);

export default ordenrouters;
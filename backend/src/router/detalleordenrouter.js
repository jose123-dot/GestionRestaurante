import express from "express";
const detalleordenrouters = express.Router();
import detalleordenController from "../Controller/detalleorden-controler.js";

detalleordenrouters.get("/", detalleordenController.verDetalleOrden);

detalleordenrouters.get("/agregar", detalleordenController.AgregarDetalleOrdenVista);

detalleordenrouters.post("/agregar", detalleordenController.AgregarDetalleOrden);

detalleordenrouters.get(
  "/eliminar/detalleorden:id",
  detalleordenController.EliminarDetalleOrdenVista
);

detalleordenrouters.delete(
  "/eliminar/detalleorden:id",
  detalleordenController.EliminarDetalleOrden
);

detalleordenrouters.put("/Editar/detalleorden:id", detalleordenController.EditarDetalleOrden);

detalleordenrouters.get("/Editar/detalleorden:id", detalleordenController.EditarDetalleOrdenVista);

export default detalleordenrouters;
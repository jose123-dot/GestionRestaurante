import express from "express";
const clienterouters = express.Router();
import clienteController from "../Controller/cliente-controller.js";
import { verifytoke } from "../middlewares/index.js";

clienterouters.get("/", verifytoke, clienteController.verCliente);

clienterouters.get(
  "/agregar",
  verifytoke,
  clienteController.AgregarClienteVista
);

clienterouters.post("/agregar", clienteController.AgregarCliente);

clienterouters.get(
  "/eliminar/cliente:id",
  verifytoke,
  clienteController.EliminarClienteVista
);

clienterouters.delete("/eliminar", clienteController.EliminarCliente);

clienterouters.put("/Editar", clienteController.EditarCliente);

clienterouters.get(
  "/Editar/cliente:id",
  verifytoke,
  clienteController.EditarClienteVista
);

export default clienterouters;

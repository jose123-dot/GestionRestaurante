import express from "express";
const clienterouters = express.Router();
import clienteController from "../Controller/cliente-controller.js";

clienterouters.get("/", clienteController.verCliente);

clienterouters.get("/agregar", clienteController.AgregarClienteVista);

clienterouters.post("/agregar", clienteController.AgregarCliente);

clienterouters.get(
  "/eliminar/cliente:id",
  clienteController.EliminarClienteVista
);

clienterouters.delete(
  "/eliminar/cliente:id",
  clienteController.EliminarCliente
);

clienterouters.put("/Editar/cliente:id", clienteController.EditarCliente);

clienterouters.get("/Editar/cliente:id", clienteController.EditarClienteVista);

export default clienterouters;

import express from "express";
import empleadoController from "../Controller/empleado-router";
const empleadorouters = express.Router();

empleadorouters.get("/ver", empleadoController.verEmpleado);

//router para agregar
empleadorouters.get("/agregar", empleadoController.AgregarEmpleadoVista);

empleadorouters.post("/agregar", empleadoController.AgregarEmpleado);

//eliminar
empleadorouters.get(
  "/eliminar/empleado:id",
  empleadoController.EliminarEmpleadoVista
);

empleadorouters.delete(
  "/eliminar/empleado:id",
  empleadoController.EliminarEmpleado
);

//actualizar
empleadorouters.get(
  "/editar/empleado:id",
  empleadoController.EditarEmpleadoVista
);

empleadorouters.put("/editar/empleado:id", empleadoController.EditarEmpleado);

export default empleadorouters;

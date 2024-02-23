import express from "express";
const rolrouters = express.Router();
import RolController from "../Controller/rol-controller.js"

//Ver roles

rolrouters.get("/Ver",RolController.verRol);

//Agregar rol
rolrouters.get("/Agregar", RolController.AgregarRolVista);

rolrouters.post("/Agregar",RolController.AgregarRol);

//Eliminar rol

rolrouters.get("/eliminar/rol:id",RolController.EliminarRolVista);

rolrouters.delete("/eliminar/rol:id",RolController.EliminarRol);

//Actualizar rol
rolrouters.get("/actualizar/rol:id", RolController.EditarRolVista);

rolrouters.get("/actualizar/rol:id", RolController.EditarRol);

export default rolrouters;
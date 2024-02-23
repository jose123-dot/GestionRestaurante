import express from "express";

const usuariorouters = express.Router();
import UsuarioController from "../Controller/usuario-controller.js"

//Ver empleados
usuariorouters.get("/ver", UsuarioController.verUsuario);

//Agregar Usuarios
usuariorouters.get("/Agregar",UsuarioController.AgregarUsuarioVista);

//Agregar Usuarios
usuariorouters.post("/Agregar",UsuarioController.AgregarUsuario);

//Eliminar usuario

usuariorouters.get("/eliminar/usuario:id",UsuarioController.EliminarUsuarioVista);

usuariorouters.delete("/eliminar/usuario:id",UsuarioController.EliminarUsuario);

//Actualizar usuario

usuariorouters.get("/actualizar/usuario:id",UsuarioController.EditarUsuarioVista);

usuariorouters.put("/actualizar/usuario:id",UsuarioController.EditarUsuario);

  export default usuariorouters;
import express from "express";

const usuariorouters = express.Router();

//Ver empleados
usuariorouters.get("/ver", (req, res ) => {
    res.send("Ver usuarios");
});

//Agregar Usuarios
usuariorouters.get("/Agregar", (req, res ) => {
    res.send("Agregar usuario");
});

//Agregar Usuarios
usuariorouters.post("/Agregar", (req, res ) => {
    res.send("Agregar");
});

//Eliminar usuario

usuariorouters.get("/eliminar/usuario:id", (req, res)=> {
    res.send("Eliminar usuario")
});

usuariorouters.delete("/eliminar/usuario:id", (req, res)=> {
    res.send("Eliminar usuario")
});

//Actualizar usuario

usuariorouters.get("/actualizar/usuario:id", (req, res)=> {
    res.send("Actualizar usuario")
});

usuariorouters.put("/eliminar/usuario:id", (req, res) => {
    res.send("Actualizar usuario");
  });

  export default usuariorouters;
import express from "express";

const rolrouters = express.Router();

//Ver roles

rolrouters.get("/Ver",(req, res) => {
res.send("Ver Roles")
});

//Agregar rol
rolrouters.get("/Agregar", (req, res) =>{
    res.send("Agregar Roles")
});

rolrouters.post("/Agregar", (req, res) =>{
    res.send("Agregar")
});

//Eliminar rol

rolrouters.get("/eliminar/rol:id", (req, res) =>{
    res.send("Eliminar rol")
});

rolrouters.delete("/eliminar/rol:id", (req, res) =>{
    res.send("Eliminar rol")
});

//Actualizar rol
rolrouters.get("/actualizar/rol:id", (req, res) =>{
    res.send("Actualizar rol")
});

rolrouters.get("/actualizar/rol:id", (req, res) =>{
    res.put("Actualizar rol")
});

export default rolrouters;
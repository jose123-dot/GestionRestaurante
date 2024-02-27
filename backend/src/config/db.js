import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/restaurantedb")
  .then((db) => console.log("Base de Datos Conectada"))
  .catch((err) => console.log("Error en la Conexion"));

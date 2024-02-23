import express from "express";
import express from "../Controller";
const indexrouters = express.Router();

//ver de datalles del cliente
indexrouters.get("/", (req, res) => {
  res.send("Bienvenidos");
});

export default indexrouters;

import express from "express";
const indexrouters = express.Router();

//ver de datalles del cliente
indexrouters.get("/", (req, res) => {
  res.send("Bienvenidos");
});

export default indexrouters;

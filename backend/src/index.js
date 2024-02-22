import express from "express";
const app = express();

import indexrouters from "./router/indexrouter.js";
import clienterouters from "./router/clienterouter.js";
//iniciar puerto principal

//routes
app.use("/", indexrouters);
app.use("/api/cliente/", clienterouters);

// toca hacer los router de los demas
app.listen(4000, () => console.log("Servidor ejecutado"));

import express from "express";
const app = express();

import indexrouters from "./router/indexrouter.js";
import clienterouters from "./router/clienterouter.js";
import empleadorouters from "./router/empleado-router.js";
import ordenrouters from "./router/ordenrouter.js";
import detalleordenrouters from "./router/detalleordenrouter.js";
import usuariorouters from "./router/usuariorouter.js";
import rolrouters from "./router/rolrouter.js";
//iniciar puerto principal

//routes
app.use("/", indexrouters);
app.use("/api/cliente/", clienterouters);
app.use("/api/empleado/", empleadorouters);
app.use("/api/orden/", ordenrouters);
app.use("/api/detalleorden/", detalleordenrouters);

// toca hacer los router de los demas
app.listen(4000, () => console.log("Servidor ejecutado"));

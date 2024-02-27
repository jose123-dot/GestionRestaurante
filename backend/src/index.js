import "./config/db.js";
import express, { json } from "express";
import morgan from "morgan";

const app = express();

//importar los routes
import clienterouters from "./router/clienterouter.js";
//import empleadorouters from "./router/empleado-router.js";
import ordenrouters from "./router/ordenrouter.js";
import platorouters from "./router/platorouter.js";
import mesarouter from "./router/mesarouter.js";

//middleware
app.use(json());
app.use(morgan("dev"));

//routes
//app.use("/", indexrouters);
app.use("/api/cliente/", clienterouters);
//app.use("/api/empleado/", empleadorouters);
app.use("/api/orden/", ordenrouters);
app.use("/api/plato/", platorouters);
app.use("/api/mesa/", mesarouter);

// toca hacer los router de los demas
app.listen(4000, () => console.log("Servidor ejecutado"));

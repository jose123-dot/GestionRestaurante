const express = require("express");
const app = express();

//iniciar puerto principal

app.use(require("./router/cliente-router"));

// toca hacer los router de los demas
TODO: app.listen(4000, () => console.log("Servidor ejecutado"));

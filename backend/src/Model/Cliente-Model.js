import { model, Schema } from "mongoose";

const ClienteSchema = new Schema({
  numeroCliente: {
    type: Number,
    unique: true,
    require: true,
  },
  nombre: {
    type: String,
    require: true,
    max: 50,
  },
  apellido: {
    type: String,
    require: true,
    max: 50,
  },
  sexo: {
    type: String,
    require: true,
    max: 10,
  },
  documento: {
    type: String,
    require: true,
    unique: true,
    max: 50,
  },
  telefono: {
    type: String,
    max: 11,
  },
});

export default model("cliente", ClienteSchema);

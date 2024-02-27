import { model, Schema } from "mongoose";

const platoSchema = new Schema({
  nombre: {
    type: String,
    require: true,
    max: 50,
  },
  items: {
    type: String,
    require: true,
    max: 250,
  },
  precio: {
    type: Decimal128,
    require: true,
  },
  estado: {
    type: String,
    require: true,
    max: 13,
  },
});

export default model("plato", platoSchema);
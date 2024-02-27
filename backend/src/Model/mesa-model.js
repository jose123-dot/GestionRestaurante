import mongoose, { model, Schema } from "mongoose";

const mesaSchema = new Schema({
  ubicacion: {
    type: String,
    require: true,
    max: 40,
  },
  idempleado: {
    type: Schema.ObjectId,
    ref: "empleado",
  },
  precio: {
    type: Decimal128,
    require: true,
  },
});

export default model("mesa", mesaSchema);
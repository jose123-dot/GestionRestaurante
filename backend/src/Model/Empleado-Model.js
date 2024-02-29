import {model, schema } from "mongoose";

const empleadoschema = new schema ({
clienteid:{
    type: Number,
    unique : true,
    required : true,
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
  documento: {
    type: String,
    require: true,
    unique: true,
    max: 50,
  },
  direccion : {
    type : String,
    require : true,
    max : 50,
  },
  telefono: {
    type: String,
    max: 11,
  },
  rol : {
    type : String,
    require : true, 
    max : 10,

  }, 
  estatus: {
    type : String,
    require : true,
    max: 13
  },
});

export default model ("empleado", empleadoschema);
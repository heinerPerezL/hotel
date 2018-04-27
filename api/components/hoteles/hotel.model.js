//Requerimos mongoose
const mongoose = require ('mongoose');

//Esquema de Hotels
var HotelSchema = new mongoose.Schema ({
  foto: {type: String},
  nombre: {type: String, required: true, unique :true},
  latitud: {type: String, required: true},
  longitud: {type: String, required: true},
  provincia: {type: String, required: true},
  canton: {type: String, required: true},
  distrito: {type: String, required: true},
  direccionExacta : {type: String, required: true},
  telefono: {type: String, required: true},
  telefonoServicio: {type: String, required: true},
  email: {type: String, required: true},
  emailServicio: {type: String, required: true},
  estado: {type: String},
  
  

});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model ('Hotel', HotelSchema);
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural

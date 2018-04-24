//Requerimos mongoose
const mongoose = require ('mongoose');

//Esquema de usuarios
var UsuarioSchema = new mongoose.Schema ({
  cedula: {type: String, required: true , unique :true},
  primerNombre: {type: String, required: true},
  segundoNombre: {type: String, required: true},
  primerApellido: {type: String, required: true},
  segundoApellido: {type: String, required: true},
  fechaNacimiento: {type: String, required: true},
  email: {type: String, required: true},
  tipo : {type: String, required: true},
  telefono: {type: String, required: true},
  password: {type: String, required: true}

});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model ('Usuario', UsuarioSchema);
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural

const UsuarioModel = require ('./usuario.model');

module.exports.registrar = (req, res) => {
 // var newUsuario = Object.assign (new Usuario (), req.body);
  var newUsuario = new UsuarioModel({
      cedula: req.body.cedula,
      primerNombre: req.body.primerNombre,
      segundoNombre: req.body.segundoNombre,
      primerApellido: req.body.primerApellido,
      segundoApellido: req.body.segundoApellido,
      fechaNacimiento: req.body.fechaNacimiento,
      email: req.body.email,
      tipo : req.body.tipo,
      telefono: req.body.telefono,
      password: req.body.password
  });
  


  newUsuario.save ((err) => {
    if (err) {
      res.json ({
        success: false,
        msj: 'Ha ocurrido un error en el registro de usuarios' + err,
      });
    } else {
      res.json ({success: true, msj: 'Se registró el articulo correctamente'});
    }
  });
};

module.exports.listarTodos = (req, res) => {
  UsuarioModel.find ().then ((usuarios) => {
    res.send (usuarios);
  });
};

module.exports.buscar_usuario_por_id = function(req, res){
  UserModel.findById({_id : req.body.id}).then(
      function(usuario){
          res.send(usuario);
      });
};

module.exports.actualizar = (req, res) => {
  UsuarioModel.update ({email: req.body.email}, req.body, (err, user) => {
    if (err) {
      res.json ({
        success: false,
        msg: 'No se ha actualizado.' + handleError (err),
      });
    } else {
      res.json ({success: true, msg: 'Se ha actualizado correctamente.' + res});
    }
  });
};

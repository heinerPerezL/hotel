const HotelModel = require ('./hotel.model');

module.exports.registrar = (req, res) => {
 // var newHotel = Object.assign (new hotel (), req.body);
  var newHotel = new HotelModel({
      foto: req.body.foto,
      nombre: req.body.nombre,
      latitud: req.body.latitud,
      longitud: req.body.longitud,
      provincia: req.body.provincia,
      canton: req.body.canton,
      distrito: req.body.distrito,
      direccionExacta : req.body.direccionExacta,
      telefono: req.body.telefono,
      telefonoServicio: req.body.telefonoServicio,
      email: req.body.email,
      emailServicio: req.body.emailServicio,
      estado:req.body.estado
      
      
  });
  


  newHotel.save ((err) => {
    if (err) {
      res.json ({
        success: false,
        msj: 'Ha ocurrido un error en el registro de hoteles' + err,
      });
    } else {
      res.json ({success: true, msj: 'Se registró el articulo correctamente'});
    }
  });
};

module.exports.listarTodos = (req, res) => {
  HotelModel.find ().then ((hoteles) => {
    res.send (hoteles);
  });
};

module.exports.buscar_hotel_por_id = function(req, res){
  HotelModel.findById({_id : req.body.id}).then(
      function(hotel){
          res.send(hotel);
      });
};

module.exports.actualizar = (req, res) => {
  HotelModel.update ({email: req.body.email}, req.body, (err, user) => {
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

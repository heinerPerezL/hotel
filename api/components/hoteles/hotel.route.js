const express = require ('express'),
  router = express.Router (),
  hoteles = require ('./hotel.api');

router.param ('id', (req, res, next, id) => {
  req.body.id = id;
  next ();
});

router.route('/buscar_hotel_id')
  .post(function (req, res) {
    users.buscar_hotel_por_id(req, res);
  });
  
router.route ('/save_hotel').post ((req, res) => {
  hoteles.registrar (req, res);
});

router.route ('/get_all_hoteles').get ((req, res) => {
  hoteles.listarTodos (req, res);
});

router.route ('/update_hoteles').put ((req, res) => {
  hoteles.actualizar (req, res);
});

module.exports = router;

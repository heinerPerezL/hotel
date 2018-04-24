const express = require ('express'),
  router = express.Router (),
  usuarios = require ('./usuario.api');

router.param ('id', (req, res, next, id) => {
  req.body.id = id;
  next ();
});

router.route('/buscar_user_id')
  .post(function (req, res) {
    users.buscar_usuario_por_id(req, res);
  });
  
router.route ('/save_usuario').post ((req, res) => {
  usuarios.registrar (req, res);
});

router.route ('/get_all_usuarios').get ((req, res) => {
  usuarios.listarTodos (req, res);
});

router.route ('/update_usuarios').put ((req, res) => {
  usuarios.actualizar (req, res);
});

module.exports = router;

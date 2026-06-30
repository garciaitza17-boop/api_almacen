var express = require('express');
var router = express.Router();
var despachosController = require('../controllers/despachosController');

/* GET Lista el historial de todos los despachos realizados en el almacén */
router.get('/', despachosController.listar);

/* GET Obtiene el detalle de los productos y cantidades que salieron en un despacho específico */
router.get('/:id', despachosController.obtenerPorId);

/* POST Registra una salida/despacho de mercancía del almacén (Cabecera + Detalle) */
router.post('/', despachosController.crear);

module.exports = router;

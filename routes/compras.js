var express = require('express');
var router = express.Router();
var comprasController = require('../controllers/comprasController');

/* GET Lista el historial de todas las compras (entradas) del almacén */
router.get('/', comprasController.listar);

/* GET Obtiene el detalle completo de los productos que entraron en una compra específica */
router.get('/:id', comprasController.obtenerPorId);

/* POST Registra una nueva entrada de productos al almacén (Cabecera + Detalle) */
router.post('/', comprasController.crear);

module.exports = router;

var express = require('express');
var router = express.Router();
var detallesControllers = require('../controllers/detallesControllers');

/* --- DETALLES DE COMPRAS --- */
/* GET Obtener los productos de una compra específica */
router.get('/compra/:id_compra', detallesControllers.getDetallesCompra);

/* --- DETALLES DE DESPACHOS --- */
/* GET Obtener los productos de un despacho específico */
router.get('/despacho/:id_despacho', detallesControllers.getDetallesDespacho);

module.exports = router;

var express = require('express');
var router = express.Router();
var detallesComprasControllers = require('../controllers/detallesComprasControllers');

/* GET Obtener todos los productos y precios vinculados a una compra específica */
router.get('/compra/:id_compra', detallesComprasControllers.byCompra);

/* GET Obtener un renglón de detalle específico por su ID único */
router.get('/:id', detallesComprasControllers.one);

/* POST Agregar un producto individual a una compra existente (Ajuste manual) */
router.post('/', detallesComprasControllers.create);

/* PUT Modificar la cantidad o precio de compra de un artículo ya registrado */
router.put('/:id', detallesComprasControllers.update);

/* DELETE Eliminar un artículo del detalle de la compra */
router.delete('/:id', detallesComprasControllers.delete);

module.exports = router;

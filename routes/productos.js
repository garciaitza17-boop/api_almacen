var express = require('express');
var router = express.Router();
var productosController = require('../controllers/productosController');

/* GET Lista todos los productos activos con su stock actual, marca, categoría y ubicación */
router.get('/', productosController.listar);

/* GET Obtiene el detalle de un solo producto por su ID */
router.get('/:id', productosController.obtenerPorId);

/* POST Registra un nuevo producto en el catálogo del almacén */
router.post('/', productosController.crear);

/* PUT Actualiza los datos de un producto (precios, stock mínimo, descripción, cambiar de estante) */
router.put('/:id', productosController.actualizar);

/* DELETE Baja lógica del producto: cambia su estatus a 0 para no borrarlo del historial de despachos */
router.delete('/:id', productosController.deshabilitar);

/** GET Alertas de stock mínimo (Útil para saber qué productos se están agotando) */
router.get('/alertas/stock-minimo', productosController.verificarStockMinimo);

module.exports = router;

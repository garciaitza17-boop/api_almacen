var express = require('express');
var router = express.Router();
var auxiliaresController = require('../controllers/auxiliaresController');

// --- RUTAS PARA EL FORMULARIO DE PRODUCTOS ---
/* GET Listar marcas activas */
router.get('/marcas', auxiliaresController.listarMarcas);

/* GET Listar categorías activas */
router.get('/categorias', auxiliaresController.listarCategorias);

/* GET Listar ubicaciones (estantes/pasillos) disponibles */
router.get('/ubicaciones', auxiliaresController.listarUbicaciones);

// --- RUTA PARA EL FORMULARIO DE COMPRAS ---
/* GET Listar proveedores activos */
router.get('/proveedores', auxiliaresController.listarProveedores);

module.exports = router;

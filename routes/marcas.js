var express = require('express');
var router = express.Router();
var marcasControllers = require('../controllers/marcasControllers');

/* GET Ruta para obtener todas las marcas activas */
router.get('/', marcasControllers.all);

/* POST Ruta para registrar una nueva marca */
router.post('/', marcasControllers.create);

/* PUT Ruta para actualizar una marca por su ID (ej: cambiar el nombre) */
router.put('/:id', marcasControllers.update);

/* DELETE Ruta para deshabilitar una marca (Baja lógica, cambia estatus a 0) */
router.delete('/:id', marcasControllers.delete);

module.exports = router;

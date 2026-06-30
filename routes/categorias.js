var express = require('express');
var router = express.Router();
var categoriasControllers = require('../controllers/categoriasControllers');

/* GET Obtener todas las categorías activas */
router.get('/', categoriasControllers.all);

/* POST Registrar una nueva categoría */
router.post('/', categoriasControllers.create);

/* PUT Actualiza una categoría por su ID */
router.put('/:id', categoriasControllers.update);

/* DELETE Baja lógica de la categoría */
router.delete('/:id', categoriasControllers.delete);

module.exports = router;

var express = require('express');
var router = express.Router();
var ubicacionesControllers = require('../controllers/ubicacionesControllers');

/* GET Obtener todas las ubicaciones físicas del almacén */
router.get('/', ubicacionesControllers.all);

/* POST Registrar un nuevo espacio o estante (Código único) */
router.post('/', ubicacionesControllers.create);

/* PUT Modificar los datos o zona de una ubicación */
router.put('/:id', ubicacionesControllers.update);

/* DELETE Deshabilitar un estante/posición por mantenimiento */
router.delete('/:id', ubicacionesControllers.delete);

module.exports = router;

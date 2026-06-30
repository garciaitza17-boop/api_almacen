var express = require('express');
var router = express.Router();
var proveedoresControllers = require('../controllers/proveedoresControllers');

/* GET Obtener todos los proveedores activos */
router.get('/', proveedoresControllers.all);

/* POST Registrar un nuevo proveedor */
router.post('/', proveedoresControllers.create);

/* PUT Actualizar los datos de un proveedor por su ID */
router.put('/:id', proveedoresControllers.update);

/* DELETE Baja lógica de un proveedor (estatus = 0) */
router.delete('/:id', proveedoresControllers.delete);

module.exports = router;

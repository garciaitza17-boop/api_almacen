var express = require('express');
var router = express.Router();
// Apunta al controlador de roles que maneja tu lógica
var rolsControllers = require('../controllers/rolsControllers');

/* GET Ruta para obtener todos los roles del almacén (Administrador, Almacenero, etc.) */
router.get('/', rolsControllers.all);

/* POST Ruta para registrar un nuevo rol en el sistema */
router.post('/', rolsControllers.create);

/* PUT Ruta para actualizar el nombre o estatus de un rol por su ID */
router.put('/:id', rolsControllers.update);

/* DELETE Ruta para deshabilitar o eliminar un rol por su ID */
router.delete('/:id', rolsControllers.delete);

/* POST Ruta para registrar y asignar los permisos logísticos correspondientes a un rol */
router.post('/assignPermissions', rolsControllers.assignPermissions);

module.exports = router;

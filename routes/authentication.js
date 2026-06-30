var express = require('express');
var router = express.Router();
var usuariosController = require('../controllers/usuariosController'); 
/* POST Ruta para el login de los usuarios del almacén (Verifica cédula/correo y clave) */
router.post('/login', usuariosController.login);

/* POST Ruta para registrar un nuevo trabajador en el almacén (Asigna id_rol y estatus) */
router.post('/register', usuariosController.register);

/* PUT Ruta para actualizar la clave del usuario (Cambio de contraseña) */
router.put('/passwordReset/:id', usuariosController.resetPassword);

/** GET Ruta para verificar si una cédula ya existe (Para evitar duplicados al registrar) */
router.get('/checkCedula/:cedula', usuariosController.checkCedula);

/** GET Ruta para verificar si un correo ya está registrado */
router.get('/checkEmail/:correo', usuariosController.checkEmail);

/** GET Lista todo el personal del almacén (Útil para paneles de administración) */
router.get('/list', usuariosController.listUsers);

/** PUT Cambiar estatus de un usuario (Activo/Inactivo) o cambiar su Rol */
router.put('/updateUser/:id', usuariosController.updateUser);

// Ruta de prueba para verificar conectividad
router.post('/test', usuariosController.test);

module.exports = router;

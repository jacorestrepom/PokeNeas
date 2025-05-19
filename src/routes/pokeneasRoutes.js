const express = require('express');
const router = express.Router();
const { getInfoPokenea, mostrarPokenea } = require('../controllers/pokeneasController');

// Ruta para obtener información básica de un Pokenea aleatorio en formato JSON
router.get('/api/pokenea', getInfoPokenea);

// Ruta para mostrar la página con imagen y frase filosófica
router.get('/pokenea', mostrarPokenea);

module.exports = router; 
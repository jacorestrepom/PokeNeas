const { getInfoBasica, getInfoVisual } = require('../models/pokenea');
const os = require('os');

/**
 * Obtiene información básica de un Pokenea aleatorio en formato JSON
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
const getInfoPokenea = (req, res) => {
  try {
    const infoPokenea = getInfoBasica();
    // Añadir ID del contenedor
    const respuesta = {
      ...infoPokenea,
      contenedorId: os.hostname()
    };
    
    res.json(respuesta);
  } catch (error) {
    console.error('Error al obtener información del Pokenea:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

/**
 * Muestra la página con la imagen y frase filosófica de un Pokenea aleatorio
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
const mostrarPokenea = (req, res) => {
  try {
    const pokenea = getInfoVisual();
    // Añadir ID del contenedor
    pokenea.contenedorId = os.hostname();
    
    res.render('pokenea', { pokenea });
  } catch (error) {
    console.error('Error al mostrar el Pokenea:', error);
    res.status(500).render('error', { mensaje: 'Error interno del servidor' });
  }
};

module.exports = {
  getInfoPokenea,
  mostrarPokenea
}; 
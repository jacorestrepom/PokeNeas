const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

// Crear aplicación Express
const app = express();

// Configurar motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Importar rutas
const pokeneasRoutes = require('./routes/pokeneasRoutes');

// Usar rutas
app.use('/', pokeneasRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.render('index');
});

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).render('404');
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { mensaje: 'Error interno del servidor' });
});

// Definir puerto
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});

module.exports = app; 
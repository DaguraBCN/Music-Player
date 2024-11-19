// Importar módulos necesarios
const path = require('node:path');
const express = require('express');
const app = express();
const morgan = require('morgan');

// Cargar variables de entorno
process.loadEnvFile();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(morgan('dev'));

// Indicar la carpeta publica para recursos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Ruta de inicio
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
//   console.log(res.sendFile);
});

// Cargar ruta pagina 404 de error
app.use((req, res) =>  res.status(404).sendFile(path.join(__dirname, '../public/404.html')));

// Iniciar el servidor
app.listen(PORT, () => { console.log(`Servidor escuchando en http://localhost:${PORT}`)});
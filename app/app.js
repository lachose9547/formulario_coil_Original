import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import conexion from './conexion.js';
// import cors from 'cors';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*
app.use(cors({
  origin: 'http://localhost:XXXX'
}));
*/

//data base adding

app.get('/form', (req, res) => {
  console.log("Petición recibida para /form");
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/api/usuarios', (req, res) => {
  const sql = 'SELECT cedula, nombre, apellido FROM persona_coil';

  conexion.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener usuarios de la base de datos:', err);
      return res.status(500).json({
        success: false,
        message: 'Error interno del servidor al obtener usuarios.',
        error: err.message
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: true,
        message: 'No se encontraron usuarios en la base de datos.',
        usuarios: []
      });
    }

    res.status(200).json({
      success: true,
      message: 'Usuarios obtenidos correctamente.',
      usuarios: results
    });
  });
});

app.post('/login', (req, res) => {
  const { usuario, contrasena } = req.body;

  if (!usuario || !contrasena) {
    return res.status(400).json({
      success: false,
      message: 'Usuario y contraseña son requeridos.'
    });
  }

const sql = 'SELECT cedula, nombre, apellido FROM persona_coil WHERE cedula = ? AND contrasena = ?';

  conexion.query(sql, [usuario, contrasena], (err, result) => {
    if (err) {
      console.error('Error al ejecutar la consulta de login:', err);
      return res.status(500).json({
        success: false,
        message: 'Error interno del servidor al consultar credenciales.',
        error: err.message
      });
    }

    if (result.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'Usuario o contraseña incorrectos.'
      });
    }

    res.status(200).json({
      success: true,
      message: '¡Inicio de sesión exitoso!',
      user: result[0]
    });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor de Express escuchando en http://localhost:${PORT}`);
  console.log(`Accede al formulario en: http://localhost:${PORT}/form`);
  console.log(`Endpoint de usuarios: http://localhost:${PORT}/api/usuarios`);
  console.log(`Endpoint de login (POST): http://localhost:${PORT}/login`);
});
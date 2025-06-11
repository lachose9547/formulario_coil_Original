/*import express from 'express';
import mysql from 'mysql';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('conexion.js');
});

app.post('/conexion', (req, res) => {

  // Configura la conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'coil_base'
});

// Conectar a la base de datos
db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos mysql');
});

  const { usuario} = req.body;
   const { contrasena} = req.body;

  const sql = 'Select * from persona_coil WHERE cedula = ?';
  
  db.query(sql, [
      usuario
      ], (err, result) => {
    if (err) {
      console.error('Error al insertar:', err);
      return res.status(500).send('Error al guardar los datos');
    }

    console.log('Datos insertados:', result.insertId);
    res.status(200).json({
      mensaje: 'Registro guardado correctamente',
      datos: {
        usuario,contrasena
      }
    });
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');3306
});**/

import express from 'express';
import conexion from './conexion.js'; // importa la conexión ya establecida

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

app.post('/conexion', (req, res) => {
  const { usuario, contrasena } = req.body;

  const sql = 'SELECT * FROM persona_coil WHERE cedula = ? AND contrasena = ?';

  conexion.query(sql, [usuario, contrasena], (err, result) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      return res.status(500).send('Error al consultar los datos');
    }

    if (result.length === 0) {
      return res.status(404).json({ mensaje: 'Usuario o contraseña incorrectos' });
    }

    res.status(200).json({
      mensaje: 'Usuario encontrado',
      datos: result[0]
    });
  });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

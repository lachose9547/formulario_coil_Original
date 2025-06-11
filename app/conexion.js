//const mysql = require('mysql'); 
/*import mysql from 'mysql';
const conexion = mysql.createConnection({ 
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'coil_base' 
});
conexion.connect(function(error) {
  if (error) {
    console.error('Error conectando a la base de datos:', error); 
    return; 
  }

  console.log('¡Conexión exitosa!');

  const persona_coil = 'Select * from persona_coil WHERE usuario = ? and contrasena = ?';

  conexion.query(persona_coil, function(error, results) {  
    if (error) {
      console.error('Error ejecutando la consulta:', error);
    } else {
      console.log('Resultados de la consulta:', results);
    }
    conexion.end(); 
  });
});**/
import mysql from 'mysql';

const conexion = mysql.createConnection({ 
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'coil_base'
});

conexion.connect(function(error) {
  if (error) {
    console.error('Error conectando a la base de datos:', error); 
  } else {
    console.log('¡Conexión exitosa a MySQL!');
  }
});

export default conexion;
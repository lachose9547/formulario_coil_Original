import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const conexion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,             
  password: process.env.DB_PASSWORD,        
  database: process.env.DB_NAME          
});
conexion.connect(function(error) {
  if (error) {
    console.error('Error conectando a la base de datos:', error);
    console.error(error);
  } else {
    console.log('¡Conexión exitosa a MySQL en la web!');
  }
});

export default conexion;
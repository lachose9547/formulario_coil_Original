import mysql from 'mysql';

const conexion = mysql.createConnection({
  host: 'sql5.freesqldatabase.com',
  user: 'sql5784220',             
  password: 'ELCnqrtKNf',        
  database: 'sql5784220'          
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
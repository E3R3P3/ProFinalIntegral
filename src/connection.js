const config = {
    host: 'localhost', // Cambia a la dirección de tu servidor MySQL
    user: 'root',
    password: '12345678',
    database: 'db_PrjItegral',
    port: 3306, // Puerto predeterminado de MySQL
    connectionLimit: 10 // Límite de conexiones en el pool
};

module.exports = config;

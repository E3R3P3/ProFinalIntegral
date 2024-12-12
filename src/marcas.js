const mysql = require('mysql2/promise');
const config = require('./connection');

async function getMarcaData(int) {
    let pool;
    try {
        // Crear el pool de conexiones
        pool = await mysql.createPool(config);

        // Realizar la consulta con parámetros para evitar inyección SQL
        const [rows] = await pool.query('SELECT * FROM Carros WHERE MarcaID = ?', [int]);

        return rows; // Retorna las filas obtenidas
    } catch (err) {
        console.error('SQL error', err);
        throw err;
    } finally {
        // Cerrar el pool para liberar recursos
        if (pool) await pool.end();
    }
}

module.exports = { getMarcaData };

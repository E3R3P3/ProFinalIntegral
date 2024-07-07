const sql = require('mssql');
const config = require('./connection');

async function getMarcaData(int) {
    try {
        // Conectar a la base de datos
        let pool = await sql.connect(config);

        // Realizar la consulta
        let result = await pool.request().query(`SELECT * FROM Carros WHERE MarcaID = `+int+``);

        return result.recordset;
    } catch (err) {
        console.error('SQL error', err);
        throw err;
    } finally {
        // Cerrar la conexión de la base de datos
        sql.close();
    }
}

module.exports = { getMarcaData };
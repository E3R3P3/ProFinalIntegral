// dbconnection.js
const sql = require('mssql');
const config = require('./connection');

async function connectToDatabase() {
    try {
        let pool = await sql.connect(config);
        console.log("Conexión exitosa a SQL Server");
        return pool;
    } catch (err) {
        console.error("Error al conectar a SQL Server:", err);
    }
}

module.exports = {
    connectToDatabase
};

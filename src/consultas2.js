const express = require('express');
const app1 = express();
const { getMarcaData } = require('./marcas');
const { sql,connectToDatabase } = require('./dbconnection');

const port = 2233;

app1.get('/carros', async (req, res) => {
    const { marcaId, ano, generacion, tipo_motor, consumo_ciudad, consumo_carretera, consumo_mixto, promedio_kmL_ciudad, promedio_kmL_carretera, promedio_kmL_mixto } = req.query;

    try {
        await connectToDatabase();
        
        let query = 'SELECT * FROM Carros WHERE 1=1';
        const request = new sql.Request();

        if (marcaId) {
            query += ' AND MarcaID = @marcaId';
            request.input('marcaId', sql.Int, parseInt(marcaId));
        }
        if (ano) {
            query += ' AND Año = @ano';
            request.input('ano', sql.Int, parseInt(ano));
        }
        if (generacion) {
            query += ' AND Generacion = @generacion';
            request.input('generacion', sql.VarChar, generacion);
        }
        if (tipo_motor) {
            query += ' AND Tipo_Motor = @tipo_motor';
            request.input('tipo_motor', sql.VarChar, tipo_motor);
        }
        if (consumo_ciudad) {
            query += ' AND Consumo_Ciudad_L100km = @consumo_ciudad';
            request.input('consumo_ciudad', sql.Float, parseFloat(consumo_ciudad));
        }
        if (consumo_carretera) {
            query += ' AND Consumo_Carretera_L100km = @consumo_carretera';
            request.input('consumo_carretera', sql.Float, parseFloat(consumo_carretera));
        }
        if (consumo_mixto) {
            query += ' AND Consumo_Mixto_L100km = @consumo_mixto';
            request.input('consumo_mixto', sql.Float, parseFloat(consumo_mixto));
        }
        if (promedio_kmL_ciudad) {
            query += ' AND Promedio_kmL_Ciudad = @promedio_kmL_ciudad';
            request.input('promedio_kmL_ciudad', sql.Float, parseFloat(promedio_kmL_ciudad));
        }
        if (promedio_kmL_carretera) {
            query += ' AND Promedio_kmL_Carretera = @promedio_kmL_carretera';
            request.input('promedio_kmL_carretera', sql.Float, parseFloat(promedio_kmL_carretera));
        }
        if (promedio_kmL_mixto) {
            query += ' AND Promedio_kmL_Mixto = @promedio_kmL_mixto';
            request.input('promedio_kmL_mixto', sql.Float, parseFloat(promedio_kmL_mixto));
        }

        const result = await request.query(query);

        res.json(result.recordset);
    } catch (err) {
        console.error('Error al realizar la consulta:', err);
        res.status(500).send('Error al realizar la consulta.');
    } finally {
        await sql.close();
    }
});



app1.listen(port, () => {
    console.log(`Servidor de consultas escuchando en http://localhost:${port}`);
});
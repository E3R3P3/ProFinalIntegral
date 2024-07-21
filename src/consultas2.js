const express = require('express');
const app1 = express();
const { getMarcaData } = require('./marcas');
const { sql,connectToDatabase } = require('./dbconnection');
const cors = require('cors');

const port = 2233;
app1.use(cors());

app1.get('/carros', async (req, res) => {
    const conditions = []; // Array para almacenar las condiciones SQL
    const params = {}; // Objeto para almacenar los parámetros y sus valores

    // Recorremos los parámetros de consulta
    Object.keys(req.query).forEach(key => {
        const value = req.query[key];

        // Definimos la condición y añadimos el parámetro correspondiente
        switch (key) {
            case 'marcaId':
                conditions.push('MarcaID = @marcaId');
                params.marcaId = { type: sql.Int, value: parseInt(value) };
                break;
            case 'ano':
                conditions.push('Año = @ano');
                params.ano = { type: sql.Int, value: parseInt(value) };
                break;
            case 'generacion':
                conditions.push('Generacion = @generacion');
                params.generacion = { type: sql.VarChar, value };
                break;
            case 'tipo_motor':
                conditions.push('Tipo_Motor = @tipo_motor');
                params.tipo_motor = { type: sql.VarChar, value };
                break;
            case 'consumo_ciudad':
                conditions.push('Consumo_Ciudad_L100km = @consumo_ciudad');
                params.consumo_ciudad = { type: sql.Float, value: parseFloat(value) };
                break;
            case 'consumo_carretera':
                conditions.push('Consumo_Carretera_L100km = @consumo_carretera');
                params.consumo_carretera = { type: sql.Float, value: parseFloat(value) };
                break;
            case 'consumo_mixto':
                conditions.push('Consumo_Mixto_L100km = @consumo_mixto');
                params.consumo_mixto = { type: sql.Float, value: parseFloat(value) };
                break;
            case 'promedio_kmL_ciudad':
                conditions.push('Promedio_kmL_Ciudad = @promedio_kmL_ciudad');
                params.promedio_kmL_ciudad = { type: sql.Float, value: parseFloat(value) };
                break;
            case 'promedio_kmL_carretera':
                conditions.push('Promedio_kmL_Carretera = @promedio_kmL_carretera');
                params.promedio_kmL_carretera = { type: sql.Float, value: parseFloat(value) };
                break;
            case 'promedio_kmL_mixto':
                conditions.push('Promedio_kmL_Mixto = @promedio_kmL_mixto');
                params.promedio_kmL_mixto = { type: sql.Float, value: parseFloat(value) };
                break;
            case 'modelo':
                conditions.push('Modelo = @modelo');
                params.modelo = { type: sql.VarChar, value };
                break;
            // Añadir más casos según los campos de tu tabla Carros
        }
    });

    try {
        await connectToDatabase();
        
        let query = 'SELECT * FROM Carros';
        
        if (conditions.length > 0) {
            query += ' WHERE ' + conditions.join(' AND ');
        }

        const request = new sql.Request();

        // Añadimos los parámetros a la consulta
        Object.keys(params).forEach(key => {
            const { type, value } = params[key];
            request.input(key, type, value);
        });

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
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
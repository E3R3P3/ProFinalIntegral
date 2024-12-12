const express = require('express');
const app1 = express();
const { connectToDatabase } = require('./dbconnection'); // Asegúrate de que este use mysql2/promise
const cors = require('cors');

const port = 2233;
app1.use(cors());

app1.get('/carros', async (req, res) => {
    const conditions = []; // Array para almacenar las condiciones SQL
    const params = []; // Array para almacenar los valores de los parámetros

    // Recorremos los parámetros de consulta
    Object.keys(req.query).forEach((key) => {
        const value = req.query[key];

        // Definimos la condición y añadimos el valor correspondiente
        switch (key) {
            case 'marcaId':
                conditions.push('MarcaID = ?');
                params.push(parseInt(value));
                break;
            case 'ano':
                conditions.push('Año = ?');
                params.push(parseInt(value));
                break;
            case 'generacion':
                conditions.push('Generacion = ?');
                params.push(value);
                break;
            case 'tipo_motor':
                conditions.push('Tipo_Motor = ?');
                params.push(value);
                break;
            case 'consumo_ciudad':
                conditions.push('Consumo_Ciudad_L100km = ?');
                params.push(parseFloat(value));
                break;
            case 'consumo_carretera':
                conditions.push('Consumo_Carretera_L100km = ?');
                params.push(parseFloat(value));
                break;
            case 'consumo_mixto':
                conditions.push('Consumo_Mixto_L100km = ?');
                params.push(parseFloat(value));
                break;
            case 'promedio_kmL_ciudad':
                conditions.push('Promedio_kmL_Ciudad = ?');
                params.push(parseFloat(value));
                break;
            case 'promedio_kmL_carretera':
                conditions.push('Promedio_kmL_Carretera = ?');
                params.push(parseFloat(value));
                break;
            case 'promedio_kmL_mixto':
                conditions.push('Promedio_kmL_Mixto = ?');
                params.push(parseFloat(value));
                break;
            case 'modelo':
                conditions.push('Modelo = ?');
                params.push(value);
                break;
            // Añadir más casos según los campos de tu tabla Carros
        }
    });

    try {
        // Conectar al pool de la base de datos
        const pool = await connectToDatabase();

        // Construir la consulta dinámica
        let query = 'SELECT * FROM Carros';

        if (conditions.length > 0) {
            query += ' WHERE ' + conditions.join(' AND ');
        }

        query += ' ORDER BY Año ASC';

        // Ejecutar la consulta con parámetros
        const [rows] = await pool.query(query, params);

        // Enviar la respuesta como JSON
        res.json(rows);
    } catch (err) {
        console.error('Error al realizar la consulta:', err);
        res.status(500).send('Error al realizar la consulta.');
    }
});

// Servidor en escucha
app1.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

const express = require('express');
const app2 = express();
const { getMarcaData } = require('./marcas');
const { sql, connectToDatabase } = require('./dbconnection');
const cors = require('cors');

const port = 2003;
app2.use(cors());
app2.use(express.json());


app2.post('/carros', async (req, res) => {
    const {
        MarcaID,
        Año,
        Generacion,
        Tipo_Motor,
        Consumo_Ciudad_L100km,
        Consumo_Carretera_L100km,
        Consumo_Mixto_L100km,
        Promedio_kmL_Ciudad,
        Promedio_kmL_Carretera,
        Promedio_kmL_Mixto,
        Modelo
    } = req.body;

    try {
        await connectToDatabase();

        const query = `
            INSERT INTO Carros (MarcaID, Año, Generacion, Tipo_Motor, Consumo_Ciudad_L100km, Consumo_Carretera_L100km, Consumo_Mixto_L100km, Promedio_kmL_Ciudad, Promedio_kmL_Carretera, Promedio_kmL_Mixto, Modelo)
            VALUES (@MarcaID, @Año, @Generacion, @Tipo_Motor, @Consumo_Ciudad_L100km, @Consumo_Carretera_L100km, @Consumo_Mixto_L100km, @Promedio_kmL_Ciudad, @Promedio_kmL_Carretera, @Promedio_kmL_Mixto, @Modelo)
        `;

        const request = new sql.Request();
        request.input('MarcaID', sql.Int, MarcaID);
        request.input('Año', sql.Int, Año);
        request.input('Generacion', sql.VarChar, Generacion);
        request.input('Tipo_Motor', sql.VarChar, Tipo_Motor);
        request.input('Consumo_Ciudad_L100km', sql.Float, Consumo_Ciudad_L100km);
        request.input('Consumo_Carretera_L100km', sql.Float, Consumo_Carretera_L100km);
        request.input('Consumo_Mixto_L100km', sql.Float, Consumo_Mixto_L100km);
        request.input('Promedio_kmL_Ciudad', sql.Float, Promedio_kmL_Ciudad);
        request.input('Promedio_kmL_Carretera', sql.Float, Promedio_kmL_Carretera);
        request.input('Promedio_kmL_Mixto', sql.Float, Promedio_kmL_Mixto);
        request.input('Modelo', sql.VarChar, Modelo);

        await request.query(query);

        res.status(201).send('Carro insertado exitosamente.');
    } catch (err) {
        console.error('Error al insertar el carro:', err);
        res.status(500).send('Error al insertar el carro.');
    } finally {
        await sql.close();
    }
});

app2.listen(port, () => {
    console.log(`Servidor insertar ejecutándose en http://localhost:${port}`);
});

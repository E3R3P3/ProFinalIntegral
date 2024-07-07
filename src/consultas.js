const express = require('express');
const app1 = express();
const { getMarcaData } = require('./marcas');
const { sql,connectToDatabase } = require('./dbconnection');

const port = 3333;

var path = require("path");

app1.set("view engine", "ejs");

app1.use(express.static (path.join (__dirname, 'public')));

app1.get('/carros/:marcaId', async (req, res) => {
    const marcaId = req.params.marcaId;

    try {
        await connectToDatabase();
        
        const request = new sql.Request();
        request.input('marcaId', sql.Int, parseInt(marcaId));

        const query = `SELECT * FROM Carros WHERE MarcaID = @marcaId`;
        const result = await request.query(query);

        res.json(result.recordset);
    } catch (err) {
        console.error('Error al realizar la consulta:', err);
        res.status(500).send('Error al realizar la consulta.');
    } finally {
        await sql.close();
    }
});  

app1.get('/carros/ano/:ano', async (req, res) => {
    const ano = req.params.ano;

    try {
        await connectToDatabase();
        
        const request = new sql.Request();
        request.input('ano', sql.Int, parseInt(ano));

        const query = `SELECT*FROM Carros WHERE Año = @ano`;
        const result = await request.query(query);

        res.json(result.recordset);
    } catch (err) {
        console.error('Error al realizar la consulta:', err);
        res.status(500).send('Error al realizar la consulta.');
    } finally {
        await sql.close();
    }
});

app1.get('/carros/generacion/:generacion', async (req, res) => {
    const generacion = req.params.generacion;

    try {
        await connectToDatabase();
        
        const request = new sql.Request();
        request.input('generacion', sql.VarChar, generacion);

        const query = `SELECT*FROM Carros WHERE Generacion = @generacion`;
        const result = await request.query(query);

        res.json(result.recordset);
    } catch (err) {
        console.error('Error al realizar la consulta:', err);
        res.status(500).send('Error al realizar la consulta.');
    } finally {
        await sql.close();
    }
});

app1.get('/carros/tipo_motor/:tipo_motor', async (req, res) => {
    const tipo_motor = req.params.tipo_motor;

    try {
        await connectToDatabase();
        
        const request = new sql.Request();
        request.input('tipo_motor', sql.VarChar, tipo_motor);

        const query = `SELECT*FROM Carros WHERE Tipo_Motor = @tipo_motor`;
        const result = await request.query(query);

        res.json(result.recordset);
    } catch (err) {
        console.error('Error al realizar la consulta:', err);
        res.status(500).send('Error al realizar la consulta.');
    } finally {
        await sql.close();
    }
});

app1.get('/carros/consumo_ciudad/:consumo', async (req, res) => {
    const consumo = req.params.consumo;

    try {
        await connectToDatabase();
        
        const request = new sql.Request();
        request.input('consumo', sql.Float, parseFloat(consumo));
        console.log("Valor del consumo:"+consumo);
        const query = `SELECT*FROM Carros WHERE Consumo_Ciudad_L100km = @consumo`;
        const result = await request.query(query);

        res.json(result.recordset);
    } catch (err) {
        console.error('Error al realizar la consulta:', err);
        res.status(500).send('Error al realizar la consulta.');
    } finally {
        await sql.close();
    }
});

app1.get('/carros/consumo_carretera/:consumo', async (req, res) => {
    const consumo = req.params.consumo;

    try {
        await connectToDatabase();
        
        const request = new sql.Request();
        request.input('consumo', sql.Float, parseFloat(consumo));

        const query = `SELECT * FROM Carros WHERE Consumo_Carretera_L100km = @consumo`;
        const result = await request.query(query);

        res.json(result.recordset);
    } catch (err) {
        console.error('Error al realizar la consulta:', err);
        res.status(500).send('Error al realizar la consulta.');
    } finally {
        await sql.close();
    }
});

app1.get('/carros/consumo_mixto/:consumo', async (req, res) => {
    const consumo = req.params.consumo;

    try {
        await connectToDatabase();
        
        const request = new sql.Request();
        request.input('consumo', sql.Float, parseFloat(consumo));

        const query = `SELECT * FROM Carros WHERE Consumo_Mixto_L100km = @consumo`;
        const result = await request.query(query);

        res.json(result.recordset);
    } catch (err) {
        console.error('Error al realizar la consulta:', err);
        res.status(500).send('Error al realizar la consulta.');
    } finally {
        await sql.close();
    }
});

app1.get('/carros/promedio_kmL_ciudad/:promedio', async (req, res) => {
    const promedio = req.params.promedio;

    try {
        await connectToDatabase();
        
        const request = new sql.Request();
        request.input('promedio', sql.Float, parseFloat(promedio));

        const query = `SELECT * FROM Carros WHERE Promedio_kmL_Ciudad = @promedio`;
        const result = await request.query(query);

        res.json(result.recordset);
    } catch (err) {
        console.error('Error al realizar la consulta:', err);
        res.status(500).send('Error al realizar la consulta.');
    } finally {
        await sql.close();
    }
});

app1.get('/carros/promedio_kmL_carretera/:promedio', async (req, res) => {
    const promedio = req.params.promedio;

    try {
        await connectToDatabase();
        
        const request = new sql.Request();
        request.input('promedio', sql.Float, parseFloat(promedio));

        const query = `SELECT * FROM Carros WHERE Promedio_kmL_Carretera = @promedio`;
        const result = await request.query(query);

        res.json(result.recordset);
    } catch (err) {
        console.error('Error al realizar la consulta:', err);
        res.status(500).send('Error al realizar la consulta.');
    } finally {
        await sql.close();
    }
});

app1.get('/carros/promedio_kmL_mixto/:promedio', async (req, res) => {
    const promedio = req.params.promedio;

    try {
        await connectToDatabase();
        
        const request = new sql.Request();
        request.input('promedio', sql.Float, parseFloat(promedio));

        const query = `SELECT * FROM Carros WHERE Promedio_kmL_Mixto = @promedio`;
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
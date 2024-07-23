const express = require('express');
const app = express();
const { ejecutarConsultass, ejecutarConsultaS } = require('./src/testconnection');
const { getMarcaData } = require('./src/marcas');

const port = 3030;

var path = require("path");

app.set("view engine", "ejs");

app.use(express.static (path.join (__dirname, 'public')));

require('./src/consultas2');

app.get('/1', async (req, res) => {
  try {
    const Data = await getMarcaData(4);
    res.json(Data);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching Carros data' });
  }
});

app.get('/', (req, res) => {
  res.send('Pagina principal');
});

app.get('/home', (req, res) => {
    res.render('index', { title: 'Mi Pagina Web', message: 'Hola Mundo' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'Acerca de', message: 'Esta es la página de "Acerca de".' });
});  

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


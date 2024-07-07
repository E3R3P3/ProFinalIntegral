const express = require('express');
const app = express();

const port = 3030;

var path = require("path");

app.set("view engine", "ejs");

app.use(express.static (path.join (__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Aqui es La rais');
});

app.get('/home', (req, res) => {
    res.render('index', { title: 'Mi Página Web', message: 'Hola Mundo' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'Acerca de', message: 'Esta es la página de "Acerca de".' });
});  

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

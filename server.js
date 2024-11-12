const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./app/routes.js')(app);

app.use(express.static(path.join(__dirname, './dist')));

app.get('*', (req, res) => {
  console.log('cualquier');
  res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

app.listen(app.get('port'), '0.0.0.0',() => {
  console.log('este es el backend en server on port ', app.get('port'));
});


const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.listen(PORT);

console.log(`Сервер на порту: ${PORT}`);

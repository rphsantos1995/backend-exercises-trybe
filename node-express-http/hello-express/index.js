const express = require('express');
const cors =require('cors');


const app = express(); // 1
app.use(cors());


app.get('/hello', handleHelloWorldRequest); // 2
app.get('/', handleMainPageRequest);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

function handleHelloWorldRequest(req, res) {
  res.status(200).send(`Apenas mais um exemplo de hello world aleatório, acredito que deveria 
  ser um pouco mais costumizado.`); // 4
}

function handleMainPageRequest(req, res) {
  res.status(200).send(`Página inicial para testar esse express`);
}
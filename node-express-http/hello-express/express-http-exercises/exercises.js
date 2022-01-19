const express = require('express');
const cors =require('cors');

const app = express(); 
app.use(cors());

app.get('/ping', function (req, res) {
  res.json({ message: 'pong' });
});


app.listen(3003, () => {
  console.log(`Aplicação ouvindo na porta 3003`);
}); 
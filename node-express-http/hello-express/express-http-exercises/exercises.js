const express = require('express');
const cors =require('cors');
const app = express(); 
app.use(express.json());
app.use(cors());

// 
app.get('/ping', function (req, res) {
  res.json({ message: 'pong' });
});

app.post('/greetings', function (req, res) {
  const { name, age } = req.body;
  if(age > 17) return res.status(200).json({ "message": `Hello, ${name}` });
    res.status(401).json({ "message": `Unauthorized, grow up ${age}` } );
});


app.listen(3003, () => {
  console.log(`${new Date().toLocaleString()}  Aplicação ouvindo na porta 3003`);
}); 
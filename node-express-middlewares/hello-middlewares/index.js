const express = require('express');
const authMiddleware = require('./auth-middleware');
const cors =require('cors');
const { validatePrice } = require('./validPrice.js');

const app = express();
//https://stackoverflow.com/questions/47232187/express-json-vs-bodyparser-json 
app.use(express.json());
app.use(cors());


app.get('/open', function (req, res) {
  res.send('open!')
});

app.use(authMiddleware);



const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
 res.status(200).json(recipes);
});

app.post('/recipes', validatePrice, function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', validatePrice, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipesIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipesIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipesIndex] = { ...recipes[recipesIndex], name, price };

  res.status(204).end();
});

app.listen(3007, () => {
  console.log(`${new Date().toLocaleString()} DrinkAndRecipes ,Aplicação ouvindo na porta 3007`);
});


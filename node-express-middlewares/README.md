## What are middlewares? 

In Express any function passed to a route is middleware , either directly or indirectly.

For Express, a middleware is a function that handles a request and that can terminate this request, or call the next middleware.

In practice, these functions take three parameters: req , res and next. Middlewares can return anything, including Promises. The fact is that Express ignores the return of the middleware, since what matters is whether or not that middleware called a method that ends the request, or the next function.

```javascript
const validateRecipe = (req, res, next) => {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'}); // 1
  next(); // 2
};

const createRecipe = (req, res) => { // 3
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
};

app.post('/recipes', validateRecipe, createRecipe);
```

1 - Validation that returns a response to the request if an empty name is sent in the body of the request. The middleware returns a response with status 400 and a json with a message saying that the data sent was invalid.
2 - If it doesn't fall into if , this middleware addresses the request to the next middleware.
3 - This middleware does the whole process of getting the data sent, saving it in an array, and finally returning a success message saying that the product has been registered.

## Router middleware

Router is a middleware that groups several routes in the same place, as if it were a mini version of the Express app. It is then "plugged in" to the "main app".

> path/to/recipesRouter.js

```javascript
/* recipesRouter.js */
const express = require('express');
const router = express.Router(); // name router for best pratices

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, preparationTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, preparationTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, preparationTime: 25 },
];

function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

  next();
};

router.get('/', function (req, res) {
  res.status(200).json(recipes);
});


router.get('/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

router.post('/', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

router.put('/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(500).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

module.exports = router;
```

Then, through the express file, its possible to setup recipeRouter to gather all routes in a single line

> path/to/index.js

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/open', function (req, res) {
   res.send('open!')
});

const recipesRouter = require('./recipesRouter');
//All routes with /recipes/<something> enter here and go to the router. */
app.use('/recipes', recipesRouter);

app.listen(3001, () => { console.log('Listening on port 3001'); });
```




// Exercício 1 -Crie uma função que recebe três parâmetros retorna uma Promise .

const fs = require('fs');

function readNumberPromise (num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if ((typeof(num1)  !== 
      'number' || typeof(num2)  !== 
      'number' || typeof(num3) !== 
      'number') ) reject(new Error ("Informe apenas números"))
    const result = ((num1 + num2) * num3);
    if (result < 2000) reject(new Error ("Valor muito baixo"))
    resolve(result);
  });
}


// Exercício 2 - Escreva um código para consumir a função construída no exercício anterior.

const getRandomWithPromise = () => {
  let num1 = Math.floor(Math.random() * 100 + 1);
  let num2 = Math.floor(Math.random() * 100 + 1);
  let num3 = Math.floor(Math.random() * 100 + 1);
  readNumberPromise(num1, num2, num3).then(data => console.log(data)).catch(err => console.log(err));
}

// Exercício 3 -  Reescreva o código do exercício anterior para que utilize async/await


const getRandomWithAwait = async () => {
  let num1 = Math.floor(Math.random() * 100 + 1);
  let num2 = Math.floor(Math.random() * 100 + 1);
  let num3 = Math.floor(Math.random() * 100 + 1);
  try {
    const result = await readNumberPromise(num1, num2, num3);
    console.log(result);
    return result;
    
  } catch (err) {
    console.log(err);
  }
}

getRandomWithAwait();



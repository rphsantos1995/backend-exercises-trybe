
// took me about 3hs to figure it out.
const fs = require('fs').promises;

let newAr = `nome cliente 1 - Rogerinho da silva
nome cliente 2 - Goku de souza
nome cliente 3 - Madimboo texeira
nome cliente 4 - Rafael luiz`.split("nome");

let result = newAr.map(item => item.split(/[.\*+\-/_/\n]/));

result2 = result.reduce(function(prev,curr){prev[curr[0]]=curr[1];return prev;},{});


fs.writeFile('./case/arquivo1.json', result2)
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });
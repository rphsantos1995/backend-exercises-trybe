
## Promises

The concept of a Promise, or a Promise object, is not very different from the idea of a promise in real life: someone commits to someone else to do something. That promise can be fulfilled and therefore resolved, or something can go wrong, making it impossible to fulfill the promise, which will then be rejected. Promises in JavaScript work the same way: a promise is created, and inside it is code to be executed. 


- If the code runs without any problems, the Promise is resolved through the function resolve. 


- If something goes wrong during code execution, the Promise is rejected via the reject function.

```javascript
function divideNumbers(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0)  reject(new Error("number can't be divided by 0.")); 
    /** Promise rejected  */
    
    resolve(num1 / num2);
     /** Promise resolved  */
  });
  return promise;
}

divideNumbers(3, 2)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));
```

Through Promises it is possible to register several successful callbacks to be executed one after the other, with the next callback receiving the result of the previous callback. We do this by using multiple .then in the same Promise. The functions we pass to each then will be executed in sequence, and the result of one will be passed to the next.


```javascript
const fs = require('fs'); // native node library

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

readFilePromise('/path/to/file1.txt') 
  .then((content) => { 
    console.log(`Read file1.txt with ${content.byteLength} bytes`);
    return readFilePromise('/path/to/file2.txt'); 
  })
  .then(content => { 
    console.log(`Read file2.txt with ${content.byteLength} bytes`);
    return readFilePromise('/path/to/file3.txt'); 

  .then((content) => { 
    console.log(`Read file3.txt with ${content.byteLength} bytes`); 
  })
  .catch((err) => { 
    console.log(`Error reading files: ${err.message}`);
    process.exit(1); // end the script with a error code
  }); 
```

## Async/await 

The point is that every function in which we use async , automatically starts to return a Promise, which will be rejected in case of error, and resolved in case of success.
The result of using async / await is that the code has a syntax that is almost identical to the syntax used for synchronous code.


```javascript
const fs = require('fs').promises;
//uses methods that already implement promises internally, dispensing with the handling of callbacks.

async function main() {
   try { // Used to treat rejected values
     await fs.writeFile('./my-file.txt', 'My textão');
     console.log('File successfully written!');
   } catch(err) {
     console.error(`Error writing the file: ${err.message}`);
   }
};
main();
```

For more info, see:
[Async/await docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

## Promise.all

Is a Promise method that allows us to pass an array of Promises and get back a single Promise. It will be resolved with the results of all Promises, once all of them are resolved. This method also allows us to use a single catch, which will be called if any of the promises are rejected.

```javascript
const fs = require('fs').promises;

promise.all([
   fs.readFile('file1.txt'),
   fs.readFile('file2.txt'),
   fs.readFile('file3.txt'),
])
   .then(([file1, file2, file3]) => {
     const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
     console.log(`Read 3 files totaling ${fileSizeSum} bytes`);
   })
   .catch((err) => {
     console.error(`Error reading files: ${err.message}`);
   });
```
Read the three files at the same time, and the .then will be executed when the reading of all files finishes, receiving as parameter an array with the result of each one of the Promises.
[Promise.all docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
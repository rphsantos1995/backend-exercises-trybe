import { connect, Schema, model } from 'mongoose';

const options = {
  user: 'user', 
  pass: 'password',
  autoIndex: false, // Não cria index para cada inserção de dado no banco.
  dbName: 'model_example', // Define qual banco de dados vou utilizar.
};

connect('mongodb://localhost:27017/', options);

interface Book {
  title: string,
  author: string,
}

const bookSchema = new Schema<Book>({
  title: { type: String, required: true },
  author: { type: String, required: true }});


  const bookModel = model<Book>('books', bookSchema);

  




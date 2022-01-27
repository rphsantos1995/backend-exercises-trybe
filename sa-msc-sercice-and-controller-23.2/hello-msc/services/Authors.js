// services/Authors.js

const Author = require('../models/Author');

const getNewAuthor = (authorData) => {

  const { id, firstName, middleName, lastName } =  authorData;
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };

 
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
  }


const getAll = async () => {
  try {
    const authors = await Author.getAll();
    return authors.map(getNewAuthor);
    
  } catch (err) {
    console.log(err);
  }

}

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) return null;

  return getNewAuthor(author);
};

const createAuthor = async (firstName, middleName, lastName) => {

  // try {
    
    const validAuthor = isValid(firstName, middleName, lastName);
  
    if (!validAuthor) return false;
   const result = await Author.createAuthor(firstName, middleName, lastName);
   const {id} =  result;
  
    // const [author] = await Author.createAuthor(firstName, middleName, lastName)
  
    // authorId = author.insertId;
  
    return getNewAuthor({
      // id: authorId ,
      id,
      firstName, middleName, 
      lastName 
    });

  // } catch (err) {
  //     console.log(err);
  // }


};

module.exports = {
  getAll,
  findById,
  createAuthor
}
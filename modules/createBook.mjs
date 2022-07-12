// ADD NEW BOOK --------
const createBook = (id, title, author) => {
  const newbook = { ID: id, Title: title, Author: author };
  return newbook;
};

export default createBook;

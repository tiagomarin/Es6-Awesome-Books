// CLEAR ALL BOOKS ON HTML TO PRINT AGAIN --------
const clearBooks = () => {
  const bookList = document.getElementById('book-list');
  while (bookList.firstChild) {
    bookList.removeChild(bookList.firstChild);
  }
};

export default clearBooks;

// DISPLAY THE BOOKS IN PAGE --------
const displayBooks = () => {
  const bookList = document.getElementById('book-list');
  const libraryArr = JSON.parse(localStorage.getItem('libraryArr'));
  if (libraryArr !== null) {
    for (let i = 0; i < libraryArr.length; i += 1) {
      const book = `<li class='book'>
      <div class='book-info'>            
        <p class='title'>${libraryArr[i].Title}</p>
        <p> &nbsp by &nbsp </p> 
        <p class='author'>${libraryArr[i].Author}</p>
      </div>
      <button id="${libraryArr[i].ID}" class='remove-button'>Remove</button>
      </li>`;
      bookList.innerHTML += book;
    }
  }
};

export default displayBooks;

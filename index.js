import bookIDgenerator from './modules/idGenerator.js';
import createBook from './modules/createBook.js';
import displayBooks from './modules/displayBooks.js';
import getArr from './modules/getDataFromLocalStorage.js';
import saveInLocalStorage from './modules/saveAtLocalStorage.js';
import { DateTime } from './modules/luxon.js';

//  -------------- EVENT LISTENERS ------------------
// TARGET DOM ELEMENTS --------
const addButtun = document.querySelector('#add');
const navLinkList = document.querySelector('#list');
const navLinkAdd = document.querySelector('#navAdd');
const navLinkContact = document.querySelector('#navContact');
const addSection = document.querySelector('#add-book');
const contactSection = document.querySelector('#contact');
const listSection = document.querySelector('#book-section');
const dateTime = document.getElementById('date-time');
const bookList = document.getElementById('book-list');

dateTime.innerHTML = DateTime.now();

// ADD BOOK BUTTON -------
addButtun.addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  if (title !== '' && author !== '') {
    const ID = bookIDgenerator();
    const newBook = createBook(ID, title, author);
    const libraryArr = getArr();
    libraryArr.push(newBook);
    saveInLocalStorage(libraryArr);
  }
});

// REMOVE BOOK BUTTON
bookList.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
    const index = parseInt(e.target.id, 10);
    let libraryArr = getArr();
    libraryArr = libraryArr.filter((book) => book.ID !== index);
    saveInLocalStorage(libraryArr);
  }
});

// NAV BAR LINKS
navLinkList.addEventListener('click', () => {
  addSection.classList.add('inactive');
  contactSection.classList.add('inactive');
  listSection.classList.remove('inactive');
  document.location.reload();
});
navLinkAdd.addEventListener('click', () => {
  addSection.classList.remove('inactive');
  listSection.classList.add('inactive');
  contactSection.classList.add('inactive');
});
navLinkContact.addEventListener('click', () => {
  contactSection.classList.remove('inactive');
  listSection.classList.add('inactive');
  addSection.classList.add('inactive');
});

// --------- DISPLAY BOOKS ON PAGE -------------
displayBooks();

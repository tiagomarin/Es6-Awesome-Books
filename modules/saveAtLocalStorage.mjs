// SAVE ARRAY AS STRING TO LOCAL STORAGE --------

const saveInLocalStorage = (arr) => {
  localStorage.setItem('libraryArr', JSON.stringify(arr));
};

export default saveInLocalStorage;
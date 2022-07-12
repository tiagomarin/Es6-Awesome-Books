// GET ARRAY FROM LOCAL STORAGE --------
const getArr = () => {
  let arr = JSON.parse(localStorage.getItem('libraryArr'));
  if (arr === null) {
    arr = [];
  }
  return arr;
};

export default getArr;

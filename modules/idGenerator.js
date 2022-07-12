// ID GENERATOR --------

const bookIDgenerator = () => {
  let previousID = JSON.parse(localStorage.getItem('ID-generator'));
  const newID = previousID + 1;
  if (previousID == null) {
    previousID = 1;
    localStorage.setItem('ID-generator', JSON.stringify(previousID));
    return previousID;
  }
  localStorage.setItem('ID-generator', JSON.stringify(newID));
  return newID;
};

export default bookIDgenerator;
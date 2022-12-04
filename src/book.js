function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(firstName, yearsOld, goesBy) {
  return character = {
    name: firstName,
    age: yearsOld,
    pronouns: goesBy
  };
};

function saveReview(value, location) {
  if (location.includes(value) === false) {
  return location.push(value);
  };
};

function calculatePageCount(title) {
  return title.length * 20;
};

function writeBook(bookTitle, bookCharacter, type) {
  return book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: type
  };
};

function editBook() {
  book.pageCount *= (3/4);
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
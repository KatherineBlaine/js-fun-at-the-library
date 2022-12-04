function shelfBook(book, shelf) {
  if (shelf.length < 3) {
  shelf.unshift(book);
  return shelf;
  };
};

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      shelf.splice(i, 1);
    };
  };
  return shelf;
};

function listTitles(shelf) {
  return `${shelf[0].title}, ${shelf[1].title}, ${shelf[2].title}`;
  };


function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    var keys = Object.values(shelf[i]);
    } return keys.includes(title);
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
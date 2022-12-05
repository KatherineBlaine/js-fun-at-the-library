function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };
  return library;
}

function addBook(library, book) {
  if (book.genre === 'fantasy') {
  return library.shelves.fantasy.push(book);
  } if (book.genre === 'nonFiction') {
    return library.shelves.nonFiction.push(book);
  } if (book.genre === 'fiction') {
    return library.shelves.fiction.push(book);
  }
}


function checkoutBook(library, book, genre) {
  if (genre === 'fantasy') {
    library.shelves.fantasy.splice(0, 1);
  } else if (genre === 'nonFiction') {
    library.shelves.nonFiction.splice(0, 1);
  } else if (genre === 'fiction') {
    library.shelves.fiction.splice(0, 1);
  }
  return `You have now checked out ${book} from the ${library.name}`;
}
  



module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
export function selectBook(book) {
  // Select book is an action creator; it needs to return an action
  // i.e. an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

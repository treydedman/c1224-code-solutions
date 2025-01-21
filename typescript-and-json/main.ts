const books = [
  {
    isbn: '978-1910619919',
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
  },
  {
    isbn: '978-0451524935',
    title: '1984',
    author: 'George Orwell',
  },
  {
    isbn: '978-1524743420',
    title: 'The Mosquito',
    author: 'Timothy Winegard',
  },
];
console.log('array of books (typeof): ', typeof books);
console.log('array of books: ', books);
console.log(
  `the typeof for each property: `,
  `isbn: ${typeof books[0].isbn}, `,
  `title: ${typeof books[0].title}, `,
  `author: ${typeof books[0].author}`
);

// googled how to do this part to get it all for each book
books.forEach((book, index) => {
  // add 1 to index to begin with book 1 then display typeof for each property
  console.log(`Book ${index + 1}:`);
  console.log(`  isbn: ${book.isbn} (type: ${typeof book.isbn})`);
  console.log(`  title: ${book.title} (type: ${typeof book.title})`);
  console.log(`  author: ${book.author} (type: ${typeof book.author})`);
});

const booksJSON = JSON.stringify(books);
console.log('JSON string of books array (typeof): ', typeof booksJSON);
console.log('JSON string of books array', booksJSON);

const studentJSON = '{"id": 101, "name": "Chris Farley"}';
console.log('student JSON (typeof): ', typeof studentJSON);
console.log('studentJSON string: ', studentJSON);

const studentObject = JSON.parse(studentJSON);
console.log('parsed student object (typeof): ', typeof studentObject);
console.log('parsed student object: ', studentObject);
// question: if I begin the id with 0, ex: 001, i get an error message
// in the console "uncaught syntax error: unexpected number"
// can you tell me why

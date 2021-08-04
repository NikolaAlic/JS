const book = {
    title: "Game of Thrones",
    author: "George R. R. Martin",
    rating: 4
};

const rate = (book, rating) => {
    book.rating = rating;
    return book;
};

// var bookB = rate(book, 5);
// console.log(book);
// console.log(bookB);
// bookB = rate(book, 6);
// console.log(book);
// console.log(bookB);
// bookB.rating = 8;
// console.log(book);


const rateBook = (book, rating) => {
    let bookA = Object.assign({}, book);
    bookA.rating = rating;
    return bookA;
}

var bookA = rateBook(book, 5);
console.log(book);
console.log(bookA);
bookA.rating = 7;
console.log(book);
console.log(bookA);



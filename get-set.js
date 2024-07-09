class Book {
  #title;
  #author;
  #year;
  
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  
  get title() {
    return this.#title;
  }
  
  set title(title) {
    this.#title = title;
  }
  
  get author() {
    return this.#author;
  }
  
  set author(author) {
    this.#author = author;
  }
  
  get year() {
    return this.#year;
  }
  
  set year(year) {
    if (typeof(year) === 'number' && year >= 1900) {
      this.#year = year;
    }
    else {
      throw new RangeError('Invalid year, set one after 1900.');
    }
  }
  
}

let book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
console.log(book.title);  // The Great Gatsby
console.log(book.author); // F. Scott Fitzgerald
console.log(book.year);   // 1925

book.year = 1932;         // Changing year
console.log(book.year);   // 1932

try {
  book.year = 1825;
} catch (e) {
  console.log(e);   // RangeError: Invalid year
}

try {
  let book2 = new Book('A Tale of Two Cities', 'Charles Dickents', 1859);
} catch (e) {
  console.log(e);   // RangeError: Invalid year
}
class Book{
    constructor (title, author, genre, year) {
    this.title = title
    this.author = author
    this.genre = genre
    this.year = year
    console.log ("This is class constructor")
    };
}

let book1 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", 1960);
console.log(book1.title);
console.log(book1.author);
console.log(book1.genre);
console.log(book1.year);

let book2 = new Book("1984", "George Orwell", "Dystopian", 1949);
console.log(book2.title);
console.log(book2.author);
console.log(book2.genre);
console.log(book2.year);

let book3 = new Book("Pride and Prejudice", "Jane Austen", "Romance", 1813);
console.log(book3.title);
console.log(book3.author);
console.log(book3.genre);
console.log(book3.year);

console.log("Script is running");



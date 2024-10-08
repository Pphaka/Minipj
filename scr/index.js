"use strict";
;
var Gen;
(function (Gen) {
    Gen["learning"] = "Learning";
    Gen["scary"] = "Scary";
    Gen["funny"] = "Funny";
    Gen["sad"] = "SadStory";
})(Gen || (Gen = {}));
const inventory = [];
function AddBook(book) {
    inventory.push(book);
    console.log(`${book.Title} by ${book.Author}has been added to inventory`);
}
;
function listBooks() {
    if (inventory.length === 0) {
        return console.log("No books in the inventory.");
    }
    console.log("Listing all books in the inventory:");
    inventory.forEach((book) => {
        console.log(`ID: ${book.Id}, Title: ${book.Title}, Author: ${book.Author},Available: ${book.availability}`);
    });
}
function SearchBooks(key, value) {
    return inventory.filter((book) => book[key] === value);
}
function UpdateBook(id, updates) {
    const book = inventory.find((b) => b.Id === id);
    if (!book) {
        console.log(`Book with ID ${id} not found.`);
        return;
    }
    Object.assign(book, updates);
    console.log(`Book with ID ${id} has been updated.`);
}
function deleteBook(id) {
    const index = inventory.findIndex((book) => book.Id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
        console.log(`Book with ID ${id} has been deleted.`);
    }
    else {
        console.log(`Book with ID ${id} not found.`);
    }
}
const book1 = {
    Id: 1,
    Title: "Hello Beautiful",
    Author: "Ann Napolitano",
    genre: Gen.sad,
    publishedyear: 2002,
    availability: true,
};
const book2 = {
    Id: 2,
    Title: "Lucky Jim",
    Author: "Kingsley Amis",
    genre: Gen.funny,
    publishedyear: 1954,
    availability: true,
};
AddBook(book1);
AddBook(book2);
listBooks();
UpdateBook(1, { Title: "Call me by your name" });
listBooks();
deleteBook(3);
listBooks();

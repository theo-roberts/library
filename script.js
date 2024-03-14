const myLibrary = [];

function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
};

//work out how to get the new book to display in the hmtl

document.querySelector("#submitBtn").addEventListener('click', function(){

    title = document.getElementById("bookTitle").value;
    author = document.getElementById("bookAuthor").value;
    isRead = document.getElementById("isRead").value;

    newBook = new Book(title, author, isRead)
    myLibrary.push(newBook)
    event.preventDefault()
    document.getElementById('bookForm').style.display = "none";
    console.log(myLibrary)
    let shelf = document.getElementById("shelf");
});

document.getElementById('newBookBtn').addEventListener('click', function(){
    document.getElementById('bookForm').style.display = "block";
});


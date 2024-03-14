const myLibrary = [];

function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
};



//overwriting each book, and not showing in console log. work out how to
//get it to loop thru.

document.querySelector("#submitBtn").addEventListener('click', function(){

    title = document.getElementById("bookTitle").value;
    author = document.getElementById("bookAuthor").value;
    isRead = document.getElementById("isRead").value;
    newBook = new Book(title, author, isRead)

    myLibrary.push(newBook)
    event.preventDefault()
    
    document.getElementById('bookForm').style.display = "none";

    function displayInShelf() {
        document.getElementById("shelf").innerHTML = 
        '<div>' + title + ", " + author + '</div>'
    };

    myLibrary.forEach(displayInShelf(Book));
    console.log(Book)
    
});




document.getElementById('newBookBtn').addEventListener('click', function(){
    document.getElementById('bookForm').style.display = "block";
});


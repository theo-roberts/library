const myLibrary = [];

function Book(title, author, isRead, bookID) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
    this.bookID = bookID;
};

let counter = 0

//work out how to add the checkbox to the display.

document.querySelector("#submitBtn").addEventListener('click', function(){

        document.getElementById('bookForm').style.display = "none";

        title = document.getElementById("bookTitle").value;
        author = document.getElementById("bookAuthor").value;
        isRead = document.getElementById("isRead").value;
        bookID = counter;
        newBook = new Book(title, author, isRead, bookID)

        myLibrary.push(newBook)

        function displayInShelf() {
            let bookContainer = document.createElement('div');
            let bookChild = document.createElement('div');
            let text = document.createTextNode(myLibrary[i].title + ", " + myLibrary[i].author)
            bookChild.appendChild(text);
            bookContainer.appendChild(bookChild)
            document.getElementById("shelf").appendChild(bookContainer)
        };

        for (i=counter; i<myLibrary.length; i++){
        displayInShelf(Book)
        };

        counter++
        event.preventDefault()
    console.log(isRead)
});




document.getElementById('newBookBtn').addEventListener('click', function(){
    document.getElementById('bookForm').style.display = "block";
});


const myLibrary = [];

function Book(title, author, bookID) {
    this.title = title;
    this.author = author;
    this.bookID = bookID;
};

let counter = 0



document.querySelector("#submitBtn").addEventListener('click', function(){

    document.getElementById('bookForm').style.display = "none";

    title = document.getElementById("bookTitle").value;
    author = document.getElementById("bookAuthor").value;
    bookID = counter;
    newBook = new Book(title, author, bookID)

    myLibrary.push(newBook)

    function displayInShelf() {
        let bookContainer = document.createElement('div');
        bookContainer.setAttribute("class", "book")
        bookContainer.setAttribute("id", counter)
                
        let bookTitle = document.createElement('div');
        bookTitle.setAttribute("class", "bookTitle"); 
        let bookTitleText = document.createTextNode(myLibrary[i].title)
        bookTitle.appendChild(bookTitleText);
    
        let bookAuthor = document.createElement('div');
        bookAuthor.setAttribute("class", "bookAuthor"); 
        let bookAuthorText = document.createTextNode(myLibrary[i].author)
        bookAuthor.appendChild(bookAuthorText);
    
        let readCheckbox = document.createElement('input')
        readCheckbox.setAttribute("type", "checkBox", "name", "readStatus")
    
        let checkBoxLabel = document.createElement('label')
        checkBoxLabel.setAttribute("for", "readStatus")
        let checkBoxLabelText = document.createTextNode("Read")
        checkBoxLabel.appendChild(checkBoxLabelText)
    
        bookContainer.appendChild(bookTitle)
        bookContainer.appendChild(bookAuthor)
        bookContainer.appendChild(checkBoxLabel)
        bookContainer.appendChild(readCheckbox)
    
        document.getElementById("shelf").appendChild(bookContainer)
    };

    for (i=counter; i<myLibrary.length; i++){
        displayInShelf(Book)
    };

    counter++

    event.preventDefault()

    console.log(myLibrary)
});


document.getElementById('newBookBtn').addEventListener('click', function(){
    document.getElementById('bookForm').style.display = "block";
});


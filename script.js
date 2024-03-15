const myLibrary = [];

function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
};



//looping thru but adding every book each time

document.querySelector("#submitBtn").addEventListener('click', function(){

    title = document.getElementById("bookTitle").value;
    author = document.getElementById("bookAuthor").value;
    isRead = document.getElementById("isRead").value;
    newBook = new Book(title, author, isRead)

    myLibrary.push(newBook)
    event.preventDefault()
    
    document.getElementById('bookForm').style.display = "none";

    for (let i = 0; i < myLibrary.length; i++) 
    { let text = document.createElement('div') 
    text.innerHTML = myLibrary[i] 
    let shelf = document.getElementById("shelf"); 
    shelf.appendChild(text); };

    console.log(myLibrary)
    
});




document.getElementById('newBookBtn').addEventListener('click', function(){
    document.getElementById('bookForm').style.display = "block";
});


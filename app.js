
let library = [];
const addBookToLibraryButton = document.querySelector('#addBookButton');

mainBody.appendChild(addBookToLibraryButton);
console.log(mainBody);
console.log(addBookToLibraryButton);
function Book(title, author, numOfPages, haveRead){
  this.title = title,
  this.author = author,
  this.numOfPages = numOfPages,
  this.haveRead = haveRead
  this.info = function() {
    return `This book has ${numOfPages} pages, the title is ${title}, the author is ${author}, and it has been read: ${haveRead}.`;
  }
}


function addBookToLibrary() {
  
  let bookTitle = prompt("What book title would you like to add?");
  let bookAuthor = prompt("What is the books author?");
  let bookLength = prompt("What is the length of the book?");
  let haveIReadIt = prompt("Have you read this book? True or False?");
  if(haveIReadIt == "True"){
    haveIReadIt = true;
  } else {
    haveIReadIt = false;
  }
  const newBook = new Book(bookTitle, bookAuthor, bookLength, haveIReadIt);
  
  console.log(newBook.info());
  library.push(newBook);
  console.log(library);
}



function displayLibrary () {

  for (let index = 0; index < library.length; index++) {
    let element = library[index];

    let individualBook = document.createElement('div');
    individualBook.classList.add('book');
    mainBody.appendChild(individualBook);
    let bookTitle = document.createElement('h4');
    bookTitle.innerHTML = element.title;
    let bookAuthor = document.createElement('h5');
    bookAuthor.innerHTML = element.author;
    let bookLength = document.createElement('h6');
    bookLength.innerHTML = "Pages : " + element.numOfPages;
    let haveIReadIt = document.createElement('h6');
    haveIReadIt.innerHTML = "Have I read this : " + element.haveRead;
    individualBook.appendChild(bookTitle);
    individualBook.appendChild(bookAuthor);
    individualBook.appendChild(bookLength);
    individualBook.appendChild(haveIReadIt);
    
  }
}

addBookToLibraryButton.addEventListener('click', () => {

})
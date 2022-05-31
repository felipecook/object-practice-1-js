



let library = [];

function Book(title, author, numOfPages, haveRead){
  this.title = title,
  this.author = author,
  this.numOfPages = numOfPages,
  this.haveRead = haveRead
  this.info = function() {
    return `This book has ${numOfPages} pages, the title is ${title}, the author is ${author}, and it has been read: ${haveRead}.`;
  }
}


//const theHobbit = new Book("The Hobbit", "JRR Tolk", 57, true);

// console.log(theHobbit.info());

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
  const body = document.querySelector("#body");

  for (let index = 0; index < library.length; index++) {
    let element = library[index];

    let individualBook = document.createElement('div');
    individualBook.classList.add('book');
    body.appendChild(individualBook);
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
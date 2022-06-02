
let library = [];
const libraryContainer = document.querySelector('.body__container');
const addBookToLibraryButton = document.querySelector('#addBookButton');
const newBookSubmissionDiv = document.querySelector('.newBookSubmission');
const submitNewBookButton = document.createElement('button');
const newBookTitleInput = document.createElement('input');
const newBookTitleLabel = document.createElement('label');
newBookTitleInput.setAttribute('type', 'text');
newBookTitleInput.setAttribute('id', 'title');
newBookTitleLabel.setAttribute('for', 'title');
newBookTitleLabel.innerHTML = 'What is the book title?';
submitNewBookButton.addEventListener('click', addBookToLibraryButtonClicked);
console.log(addBookToLibraryButton);
function Book(title, author, numOfPages, haveRead) {
  this.title = title,
    this.author = author,
    this.numOfPages = numOfPages,
    this.haveRead = haveRead
  this.info = function () {
    return `This book has ${numOfPages} pages, the title is ${title}, the author is ${author}, and it has been read: ${haveRead}.`;
  }
}


function addBookToLibrary(bookTitle, bookAuthor, bookLength, haveIReadIt) {

  // let bookTitle = prompt("What book title would you like to add?");
  // let bookAuthor = prompt("What is the books author?");
  // let bookLength = prompt("What is the length of the book?");
  // let haveIReadIt = prompt("Have you read this book? True or False?");

  if (haveIReadIt == "True") {
    haveIReadIt = true;
  } else {
    haveIReadIt = false;
  }
  const newBook = new Book(bookTitle, bookAuthor, bookLength, haveIReadIt);

  console.log(newBook.info());
  library.push(newBook);
  console.log(library);
}

function addBookToLibraryButtonClicked() {
  addBookToLibrary(newBookTitleInput.value);
}



function displayLibrary() {

  for (let index = 0; index < library.length; index++) {
    let element = library[index];

    let individualBook = document.createElement('div');
    individualBook.classList.add('book');
    libraryContainer.appendChild(individualBook);
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

addBookToLibraryButton.addEventListener('click', openNewBookForm);

function openNewBookForm() {


  newBookSubmissionDiv.appendChild(newBookTitleLabel);
  newBookSubmissionDiv.appendChild(newBookTitleInput);
  newBookSubmissionDiv.appendChild(submitNewBookButton);


}
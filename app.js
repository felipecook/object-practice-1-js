
let library = [];
let libraryIndex = 0;
let bookId = 0;
const libraryContainer = document.querySelector('.body__container');
const addBookToLibraryButton = document.querySelector('#addBookButton');
const newBookSubmissionDiv = document.querySelector('.newBookSubmission');
const submitNewBookButton = document.createElement('button');
submitNewBookButton.innerHTML = "Click me to add to library";

// Book Title input and label
const newBookTitleInput = document.createElement('input');
const newBookTitleLabel = document.createElement('label');
newBookTitleInput.setAttribute('type', 'text');
newBookTitleInput.setAttribute('id', 'title');
newBookTitleLabel.setAttribute('for', 'title');
newBookTitleLabel.innerHTML = 'What is the book\'s title?';

// Book Author input and label
const newBookAuthorInput = document.createElement('input');
const newBookAuthorLabel = document.createElement('label');
newBookAuthorInput.setAttribute('type', 'text');
newBookAuthorInput.setAttribute('id', 'author');
newBookAuthorLabel.setAttribute('for', 'author');
newBookAuthorLabel.innerHTML = 'What is the book\'s author?';

// Book Num of Pages input and label
const newBookNumOfPagesInput = document.createElement('input');
const newBookNumOfPagesLabel = document.createElement('label');
newBookNumOfPagesInput.setAttribute('type', 'text');
newBookNumOfPagesInput.setAttribute('id', 'numOfPages');
newBookNumOfPagesLabel.setAttribute('for', 'numOfPages');
newBookNumOfPagesLabel.innerHTML = 'What is the book\'s Number of Pages?';

submitNewBookButton.addEventListener('click', addBookToLibraryButtonClicked);
console.log(addBookToLibraryButton);
function Book(title, author, numOfPages, haveRead, id) {
  this.title = title,
  this.author = author,
  this.numOfPages = numOfPages,
  this.haveRead = haveRead
  this.id = id;
  this.info = function () {
    return `This book has ${numOfPages} pages, the title is ${title}, the author is ${author}, and it has been read: ${haveRead}.`;
  }
}


function addBookToLibrary(bookTitle, bookAuthor, bookLength, haveIReadIt, id) {

  // let bookTitle = prompt("What book title would you like to add?");
  // let bookAuthor = prompt("What is the books author?");
  // let bookLength = prompt("What is the length of the book?");
  // let haveIReadIt = prompt("Have you read this book? True or False?");

  if (haveIReadIt == "True") {
    haveIReadIt = true;
  } else {
    haveIReadIt = false;
  }
  const newBook = new Book(bookTitle, bookAuthor, bookLength, haveIReadIt, id);

  console.log(newBook.info());
  library.push(newBook);
  console.log(library);
}

function addBookToLibraryButtonClicked() {
  addBookToLibrary(newBookTitleInput.value, newBookAuthorInput.value, newBookNumOfPagesInput.value, 'False', bookId);
  displayLibrary()
}



function displayLibrary() {

  for (libraryIndex; libraryIndex < library.length; libraryIndex++) {
    let element = library[libraryIndex];

    let deleteBookButton = document.createElement('button');
    deleteBookButton.addEventListener('click', removeBookFromLibrary);
    deleteBookButton.innerHTML = 'Delete Book';
    let individualBook = document.createElement('div');
    deleteBookButton.id = `${bookId}`;
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
    individualBook.appendChild(deleteBookButton);
    bookId++;
  }
}

addBookToLibraryButton.addEventListener('click', openNewBookForm);

function openNewBookForm() {


  newBookSubmissionDiv.appendChild(newBookTitleLabel);
  newBookSubmissionDiv.appendChild(newBookTitleInput);
  newBookSubmissionDiv.appendChild(newBookAuthorLabel);
  newBookSubmissionDiv.appendChild(newBookAuthorInput);
  newBookSubmissionDiv.appendChild(newBookNumOfPagesLabel);
  newBookSubmissionDiv.appendChild(newBookNumOfPagesInput);
  newBookSubmissionDiv.appendChild(submitNewBookButton);


}

function removeBookFromLibrary() {
  for (let index = 0; index < library.length; index++) {
    const element = library[index];
    if (element.id == this.id) {
      library.splice(element, 1);
    }
  }
}
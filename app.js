function Book(title, author, numOfPages, haveRead){
  this.title = title,
  this.author = author,
  this.numOfPages = numOfPages,
  this.haveRead = haveRead
  this.info = function() {
    return `This book has ${numOfPages} pages, the title is ${title}, the author is ${author}, and it has been read: ${haveRead}.`
  }
}


const theHobbit = new Book("The Hobbit", "JRR Tolk", 57, true);

console.log(theHobbit.info);

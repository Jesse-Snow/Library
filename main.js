const nameInput = document.getElementById('BookName');
const authorInput = document.getElementById('BookAuthor');
const readInput = document.getElementById('BookReaded');
const pagesInput = document.getElementById('BookPages')
const library = document.getElementById('library')
const allBooks = [];

function Book(name,author,pages,read){
  this.name = name;
  this.author = author;
  this.read = read;
  this.pages = pages;
  this.isNewBook = true;
  // this.arrayIndex = null;
}      

function addBooksToLibrary(){
  allBooks.push(new Book(nameInput.value,authorInput.value,pagesInput.value,readInput.checked))
  nameInput.value = '';
  authorInput.value = '';
  readInput.checked = false;
  console.log(allBooks); // Delete
  showBooks();
}

function showBooks(){
  allBooks.forEach(value => {
    if(value.isNewBook === true){
      value.isNewBook = false;
      let newBook = document.createElement('div');
      newBook.className = 'book';
      let bookInfo = document.createElement('p');
      bookInfo.innerHTML = `
      Livro:${value.name} <br> 
      Autor:${value.author} <br>
      Páginas:${value.pages} <br>
      Lido:${wasReaded(value)} `;
      newBook.appendChild(bookInfo);
      library.appendChild(newBook);
    }
  })
}

function wasReaded({read}){
  if(read === true) {
    return 'Sim'
  }
  else{
    return 'Não'
  }
}
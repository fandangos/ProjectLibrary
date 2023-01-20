// PopUp rendering code and buttons area

const popUp = document.getElementById("popup");
const addBtn = document.getElementById("addbook");
const closeBtn = document.getElementById("closebtn");
const submitBtn = document.getElementById("submit");

function showPopUp() {
  popUp.style.opacity = "100%";
  popUp.style.display = "grid";
}

function closePopUp() {
  popUp.style.opacity = "0";
  popUp.style.display = "none";
}

addBtn.addEventListener("click", showPopUp);
addBtn.addEventListener("mousedown", (event) => {
  addBtn.style.transform = "scale(0.9)";
});
addBtn.addEventListener("mouseup", (event) => {
  addBtn.style.transform = "none";
});

closeBtn.addEventListener("click", closePopUp);
closeBtn.addEventListener("mousedown", (event) => {
  closeBtn.style.transform = "scale(0.9)";
});
closeBtn.addEventListener("mouseup", (event) => {
  closeBtn.style.transform = "none";
});

submitBtn.addEventListener("mousedown", (event) => {
  submitBtn.style.transform = "scale(0.9)";
});
submitBtn.addEventListener("mouseup", (event) => {
  submitBtn.style.transform = "none";
});

// end of PopUp code area

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function removeBook(index, id) {
  document.getElementById(id).remove();
  myLibrary.splice(myLibrary.indexOf(index), 1);
}

function renderBook(book, index) {
  const main = document.getElementById("main");
  const div = document.createElement("div");
  const removeBtn = document.createElement("button");

  div.className = "book";
  div.id = index;
  div.textContent = `${book.title} \r\n`;
  div.textContent += `${book.author} \r\n`;
  div.textContent += `${book.pages} pages \r\n`;
  if (book.read) {
    div.textContent += "Book read \r\n";
  } else {
    div.textContent += "Not read yet"
  }

  main.appendChild(div);

  removeBtn.setAttribute("class", "deletebtn");
  div.appendChild(removeBtn);
    removeBtn.onclick = () => {
      removeBook(book, div.id);
    };
}

function createBook() {
  document.getElementById("main").textContent = "";

  for (let i = 0; i < myLibrary.length; i++) {
    renderBook(myLibrary[i], [i]);
  }
}

function addBookToLibrary(event) {
  event.preventDefault();

  const bookTitle = event.target["addtitle"].value;
  const bookAuthor = event.target["addauthor"].value;
  const bookPages = event.target["addpages"].value;
  let bookRead = event.target["addread"].checked;

  myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, bookRead));
  createBook();
  document.getElementById("form").reset();
  closePopUp();
}

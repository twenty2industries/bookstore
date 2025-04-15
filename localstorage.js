function saveToLocalStorage(){
  localStorage.setItem("books", JSON.stringify(books));
}

function getLocalStorage(){
  localStorage.getItem("book")
}
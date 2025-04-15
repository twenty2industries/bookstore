function saveToLocalStorage(){
  localStorage.setItem("books", JSON.stringify(books));
}

function getLocalStorage(){
  const storedData = localStorage.getItem("books");
  let validStorage = JSON.parse(storedData);
  console.log(validStorage);
  books = validStorage;
} 
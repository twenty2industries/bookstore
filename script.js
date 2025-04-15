let favoriteBooks = [];
let favoriteBooksObj = [];

function init() {
  returnHeader();
  getLocalStorage();
  renderContent();
}

function renderContent() {
  const contentRef = document.getElementById("content-area");
  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
    contentRef.innerHTML += returnContent(bookIndex);
    renderComment(bookIndex);
    fixPrice(bookIndex);
    checkLiked(bookIndex);
  }
}

function saveToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

function getLocalStorage() {
  const storedData = localStorage.getItem("books");
  let validStorage = JSON.parse(storedData);
  if (validStorage == null) {
    validStorage = books;
  }
  books = validStorage;
}

function renderComment(commentsIndex) {
  const commentsRef = document.getElementById(`comments-section-${commentsIndex}`);
  const usernameRef = document.getElementById(`comments-section-${commentsIndex}`);
  for (let i = 0; i < books[commentsIndex].comments.length; i++) {
    usernameRef.innerHTML += returnUsernames(i, commentsIndex);
    commentsRef.innerHTML += returnComments(i, commentsIndex);
  }
}

function toggleLike(likeIndex) {
  const notLikeRef = document.getElementById(`not-like-icon-${likeIndex}`);
  const likeRef = document.getElementById(`like-icon-${likeIndex}`);
  const likeCountRef = document.getElementById(`like-count-${likeIndex}`);
  if (books[likeIndex].liked == true) {
    notLikeRef.classList.remove("d_none");
    likeRef.classList.add("d_none");
    books[likeIndex].likes -= 1;
    books[likeIndex].liked = false;
  } else {
    likeRef.classList.remove("d_none");
    notLikeRef.classList.add("d_none");
    favoriteBooks = books[likeIndex];
    books[likeIndex].likes += 1;
    books[likeIndex].liked = true;
}
  likeCountRef.textContent = books[likeIndex].likes;
  saveToLocalStorage();
}

function checkLiked(likeIndex) {
  const notLikeRef = document.getElementById(`not-like-icon-${likeIndex}`);
  const likeRef = document.getElementById(`like-icon-${likeIndex}`);
  if (books[likeIndex].liked == true) {
    likeRef.classList.remove("d_none");
    notLikeRef.classList.add("d_none");
  }
}

function addUsername(usernameIndex) {
  const usernameRef = document.getElementById(`name-area-${usernameIndex}`);
  const commentRef = document.getElementById(`comment-area-${usernameIndex}`);
  if (usernameRef.value !== "" && commentRef.value !== "") {
    let newUsernameValue = usernameRef.value;
    let newCommentValue = commentRef.value;
    usernameRef.value = "";
    books[usernameIndex].comments.push({name: newUsernameValue, comment: newCommentValue}); 
    const usernamesRef = document.getElementById(`comments-section-${usernameIndex}`);
    const newUsernameHTML = returnUsernames(
      books[usernameIndex].comments.length - 1,
      usernameIndex
    );
    usernamesRef.innerHTML += newUsernameHTML;
    addComment(usernameIndex);
    saveToLocalStorage();
  } else {
    alert("Bitte geben Sie Username & einen Kommentar ein.");
  }
}

function addComment(commentIndex) {
  const commentRef = document.getElementById(`comment-area-${commentIndex}`);
  if (commentRef.value !== "") {
    commentRef.value = "";
    const commentsRef = document.getElementById(`comments-section-${commentIndex}`);
    const newCommentHTML = returnComments(
      books[commentIndex].comments.length - 1,
      commentIndex
    );
    commentsRef.innerHTML += newCommentHTML;
    saveToLocalStorage();
  }
}

function fixPrice(i) {
  const priceRef = document.getElementById(`showPrice-${i}`);
  let price = priceRef.innerHTML.replace(",", ".");
  priceRef.innerHTML = parseFloat(price).toFixed(2).replace(".", ",") + ` EUR`;
}

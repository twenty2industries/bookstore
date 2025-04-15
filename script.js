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
  const likeCountRef = document.getElementById(`like-count-${likeIndex}`); // like-zahl
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
  likeCountRef.textContent = books[likeIndex].likes; // dom aktualisierung das erneute aufrufen von renderContent() sorgt für enorme bugs
}

function addUsername(usernameIndex) {
  const usernameRef = document.getElementById(`name-area-${usernameIndex}`);
  const commentRef = document.getElementById(`comment-area-${usernameIndex}`);
  if (usernameRef.value !== "" && commentRef.value !== "") {
    let newUsernameValue = usernameRef.value;
    let newCommentValue = commentRef.value;
    usernameRef.value = "";
    books[usernameIndex].comments.push({
      name: newUsernameValue,
      comment: newCommentValue,
    }); //hier muss gleich das obejct mit comment gepusht werden um kein neues object für comment in addcomment() zu erstellen
    const usernamesRef = document.getElementById(
      `comments-section-${usernameIndex}`
    );
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
  //das argument kommt aus der function returnContent(i)
  const commentRef = document.getElementById(`comment-area-${commentIndex}`);
  if (commentRef.value !== "") {
    commentRef.value = "";
    const commentsRef = document.getElementById(`comments-section-${commentIndex}`);
    //in returncomments argumente aus addcomment(); books[commentIndex].comments.length - 1 ergibt die index der neuen comments länge -1 weil index start ist 0
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
  let price = priceRef.innerHTML.replace(",", "."); // javascript cant work with komma
  priceRef.innerHTML = parseFloat(price).toFixed(2).replace(".", ",");
}

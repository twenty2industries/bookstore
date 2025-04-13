
function init() {
  returnHeader();
  renderContent();
}

function renderContent() {
  const contentRef = document.getElementById("content-area");
  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
    const book = books[bookIndex];
    contentRef.innerHTML += returnContent(bookIndex);
    renderComment(bookIndex);
    toggleLike(bookIndex);
  }
}

function renderComment(commentsIndex) {
  const commentsRef = document.getElementById(
    `comments-section-${commentsIndex}`
  );
  for (let i = 0; i < books[commentsIndex].comments.length; i++) {
    const element = books[commentsIndex].comments[i];
    commentsRef.innerHTML += returnComments(i, commentsIndex);
  }
}

function toggleLike(likeIndex) {
  const notLikeRef = document.getElementById(`not-like-icon-${likeIndex}`);
  const likeRef = document.getElementById(`like-icon-${likeIndex}`);
  const likeCountRef = document.getElementById(`like-count-${likeIndex}`); // like-zahl - 

  if (notLikeRef.classList.contains("d_none")) {
    notLikeRef.classList.remove("d_none");
    likeRef.classList.add("d_none");
    books[likeIndex].likes -= 1;
  } else {
    likeRef.classList.remove("d_none");
    notLikeRef.classList.add("d_none");
    books[likeIndex].likes += 1;
  }
  likeCountRef.textContent = books[likeIndex].likes; // dom aktualisierung das erneute aufrufen von renderContent() sorgt für enorme bugs
}

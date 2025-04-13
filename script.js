function init() {
  returnHeader();
  renderContent();
}

function renderContent(newCommentIndex) {
  const contentRef = document.getElementById("content-area");
  const commentRef = document.getElementById(`comment-area-${newCommentIndex}`);
  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
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
    commentsRef.innerHTML += returnComments(i, commentsIndex);
  }
}

function toggleLike(likeIndex) {
  const notLikeRef = document.getElementById(`not-like-icon-${likeIndex}`);
  const likeRef = document.getElementById(`like-icon-${likeIndex}`);
  const likeCountRef = document.getElementById(`like-count-${likeIndex}`); // like-zahl

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

function addComment(commentIndex) {
  const commentRef = document.getElementById(`comment-area-${commentIndex}`);
  if (commentRef.value !== "") {
    let valueTest = commentRef.value;
    commentRef.value = "";
    books[commentIndex].comments.push({ comment: valueTest });
    //den neuen kommentar an das bestehende DOM-Element anhängen - löst das problem das der gesamte inhalt gerender wird.
    const commentsRef = document.getElementById(`comments-section-${commentIndex}`);
    const newCommentHTML = returnComments(books[commentIndex].comments.length - 1, commentIndex); //in returncomments argumente aus addcomment(); books[commentIndex].comments.length - 1 ergibt die index der neuen comments länge -1 weil index start ist 0
    commentsRef.innerHTML += newCommentHTML;
  }
}

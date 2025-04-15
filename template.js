let books = [
  {
    name: "Das Schwert der Stille",
    author: "Lian Hearn",
    likes: 1250,
    liked: false,
    price: 19.99,
    publishedYear: 2003,
    genre: "Fantasy",
    img: ["picture1.jpg"],
    comments: [
      {
        name: "Leser123",
        comment:
          "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.",
      },
      {
        name: "Bookworm84",
        comment:
          "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.",
      },
      {
        name: "FantasyFanatic",
        comment:
          "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte.",
      },
      {
        name: "SciFiGuru",
        comment:
          "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren.",
      },
    ],
  },
  {
    name: "Der kleine Hobbit",
    author: "J.R.R. Tolkien",
    likes: 1520,
    liked: false,
    price: 22.95,
    publishedYear: 1937,
    genre: "Fantasy",
    img: ["picture2.jpg"],
    comments: [
      {
        name: "LeserPeter",
        comment:
          "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.",
      },
      {
        name: "BookLover21",
        comment:
          "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.",
      },
      {
        name: "FantasyNerd",
        comment:
          "Fantastische Welten und epische Abenteuer - genau mein Geschmack!",
      },
      {
        name: "SciFiEnthusiast",
        comment:
          "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.",
      },
      {
        name: "ReadingAddict",
        comment:
          "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.",
      },
    ],
  },
  {
    name: "Das Rätsel der Zeit",
    author: "Alexander Weiss",
    likes: 750,
    liked: false,
    price: 18.0,
    publishedYear: 2020,
    genre: "Science-Fiction",
    img: ["picture3.jpg"],
    comments: [
      {
        name: "BuchKenner",
        comment:
          "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat.",
      },
      {
        name: "LeseWurm",
        comment:
          "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben.",
      },
    ],
  },
  {
    name: "Im Schatten des Mondes",
    author: "Philipp Silber",
    likes: 890,
    liked: false,
    price: 12.3,
    publishedYear: 2022,
    genre: "Science-Fiction",
    img: ["picture4.jpg"],
    comments: [
      {
        name: "BücherLiebhaber",
        comment:
          "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd.",
      },
      {
        name: "Leseratte",
        comment:
          "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat.",
      },
    ],
  },
  {
    name: "Jenseits der Sterne",
    author: "Oliver Schwarz",
    likes: 1450,
    liked: false,
    price: 21.0,
    publishedYear: 2015,
    genre: "Science-Fiction",
    img: ["picture5.jpg"],
    comments: [
      {
        name: "Leser123",
        comment:
          "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat.",
      },
    ],
  },
  {
    name: "Das verborgene Königreich",
    author: "Elena Gold",
    likes: 920,
    liked: false,
    price: 17.5,
    publishedYear: 2020,
    genre: "Fantasy",
    img: ["picture6.jpg"],
    comments: [
      {
        name: "Bookworm92",
        comment:
          "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.",
      },
    ],
  },
];

function returnHeader() {
  const headerLogoRef = document.getElementById("header-logo");
  return (headerLogoRef.innerHTML = `<img class="headerLogo" src="logo/bookstoreLogo.png" alt="headerlogo">`);
}

function returnContent(i) {
  return `<div id="book-display-${i}" class="bookDisplay">
            <div id="book-title-${i}" class="bookTitle">${books[i].name}</div>
            <div id="book-picture-${i}" class="bookPicture"><img src="img/${books[i].img}" class="bookImgs"></div>
            <div id="book-price-likes-${i}" class="bookPriceLikes"><span id="showPrice-${i}">${books[i].price} </span><div class="likes"> <span id="like-count-${i}">${books[i].likes}</span><img src="assets/asset_not_liked.png" class="likeIcon" id="not-like-icon-${i}" onclick="toggleLike(${i})"><img src="assets/asset_liked.png" class="likeIcon d_none" onclick="toggleLike(${i})" id="like-icon-${i}">
</div></div>
            <div id="book-info-${i}" class="bookInfo"><span>Author: ${books[i].author}</span><span>Published year: ${books[i].publishedYear}</span><span>Genre: ${books[i].genre}</span></div>
            <div id="title-comments-${i}" class="titleComments">
            <div id="comments-section-${i}" class="commentsSection">
            <h2>Kommentarsektion</h2>
                </div>
      <div id="input-area.${i}" class="inputArea">
      <input type="text" class="commentArea" id="name-area-${i}" placeholder="Schreibe einen Username">
      <input type="text" class="commentArea" id="comment-area-${i}" placeholder="Schreibe einen Kommentar"><button onclick="addUsername(${i})" class="submitButton">senden</button>
    </div>
  </div>
</div>`;
}

function returnUsernames(indexPosition, usernamePosition) {
  return `
    <div id="show-username-${indexPosition}" class="showUsername"><b>Username</b>: ${books[usernamePosition].comments[indexPosition].name}</div>
    `;
}

function returnComments(indexPosition, commentsPosition) {
  return `
    <div id="show-comments-${indexPosition}" class="showComments"><b>Kommentar:</b> ${books[commentsPosition].comments[indexPosition].comment}</div>
    `;
}


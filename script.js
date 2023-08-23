fetch("https://striveschool-api.herokuapp.com/books")
  .then((responseObj) => responseObj.json())
  .then((bookObj) => {
    const row = document.querySelector(".row");

    bookObj.forEach((book) => {
      const bookName = book.title;
      const col = document.createElement("div");
      col.className = "col";
      col.innerHTML = `<div class="card">
        <img class="card-img-top" src=${book.img}>
        <div class="card-body">
        <h4 class="card-title">${bookName}</h4>
        <p class="card-text">${book.price}$</p>
        <button class="btn btn-primary" onclick="this.parentElement.parentElement.parentElement.style.display='none'; ">Scarta</button>
        <button class="btn btn-primary" onclick="aggiungi(event)">Aggiungi al Carello</button>
        <button class="btn btn-primary">Rimuovi Dal Carello</button>

        </div>
        </div>`;

      row.appendChild(col);
    });
  })
  .catch((error = console.log(error)));

function aggiungi(event) {
  const book = document.parentElement;
  console.log(book);
}

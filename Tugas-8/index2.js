var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

var i = 0;

function book(time) {
  if (i < books.length && time >= 0) {
    i++;
    readBooksPromise(time, books[i - 1])
      .then((time) => book(time))
      .catch((time) => console.log("Sisa: " + time));
  }
}

book(9000);

// readBooksPromise(10000, books[0])
//   .then((time) => readBooksPromise(time, books[1]))
//   .then((time) => readBooksPromise(time, books[2]))
//   .then((time) => readBooksPromise(time, books[3]))
//   .catch((time) => `Sisa waktu: ${time}`);

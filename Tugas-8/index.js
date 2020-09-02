var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

var i = 0;

// Recursive
function book(time, books) {
  readBooks(time, books[i], function (get) {
    i++;
    if (books[i] != undefined) {
      book(get, books);
    }
  });
}
book(10000, books);

// Callback Hell
// readBooks(10000, books[0], (time) => {
//   readBooks(time, books[1], (time) => {
//     readBooks(time, books[2], (time) => {
//       readBooks(time, books[3], (e) => readBooks);
//     });
//   });
// });

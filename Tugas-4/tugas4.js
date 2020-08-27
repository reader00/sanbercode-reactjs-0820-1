// ------------------------------ Soal 1 ------------------------------

var i = 2;
var txt1 = "I love coding";
var txt2 = "I will become a frontend developer";

console.log("LOOPING PERTAMA");
while (i <= 20) {
  console.log(i + " - " + txt1);
  i += 2;
}

i = 20;
console.log("LOOPING KEDUA");
while (i >= 2) {
  console.log(i + " - " + txt2);
  i -= 2;
}

// ------------------------------ Soal 2 ------------------------------
console.log();
for (var j = 1; j <= 20; j++) {
  if (j % 3 == 0 && j % 2 != 0) {
    console.log(j + ". I Love Coding");
  } else {
    if (j % 2 == 0) {
      console.log(j + ". Berkualitas");
    } else {
      console.log(j + ". Santai");
    }
  }
}

// ------------------------------ Soal 3 ------------------------------
var term = "";
console.log();
for (var k = 1; k <= 7; k++) {
  term += "#";
  console.log(term);
}

// ------------------------------ Soal 4 ------------------------------

console.log();
var kalimat = "saya sangat senang belajar javascript";
console.log(kalimat.split(" "));

// ------------------------------ Soal 5 ------------------------------

console.log();
var daftarBuah = [
  "2. Apel",
  "5. Jeruk",
  "3. Anggur",
  "4. Semangka",
  "1. Mangga",
];
daftarBuah.sort();
for (var l = 0; l < daftarBuah.length; l++) {
  console.log(daftarBuah[l]);
}

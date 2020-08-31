// ---------------------------------- Soal 1 ----------------------------------

const luasLingkaran = (jari) => Math.PI * jari * jari;
let kelLingkaran = (jari) => 2 * Math.PI * jari;

console.log(luasLingkaran(14));
console.log(kelLingkaran(14));

// ---------------------------------- Soal 2 ----------------------------------
console.log();
let kalimat = "";

const tambahKata = (...kata) => {
  kata.forEach((e) => {
    kalimat += `${e} `;
  });
};

tambahKata("saya", "adalah", "seorang", "frontend", "developer");

console.log(kalimat);

// ---------------------------------- Soal 3 ----------------------------------

console.log();
const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName() {
      console.log(`${firstName} ${lastName}`);
    },
  };
};

newFunction("William", "Imoh").fullName();

// ---------------------------------- Soal 4 ----------------------------------

console.log();
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!",
};

let { firstName, lastName, destination, occupation, spell } = newObject;
console.log(firstName, lastName, destination, occupation, spell);

// ---------------------------------- Soal 5 ----------------------------------

console.log();
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];

const combined = [...west, ...east];

console.log(combined);

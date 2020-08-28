// ------------------------------- Soal 1 -------------------------------

function halo() {
  return "Halo Sanbers!";
}
console.log(halo());

// ------------------------------- Soal 2 -------------------------------

console.log();
function kalikan(a, b) {
  return a * b;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

// ------------------------------- Soal 3 -------------------------------

console.log();
function introduce(name, age, address, hobby) {
  return (
    "Nama saya " +
    name +
    ", umur saya " +
    age +
    " tahun, alamat saya di " +
    address +
    ", dan saya punya hobby, yaitu " +
    hobby +
    "!"
  );
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

// ------------------------------- Soal 4 -------------------------------

console.log();
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];
var myObject = {
  nama: arrayDaftarPeserta[0],
  jenis_kelamin: arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  tahun_lahir: arrayDaftarPeserta[3],
};

console.log(myObject);

// ------------------------------- Soal 5 -------------------------------

console.log();
var buah1 = {
  nama: "strawberry",
  warna: "merah",
  ada_bijinya: false,
  harga: 9000,
};

var buah2 = {
  nama: "jeruk",
  warna: "oranye",
  ada_bijinya: true,
  harga: 8000,
};

var buah3 = {
  nama: "Semangka",
  warna: "Hijau & Merah",
  ada_bijinya: true,
  harga: 10000,
};

var buah4 = {
  nama: "Pisang",
  warna: "Kuning",
  ada_bijinya: false,
  harga: 5000,
};

var myArray = [];
myArray.push(buah1, buah2, buah3, buah4);

console.log(myArray[0]);

// ------------------------------- Soal 6 -------------------------------

console.log();
var dataFilm = [];

function tambahData(nama, durasi, genre, tahun) {
  dataFilm.push({
    nama: nama,
    durasi: durasi,
    genre: genre,
    tahun: tahun,
  });
}

tambahData("Loop", "2 Jam 3 Menit", "Fantasi, Aksi", 2012);
tambahData("Source Code", "1 Jam 53 Menit", "Fantasi, Fiksi", 2011);
tambahData("Edge of Tomorrow", "2 Jam 12 Menit", "Fantasi, Aksi", 2014);

console.log(dataFilm);

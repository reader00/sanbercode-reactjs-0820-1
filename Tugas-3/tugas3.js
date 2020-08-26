// -------------------------- Soal 1 --------------------------

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var fin = `${kataPertama} ${kataKedua[0]
  .toUpperCase()
  .concat(kataKedua.substring(1))} ${kataKetiga} ${kataKeempat.toUpperCase()}`;

console.log("Tugas 1");
console.log(fin + "\n");

// -------------------------- Soal 2 --------------------------

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var int1 = parseInt(kataPertama);
var int2 = parseInt(kataKedua);
var int3 = parseInt(kataKetiga);
var int4 = parseInt(kataKeempat);
var fin = int1 + int2 + int3 + int4;

console.log("Tugas 2");
console.log(`${int1} + ${int2} + ${int3} + ${int4} = ` + fin + "\n");

// -------------------------- Soal 3 --------------------------

var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14); // do your own!
var kataKetiga = kalimat.substring(15, 18); // do your own!
var kataKeempat = kalimat.substring(19, 24); // do your own!
var kataKelima = kalimat.substring(25); // do your own!

console.log("Tugas 3");
console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima + "\n");

// -------------------------- Soal 4 --------------------------
console.log("Tugas 4");
var nilai = 78;

if (nilai >= 80) {
  console.log("Indeks: A");
} else if (nilai >= 70 && nilai < 80) {
  console.log("Indeks: B");
} else if (nilai >= 60 && nilai < 70) {
  console.log("Indeks: C");
} else if (nilai >= 50 && nilai < 60) {
  console.log("Indeks: D");
} else {
  console.log("Indeks: E");
}

// -------------------------- Soal 5 --------------------------

var tanggal = 7;
var bulan = 8;
var tahun = 1945;

switch (bulan) {
  case 1:
    bulan = "Januari";
    break;
  case 2:
    bulan = "Februari";
    break;
  case 3:
    bulan = "Maret";
    break;
  case 4:
    bulan = "April";
    break;
  case 5:
    bulan = "Mei";
    break;
  case 6:
    bulan = "Juni";
    break;
  case 7:
    bulan = "Juli";
    break;
  case 8:
    bulan = "Agustus";
    break;
  case 9:
    bulan = "September";
    break;
  case 10:
    bulan = "Oktober";
    break;
  case 11:
    bulan = "November";
    break;
  case 12:
    bulan = "Desember";
    break;
  default:
}
console.log("\nTugas 5");
console.log(`${tanggal} ${bulan} ${tahun}`);

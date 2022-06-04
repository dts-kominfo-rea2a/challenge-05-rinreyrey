const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (listNama, callbackSort) => {
  return callbackSort(listNama);
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (listNama) => {
  listNama.sort();
  let no = 0;
  const arraynya = [];
  while (no < listNama.length) {
    let word = listNama[no];
    arraynya.push(word);
    no++;
  }
  return arraynya;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (listNama) => {
  listNama.sort().reverse();
  let no = 0;
  const arraynya = [];
  while (no < listNama.length) {
    let word = listNama[no];
    arraynya.push(word);
    no++;
  }
  return arraynya;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};

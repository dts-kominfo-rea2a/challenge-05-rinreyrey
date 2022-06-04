const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (listNama, callbackSort) => {
  const sortnya = callbackSort(listNama);
  let no = 0;
  const arraynya = [];
  while (no < sortnya.length) {
    let word = sortnya[no];
    no += 1;
    let words = no + ". " + word;
    arraynya.push(words);
  }
  return arraynya;


};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (listNama) => {
  listNama.sort();
  return listNama;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (listNama) => {
  listNama.sort().reverse();
  return listNama;
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

function trierCroissant(tab) {
  return tab.sort((a, b) => a - b);
}

// test
console.table(trierCroissant([5, 1, 6, 3, 4, 2]));

function trierDecroissant(tab) {
  return [...tab].sort((a, b) => a - b);
}

// test
console.table(trierCroissant([5, 1, 6, 3, 4, 2]));

/**
 * sort avec les chaines de caractères
 */
const liste = ["Yahya", "Hafsa", "Alioune", "Hajar", "Houda"];
console.table(liste.sort());

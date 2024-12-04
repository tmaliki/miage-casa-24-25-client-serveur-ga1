function trierTableau(tab, ordre = "asc") {
  for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab.length - i - 1; j++) {
      if ((ordre === "asc" && tab[j] > tab[j + 1]) || (ordre === "desc" && tab[j] < tab[j + 1])) {
        const temp = tab[j];
        tab[j] = tab[j + 1];
        tab[j + 1] = temp;
      }
    }
  }
  return tab;
}

// test
console.log(trierTableau([4, 6, 1, 5, 2, 7, 3], "asc")); // [1, 2, 3, 4, 5, 6, 7]
console.log(trierTableau([15, 3, 6, 10, 13, 11], "desc")); // [15, 13, 11, 10, 6, 3]

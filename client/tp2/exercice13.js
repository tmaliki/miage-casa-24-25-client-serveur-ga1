function triBulle(tableau) {
  let size = tableau.length;

  for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (tableau[j] > tableau[j + 1]) {
        // échange des éléments
        [tableau[j], tableau[j + 1]] = [tableau[j + 1], tableau[j]];
      }
    }
    console.log(`Etape ${i + 1} : ${tableau}`);
  }

  return tableau;
}

// test
console.table(triBulle([5, 8, 4, 2, 3, 6, 1, 7]));

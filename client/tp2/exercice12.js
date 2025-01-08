/**
 * @param {array} tableau
 * @param {string} order = 'asc' or 'desc'
 * @returns {array}
 */
function triParSelection(tableau, order = "asc") {
  let echanges = 0; // compteur d'échnage

  for (let i = 0; i < tableau.length - 1; i++) {
    let minIndex = i;

    // trouver l'indice de l'élement le plus petit
    for (let j = i + 1; j < tableau.length; j++) {
      if ((order === "asc" && tableau[j] < tableau[minIndex]) || (order === "desc" && tableau[j] > tableau[minIndex])) {
        minIndex = j;
      }
    }

    // Echange si nécessaire
    if (minIndex !== i) {
      //   const temp = tableau[i];
      //   tableau[i] = tableau[minIndex];
      //   tableau[minIndex] = temp;
      // OU
      [tableau[i], tableau[minIndex]] = [tableau[minIndex], tableau[i]];

      // incrementation de l'échange
      echanges++;
    }
  }

  console.log(`Nombre d'échange : ${echanges}`);
  return tableau;
}

// test
console.table(triParSelection([2, 4, 6, 1, 9, 8]));
console.table(triParSelection([2, 4, 6, 1, 9, 8], "desc"));

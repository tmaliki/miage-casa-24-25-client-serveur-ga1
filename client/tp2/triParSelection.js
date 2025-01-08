/**
 * @param {array} tableau
 * @returns {array}
 */
function triParSelection(tableau) {
  let echanges = 0; // compteur d'échnage

  for (let i = 0; i < tableau.length - 1; i++) {
    let minIndex = i;

    // trouver l'indice de l'élement le plus petit
    for (let j = i + 1; j < tableau.length; j++) {
      if (tableau[j] < tableau[minIndex]) {
        minIndex = j;
      }
    }

    // Echange si nécessaire
    if (minIndex !== i) {
      const temp = tableau[i];
      tableau[i] = tableau[minIndex];
      tableau[minIndex] = temp;

      // incrementation de l'échange
      echanges++;
    }
  }
}

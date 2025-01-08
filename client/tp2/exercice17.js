function sommeBoucle(tab) {
  let somme = 0;
  for (let i = 0; i < tab.length; i++) {
    somme += tab[i];
  }
  return somme;
}

/**
 *  Solution avec reduce
 */
function somme(tab) {
  return tab.reduce((accummulateur, element) => {
    return accummulateur + element;
  }, 0);
}

// test
const tableau = [5, 4, 2, 6, 8];
console.log(`Somme de ${tableau} = ${somme(tableau)}`);

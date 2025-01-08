function trouverPremierPairBoucle1(tab) {
  for (i = 0; i < tab.length; i++) {
    if (tab[i] % 2 === 0) return tab[i];
  }
  return null;
}

function trouverPremierPairBoucle2(tab) {
  let pair = null;
  for (i = 0; i < tab.length; i++) {
    if (tab[i] % 2 === 0) {
      pair = tab[i];
      break;
    }
  }
  return pair;
}

function trouverPremierPairBoucle3(tab) {
  for (i = 0; i < tab.length; i++) {
    if (tab[i] % 2 !== 0) {
      continue;
    }
    return tab[i];
  }
  return null;
}

// console.log(trouverPremierPairBoucle3([5, 4, 6, 3]));

/**
 * solution avec find : qui retourne le 1er element qui verifie la condition
 */
function trouverPremierPair(tab) {
  return tab.find((elt, index) => {
    return elt % 2 === 0;
  });
}

// test
console.log(trouverPremierPair([5, 4, 6, 3]));

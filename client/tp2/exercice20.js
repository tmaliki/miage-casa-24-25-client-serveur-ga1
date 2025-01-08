function compterOccurenceBoucle(tab, element) {
  let compteur = 0;
  for (let i = 0; i < tab.length; i++) {
    if (element === tab[i]) {
      compteur++;
    }
  }
  return compteur;
}

/**
 * solution avec reduce
 */

function compterOccurence(tab, element) {
  return tab.reduce((compteur, currentElt) => {
    return element === currentElt ? compteur + 1 : compteur;
  }, 0);
}

// test
console.log(compterOccurence([5, 4, 2, 4, 8, 7, 4], 4));

// tri par insertion dans l'ordre croissant (du plus petit au plus grand)
function triParInsertionAsc(tab) {
  for (let i = 1; i < tab.length; i++) {
    let current = tab[i]; // élement à déplacer
    let j = i - 1;

    // déplacer les éléments plus grands que 'current' vers la droite
    while (j >= 0 && tab[j] > current) {
      tab[j + 1] = tab[j];
      j--;
    }

    // placer l'élement à sa position correcte
    tab[j + 1] = current;
  }
  return tab;
}

// test
console.table(triParInsertionAsc([5, 3, 4, 7, 8, 1, 2, 9]));

// tri par insertion dans l'ordre décroissant (du plus grand au plus petit)
function triParInsertionDesc(tab) {
  for (let i = 1; i < tab.length; i++) {
    let current = tab[i]; // élement à déplacer
    let j = i - 1;

    // déplacer les éléments plus petit que 'current' vers la droite
    while (j >= 0 && tab[j] < current) {
      tab[j + 1] = tab[j];
      j--;
    }

    // placer l'élement à sa position correcte
    tab[j + 1] = current;
  }
  return tab;
}

// test
console.table(triParInsertionDesc([5, 3, 4, 7, 8, 1, 2, 9]));

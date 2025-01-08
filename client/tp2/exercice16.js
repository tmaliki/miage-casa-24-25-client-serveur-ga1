/**
 * Solution avec la boucle for
 */
function carresBoucle(tab) {
  let newTab = [];
  for (let i = 0; i < tab.length; i++) {
    const elt = tab[i];
    // const carreElt = elt ** 2;
    // const carreElt = elt * elt;
    const carreElt = Math.pow(elt, 2);

    // ajoutons le carre de chaque element dans newTab
    newTab.push(carreElt);
  }
  return newTab;
}

// test
// console.table(carresBoucle([5, 2, 1, 6, 9]));

/**
 * Solution avec la fonction native de js : map
 */
function carresAvecMap(tab) {
  return tab.map((elt, index) => {
    return Math.pow(elt, 2);
  });
}

// test
// console.table(carresAvecMap([5, 2, 1, 6, 9]));

function carresAvecMap2(tab) {
  return tab.map(traitementMap);
}

function traitementMap(elt, index) {
  return Math.pow(elt, 2);
}

// test
// console.table(carresAvecMap2([5, 2, 1, 6, 9]));

/**
 * Solution avec la fonction native de js : forEach
 */
function carresAvecForEach(tab) {
  let newTab = [];

  tab.forEach((elt, index) => {
    newTab.push(Math.pow(elt, 2));
  });

  return newTab;
}

// test
// console.table(carresAvecForEach([5, 2, 1, 6, 9]));

let newTabs = [];
function carresAvecForEach2(tab) {
  tab.forEach(traitementForEach);
  return newTabs;
}

function traitementForEach(elt, index) {
  newTabs.push(Math.pow(elt, 2));
}

// // test
console.table(carresAvecForEach2([5, 2, 1, 6, 9]));

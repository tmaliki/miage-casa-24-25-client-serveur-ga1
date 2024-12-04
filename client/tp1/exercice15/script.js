/***
 * déclaration d'un tableau
 */
let tab = [5, 1, 9, 3];
// console.log(tab);
// console.table(tab);
// console.log(tab[2]);

const tab2 = ["a", "b", "c", "d", "e"];

const tab3 = new Array(7, 5, 9, 10, 12);
// console.table(tab3);

/***
 * Resolution de l'exercice 15
 */

const fruits = ["Orange", "Kiwi", "Mangue", "Banane", "Pomme"];

const tailleFruits = fruits.length;
console.log(tailleFruits);

// La boucle for
console.log("***** Utilisation de la boucle for");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// La boucle while
console.log("***** Utilisation de la boucle while");
let j = 0;
while (j < fruits.length) {
  console.log(fruits[j]);
  j++;
}

// La boucle do while
console.log("***** Utilisation de la boucle do while");
let z = 0;
while (z < fruits.length) {
  console.log(fruits[z]);
  z++;
}

// la boucle for of
for (const item of fruits) {
  console.log(item);
}

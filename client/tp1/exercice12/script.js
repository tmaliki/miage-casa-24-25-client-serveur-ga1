/**
 * Utilisation de la fonction préfinie prompt de js
 */
// const prenom = prompt("Veuillez saisir votre prénom :");
// console.log(prenom);
// // type de la variable prenom
// console.log(typeof prenom);

/***
 * Solution de l'exercice 12
 */
const nbr1 = prompt("Veuillez saisir le premier nombre :");
const nbr2 = prompt("Veuillez saisir le deuxième nombre :");

if (nbr1 > 0 && nbr2 > 0) {
  console.log("Les deux nombre sont positifs");
} else if (nbr1 < 0 || nbr2 < 0) {
  console.log("Au moins l'un des deux nombres est negatif");
} else {
  console.log("Au moins l'un des deux nombres est nul");
}

"use strict";

const utilisateur = {
  nom: "Alice",
  age: 30,
  adresse: "casablanca, oasis",
};

console.log(utilisateur);
// essayons de supprimer la propriété "adresse"
delete utilisateur.adresse;
console.log(utilisateur);

/**
 * cas d'une fonction
 */

function maFonction() {
  console.log("Ceci est une fonction");
}

// essayons de supprimer la fonction
// delete maFonction;
// on peut pas supprimer une fonction en mode strict

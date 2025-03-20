"use strict";

function addition(a, a) {
  return a + a;
}

// sans le mode strict pas d'erreur
console.log(addition(9, 6)); // 12

// en mode strict le code va nous 
// afficher une erreur d'interdiction d'utiuliser des doublons

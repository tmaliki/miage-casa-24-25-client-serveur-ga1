// solution avec if else
function comparaisonChaine1(ch1, ch2) {
  if (ch1 === ch2) {
    return `Les chaines sont identiques`;
  } else {
    return `Les chaines ne sont pas identiques`;
  }
}

// solution en utilisant l'operateur ternaire
function comparaisonChaine2(ch1, ch2) {
  return ch1 === ch2 ? `Les chaines sont identiques` : `Les chaines ne sont pas identiques`;
}

/**
 * Bonus
 */
// transformation de chaine en minuscules et majuscules
let chaine1 = "Ma chaine";

// transformons la variable chaine1 en minuscules
console.log(chaine1.toLowerCase());

// transformons la variable chaine1 en majuscules
console.log(chaine1.toUpperCase());

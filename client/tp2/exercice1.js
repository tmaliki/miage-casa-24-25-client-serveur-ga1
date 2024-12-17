// console.log("Hello world!");
// let chaine = "ete";
// console.log(chaine[0]);
// console.log(chaine[1]);
// console.log(chaine[2]);

/**
 * exercice de logique sur un palindrome
 */
function inverseChaine(chaine) {
  let chaineInverse = "";
  for (let i = chaine.length - 1; i >= 0; i--) {
    chaineInverse += chaine[i];
  }

  return chaineInverse;
}

// test de la fonction inverseChaine
// console.log(inverseChaine("Hello"));

function palindromeSimple(chaine) {
  if (chaine == inverseChaine(chaine)) {
    return `La ${chaine} est un palindrome`;
  } else {
    return `La ${chaine} n'est pas un palindrome`;
  }
}

// test de la fonction palindromeSimple
console.log(palindromeSimple("hello"));
console.log(palindromeSimple("ete"));
console.log(palindromeSimple("éte"));
console.log(palindromeSimple("Ete"));

/**
 * Solution de l'exercice 1 avec les fonction prédéfinies de JS
 */

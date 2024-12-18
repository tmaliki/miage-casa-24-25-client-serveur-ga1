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
// console.log(palindromeSimple("hello"));
// console.log(palindromeSimple("ete"));
// console.log(palindromeSimple("éte"));
// console.log(palindromeSimple("Ete"));

/**
 * Solution de l'exercice 1 avec les fonction prédéfinies de JS
 */
function estPalindrome(chaine) {
  // formattons la chaine tout en miniscule*
  const chaineMinuscule = chaine.toLowerCase();
  console.log(chaineMinuscule);

  // utilisation de la fonction replace (en supprimant les espaces dans la chaine)
  const chaineNettoyee = chaineMinuscule.replace(/[^a-z0-9]/g, "");
  console.log(chaineNettoyee);

  // utilisation de la fonction split
  const chaineSplitee = chaineNettoyee.split("");
  console.log(chaineSplitee);

  // l'inverse du tableau retourner par la fonction split
  const chaineInverseEnTab = chaineSplitee.reverse();
  console.log(chaineInverseEnTab);

  // utilisation de la fonction join pour rattacher les élement du tableau
  const chaineInverse = chaineInverseEnTab.join("");
  console.log(chaineInverse);

  // resultat de retour
  return chaineInverse === chaineNettoyee;
}

// test de la fonction estPalindrome
// estPalindrome("Bonjour tout le monde");
console.log(estPalindrome("Bonjour tout le monde"));
console.log(estPalindrome("élu Par Cette CrapUle"));
console.log(estPalindrome("Eté"));
console.log(estPalindrome("eté"));

// test d'utilisation de la fonction split
// console.log("Hello world".split(""));

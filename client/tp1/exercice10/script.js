function verifierAge(age) {
  // solution 1
  // if (age >= 18) {
  //   return "Accès autorisé !";
  // } else {
  //   return "Accès interdit !";
  // }

  // solution 2 : operateur ternaire
  return age >= 18 ? "Accès autorisé !" : "Accès interdit !";
}

// test de la fonction
console.log(verifierAge(12));
console.log(verifierAge(18));
console.log(verifierAge(20));

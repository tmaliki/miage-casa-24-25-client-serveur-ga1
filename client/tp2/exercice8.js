// utilisation de Math.random (permet de générer un nombre alératoire inclus entre 0 et 1
// console.log(Math.random());

// génération de d'un nombre aléatoire de deux 2 chiffres
// const nbrAleDeuxChiffres = Math.random() * 100;
// console.log(nbrAleDeuxChiffres);
// console.log(Math.floor(nbrAleDeuxChiffres));

/**
 * Solution de l'exercice 8
 */
function nombreAleatoire(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);

  // génération du nombre aleatoire
  const nbrAleatoireInit = Math.random();
  console.log(nbrAleatoireInit);

  // génération du aleatoire entre le min et le max
  const genNbrMinMax = nbrAleatoireInit * (max - min + 1) + min;
  console.log(genNbrMinMax);

  // retourner la partie entière (chiffre sans la virgule) du nombre aléatoire entre min et max
  return Math.floor(genNbrMinMax);
}

// test
console.log(nombreAleatoire(0, 5));
console.log(nombreAleatoire(1, 10));
console.log(nombreAleatoire(10, 100));

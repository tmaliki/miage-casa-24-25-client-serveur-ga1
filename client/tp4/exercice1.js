// activation du mode strict en js
"use strict";

// let x; // première solution déclaration de la variable de façon globale

function testStrictMode() {
  //   x = 10; // déclarez correctement cette variable pour éviter une erreur
  // deuxième solution déclaration de la variable directement dans la fonction
  //   const x = 10;
  //   var x = 10;
  let x = 10;
  console.log(x);
}

testStrictMode();

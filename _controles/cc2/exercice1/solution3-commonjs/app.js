const { addition, soustraction, multiplication, division, genererNombreAleatoire } = require("./calculs.js");
try {
  console.log("Addition:", addition(45.6, 4.4));
  console.log("Soustraction:", soustraction(60, 20));
  console.log("Multiplication:", multiplication(9, 5));
  console.log("Division:", division(36, 6));
  console.log("Division:", division(145, 0));
  console.log("Nombre aléatoire entre 1 et 10:", genererNombreAleatoire(1, 10));
  console.log("Nombre aléatoire entre 1 et 100:", genererNombreAleatoire(1, 100));
} catch (error) {
  console.log("Erreur:", error.message);
}

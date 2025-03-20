const op = require("./operations.js");

try {
  console.log("Addition de (5 + 3)", op.addition(5, 3));
  console.log("Soustraction de (5 - 3)", op.soustraction(5, 3));
  console.log("Multiplication de (5 x 3)", op.multiplication(5, 3));

  // pour la division
  console.log("Division de (8 / 2)", op.division(8, 2));
  console.log("Division de (8 / 0)", op.division(8, 0));
} catch (error) {
  console.error("Erreur détecté : ", error.message);
}

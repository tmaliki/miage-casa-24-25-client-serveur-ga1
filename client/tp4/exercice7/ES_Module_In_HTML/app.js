import { testFunc, addition, multiplication, soustraction, division } from "./operations.js";

console.log(testFunc());

try {
  console.log("Addition de (5 + 3)", addition(5, 3));
  console.log("Soustraction de (5 - 3)", soustraction(5, 3));
  console.log("Multiplication de (5 x 3)", multiplication(5, 3));

  // pour la division
  console.log("Division de (8 / 2", division(8, 2));
  console.log("Division de (8 / 0", division(8, 0));
} catch (error) {
  console.error("Erreur détecté : ", error.message);
}

// première façon de rendre une fonction exportable
export function testFunc() {
  console.log("My first module function");
}

function addition(a, b) {
  return a + b;
}

function soustraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    throw new Error("Division par zéro impossible !");
  }
  return a / b;
}

// Déclaration des fonctions exportable
export { addition, soustraction, multiplication, division };

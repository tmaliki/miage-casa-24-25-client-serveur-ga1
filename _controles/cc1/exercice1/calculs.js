function addition(n1, n2) {
  return n1 + n2;
}

function soustraction(n1, n2) {
  return n1 + n2;
}

function multiplication(n1, n2) {
  return n1 * n2;
}

function division(n1, n2) {
  if (n2 == 0) return "Division par zéro impossible !";
  return n1 / n2;
}

// test
console.log(addition(45.6, 4.4));
console.log(soustraction(60, 20));
console.log(multiplication(9, 5));
console.log(division(36, 6));
console.log(division(145, 0));

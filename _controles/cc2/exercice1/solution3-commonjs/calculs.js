function addition(n1, n2) {
  return n1 + n2;
}

function soustraction(n1, n2) {
  return n1 - n2;
}

function multiplication(n1, n2) {
  return n1 * n2;
}

function division(n1, n2) {
  if (n2 === 0) {
    throw new Error("Division par zéro");
  }
  return n1 / n2;
}

function genererNombreAleatoire(min, max) {
  if (min >= max) {
    throw new Error("Le minimum doit être inférieur au maximum");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  addition,
  soustraction,
  multiplication,
  division,
  genererNombreAleatoire,
};

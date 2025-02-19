export function addition(n1, n2) {
  return n1 + n2;
}

export function soustraction(n1, n2) {
  return n1 - n2;
}

export function multiplication(n1, n2) {
  return n1 * n2;
}

export function division(n1, n2) {
  if (n2 === 0) return "Division par zéro";
  return n1 / n2;
}

export function genererNombreAleatoire(min, max) {
  if (min >= max) return "Le min doit être inférieur au max";
  const nbrAlea = Math.random();
  const nbrAleaMinMax = nbrAlea * (max - min + 1) + min;
  return Math.floor(nbrAleaMinMax);
}

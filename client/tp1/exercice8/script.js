// solution avec if else
function estPair2(nbr) {
  if (nbr % 2 === 0) {
    return `${nbr} est pair`;
  } else {
    return `${nbr} est impair`;
  }
}

// solution en utilisant l'operateur ternaire
function estPair3(nbr) {
  return nbr % 2 === 0 ? `${nbr} est pair` : `${nbr} est impair`;
}

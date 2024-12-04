// exemple pour les débutant
function estPairDebutant(nbr) {
  if (nbr % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// exemple pour les pro
function estPair(nbr) {
  return nbr % 2 === 0;
}

// test avec estPairDebutant
console.log(estPairDebutant(5));

// test avec estPair
console.log(estPair(16));

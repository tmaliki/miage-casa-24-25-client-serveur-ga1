function pairImpair(nbr) {
  return nbr % 2 === 0 ? `${nbr} est pair` : `${nbr} est impair`;
}

// test
console.log(pairImpair(5));
console.log(pairImpair(8));

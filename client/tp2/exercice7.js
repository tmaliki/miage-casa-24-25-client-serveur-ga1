function arrondirDeuxDecimals(nbr, nbrChiffreApres = 2) {
  return parseFloat(nbr.toFixed(nbrChiffreApres));
}

// test
console.log(arrondirDeuxDecimals(25.2531));
console.log(arrondirDeuxDecimals(5.9356));

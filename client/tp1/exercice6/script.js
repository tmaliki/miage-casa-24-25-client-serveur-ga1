function comparaison(a, b) {
  if (a > b) {
    return a + " est plus grand que " + b;
  } else if (a < b) {
    return `${a} est plus petit que ${b}`;
  } else {
    return `${a} est ${b} sont égaux`;
  }
}

// test
console.log(comparaison(87, 5));
console.log(comparaison(6, 20));
console.log(comparaison(9, 9));

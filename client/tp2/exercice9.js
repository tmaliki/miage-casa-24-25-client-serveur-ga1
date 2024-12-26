function maxEtMin(tableau) {
  return {
    max: Math.max(...tableau),
    min: Math.max(...tableau),
  };
}

// test
console.log(maxEtMin([4, 2, 6, 9, 3]));
console.log(maxEtMin([10, 65, 147, 9, 56, 84]));

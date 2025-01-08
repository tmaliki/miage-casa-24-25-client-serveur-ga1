function filterPairs(tab) {
  return tab.filter((elt) => elt % 2 === 0);
}

// test
console.table(filterPairs([5, 4, 6, 7, 8, 2, 9, 20]));

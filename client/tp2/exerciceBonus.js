const pieces = [1, 2, 5, 10, 20];

// Solution 1 : avec push et reverse
function minCoins1(montant) {
  let tabCoins = [];
  for (let i = pieces.length - 1; i >= 0; i--) {
    const result = Math.floor(montant / pieces[i]);
    tabCoins.push(result);
    montant = montant % pieces[i];
  }

  console.log(tabCoins);
  return tabCoins.reverse();
}

// Solution 2 : avec unshift
function minCoins2(montant) {
  let tabCoins = [];
  for (let i = pieces.length - 1; i >= 0; i--) {
    const result = Math.floor(montant / pieces[i]);
    tabCoins.unshift(result);
    montant = montant % pieces[i];
  }
  return tabCoins;
}

// test
console.log(minCoins1(150));
console.table(minCoins2(38));

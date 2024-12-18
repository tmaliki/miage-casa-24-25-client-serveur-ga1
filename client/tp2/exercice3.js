function motPlusLong(phrase) {
  const mots = phrase.replace(/[^a-zA-Z0-9\s]/g, "").split(" ");
  console.log(mots);

  // calculons la taille de chaque mot du tableau mots
  const tabTailleMot = mots.map((mot) => mot.length);
  console.log(tabTailleMot);

  // recupérons la taille maximale
  const longueurMax = Math.max(...tabTailleMot);
  console.log(longueurMax);

  return mots.filter((mot) => mot.length === longueurMax);
}

// test
// motPlusLong("Bonjour tout le monde");
console.log(motPlusLong("Bonjour tout le monde"));

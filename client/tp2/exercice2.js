function compterVoyelles(chaine) {
  const voyelles = "aeiouy";

  // formatter la chaine en miniscule
  const chaineMiniscule = chaine.toLowerCase();
  console.log(chaineMiniscule);

  // utilisation de la fonction split
  const chaineSplitee = chaineMiniscule.split("");
  console.log(chaineSplitee);

  // recuperons le tableau des caractères qui sont des voyelles
  const filterChaine = chaineSplitee.filter((char) => voyelles.includes(char));
  console.log(filterChaine);

  return filterChaine.length;
}

// test
console.log(compterVoyelles("Bonjour"));
console.log(compterVoyelles("Hello world!"));

function remplacerEspaces(chaine) {
  //   return chaine.replaceAll(" ", "-");
  return chaine.replace(/ /g, "-");
}

// test
console.log(remplacerEspaces("Bonjour, comment allez-vous"));

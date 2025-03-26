// Création d'une promesse
const maPromesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesse résolue avec succès !");
  }, 3000); // 3000ms => 3s
});

// Exécution et affichage du resultat
maPromesse.then((message) => {
  console.log(message);
});

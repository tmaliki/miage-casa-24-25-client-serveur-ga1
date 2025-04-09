// Création d'une promesse qui se resout après 2s
const maPromesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Succès !");
  }, 2000);
});

// test : gestion de la promesse
maPromesse
  .then((result) => {
    console.log("Résultat : ", result);
  })
  .catch((err) => {
    console.error("Erreur détectée : ", err);
  })
  .finally(() => {
    console.log("Fin de l'exercice 16");
  });

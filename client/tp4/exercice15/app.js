// Creation d'une pormesse qui se rejette après 1 seconde
const maPromesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Erreur !");
  }, 3000); // 1 seconde = 1000 milisecondes
});

// Test : gestion de l'erreur avec catch()
maPromesse
  .then((result) => {
    console.log("Succès : ", result);
  })
  .catch((erreur) => {
    console.error("Erreur détectée : ", erreur);
  });

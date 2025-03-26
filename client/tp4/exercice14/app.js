// Première promesse : Résolue après 2 secondes avec la valeur "Première promesse"
const promesse1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Première promesse résolue");
  }, 2000);
});

// Deuxième promesse : Résolue après 3 secondes avec la valeur "Deuxième promesse"
const promesse2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Deuxième promesse résolue");
  }, 3000);
});

// Deuxième promesse : Résolue après 1 seconde avec la valeur "Troisième promesse"
const promesse3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Troisième promesse résolue");
  }, 1000);
});

// Test et exécution (Utilisation de Promise.all)
Promise.all([promesse1, promesse2, promesse3])
  .then((resultats) => {
    console.log("Toutes les promesses sont résolues : ", resultats);
  })
  .catch((err) => {
    console.error("Une des promesses a échoué : ", err);
  });

// Première promesse ; retourne 5 après 2 secondes
const promesse1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

// Deuxième promesse : double la valeur reçue
const promesse2 = (valeur) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(valeur * 2);
    }, 1000);
  });
};

// Test et exécution des deux promesses (chaînage des promesses)
promesse1
  .then((reponse1) => {
    console.log("Première promesse résolue avec : ", reponse1);
    return promesse2(reponse1); // Appelle de deuxième promesse
  })
  .then((reponse2) => {
    console.log("Deuxième promesse résolue avec : ", reponse2);
  })
  .catch((err) => {
    console.error("Erreur : ", err);
  });

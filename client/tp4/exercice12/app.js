// Déclaration de la varibale de test
let success = true; // changez à false pour tester le rejet

// création de la promesse
const maPromesse = new Promise(maPromesseFn);
function maPromesseFn(resolve, reject) {
  setTimeout(() => {
    if (success) {
      resolve("Promesse résolue.");
    } else {
      reject("Promesse rejetée.");
    }
  }, 2000);
}

// Test et Exécution de la promesse
maPromesse
  .then((message) => {
    console.log("Succès : ", message);
  })
  .catch((err) => {
    console.error("Erreur : ", err);
  });

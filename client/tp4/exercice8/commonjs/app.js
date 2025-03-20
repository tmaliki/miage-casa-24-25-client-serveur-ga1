// solution 1
// const ut = require("./utilitaires.js");

// try {
//   console.log(ut.genererNombreAleatoire(1, 10));
//   console.log(ut.genererNombreAleatoire(50, 500));
//   console.log(ut.genererNombreAleatoire(6, 6));
// } catch (error) {
//   console.error("Erreur : ", error.message);
// }

// solution 2
const { genererNombreAleatoire } = require("./utilitaires.js");

try {
  console.log(genererNombreAleatoire(1, 10));
  console.log(genererNombreAleatoire(50, 500));
  console.log(genererNombreAleatoire(6, 6));
} catch (error) {
  console.error("Erreur : ", error.message);
}

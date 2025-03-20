import genererNombreAleatoire from "./utilitaires.js";

try {
  console.log(genererNombreAleatoire(1, 10));
  console.log(genererNombreAleatoire(50, 500));
  console.log(genererNombreAleatoire(6, 6));
} catch (error) {
  console.error("Erreur : ", error.message);
}

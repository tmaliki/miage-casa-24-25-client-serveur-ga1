const { geometrie } = require("./formules.js");

try {
  console.log("Aire d'un carré de côte 6 : ", geometrie.aireCarre(6));
  console.log("Perimetre d'un carré de côte 6 : ", geometrie.perimetreCarre(6));

  console.log("Aire d'un carré de côte -9 : ", geometrie.aireCarre(-9));
} catch (error) {
  console.error("Erreur : ", error.message);
}

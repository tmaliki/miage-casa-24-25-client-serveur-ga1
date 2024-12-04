function determinerSaison(mois) {
  switch (mois) {
    case 12:
    case 1:
    case 2:
      console.log("Hiver");
      break;

    case 3:
    case 4:
    case 5:
      console.log("Printemps");
      break;

    case 6:
    case 7:
    case 8:
      console.log("Été");
      break;

    case 9:
    case 10:
    case 11:
      console.log("Automne");
      break;

    default:
      console.log("Veuillez entrer un mois valide (entre 1 et 12).");
      return;
  }
}

// Test : demander un mois et afficher la saison correspondante
const mois = parseInt(prompt("Entrez un numéro de mois (1 à 12) :"));
determinerSaison(mois);

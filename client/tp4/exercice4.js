function afficherLongueur(chaine) {
  try {
    console.log("Longueur : " + chaine.length);
  } catch (err) {
    // console.log("Error : ", err);
    console.error("Error name: ", err.name); // Le nom de l'erreur
    console.error("Error messgae : ", err.message); // Le message de l'erreur
    console.error("Error stack : ", err.stack); // Le détails de l'erreur
    console.error("Error cause : ", err.cause); // La cause de l'erreur, disponible dans ES2022
  }
}

// test
afficherLongueur("Bonjour tout le monde"); // pas d'erreur
afficherLongueur(); // capture d'une erreur ici

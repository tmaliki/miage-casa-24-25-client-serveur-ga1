function lireFichier(monFichier) {
  try {
    if (monFichier !== "file.txt") {
      throw new Error("Fichier introuvable !");
    }
    console.log("Lecture du fichier...");
  } catch (error) {
    console.error("Erreur : ", error.message);
  } finally {
    console.log("Fermeture du fichier.");
  }
}

// test
lireFichier("file.txt"); // Pas d'erreur, mais le fichier est fermé
lireFichier("autre.txt"); // Erreur, mais le fichier sera fermé

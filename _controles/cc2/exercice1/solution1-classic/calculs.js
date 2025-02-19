// Fonction nommée pour l'addition
function addition(n1, n2) {
  try {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
      throw new Error("Les arguments doivent être des nombres.");
    }
    return n1 + n2;
  } catch (error) {
    console.error("Erreur dans addition:", error.message);
  }
}

// Fonction anonyme pour la soustraction
const soustraction = function (n1, n2) {
  try {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
      throw new Error("Les arguments doivent être des nombres.");
    }
    return n1 - n2;
  } catch (error) {
    console.error("Erreur dans soustraction:", error.message);
  }
};

// Fonction anonyme pour la multiplication
const multiplication = function (n1, n2) {
  try {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
      throw new Error("Les arguments doivent être des nombres.");
    }
    return n1 * n2;
  } catch (error) {
    console.error("Erreur dans multiplication:", error.message);
  }
};

// Fonction fléchée pour la division
const division = (n1, n2) => {
  try {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
      throw new Error("Les arguments doivent être des nombres.");
    }
    if (n2 === 0) {
      throw new Error("La division par zéro est impossible.");
    }
    return n1 / n2;
  } catch (error) {
    console.error("Erreur dans division:", error.message);
  }
};

// Fonction fléchée pour générer un nombre aléatoire entre min et max
const genererNombreAleatoire = (min, max) => {
  try {
    if (typeof min !== "number" || typeof max !== "number") {
      throw new Error("Les arguments doivent être des nombres.");
    }
    if (min >= max) {
      throw new Error("Le min doit être inférieur à max.");
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } catch (error) {
    console.error("Erreur dans genererNombreAleatoire:", error.message);
  }
};

// Tests des fonctions
console.log("Addition:", addition(45.6, 4.4));
console.log("Soustraction:", soustraction(60, 20));
console.log("Multiplication:", multiplication(9, 5));
console.log("Division:", division(36, 6));
console.log("Division par zéro:", division(145, 0)); // Message d'erreur
console.log("Nombre aléatoire entre 1 et 10 :", genererNombreAleatoire(1, 10)); // Un nombre entre 1 et 10
console.log("Nombre aléatoire entre 1 et 100 :", genererNombreAleatoire(1, 100)); // Un nombre entre 1 et 100
console.log("Nombre aléatoire avec erreur:", genererNombreAleatoire(10, 5)); // Message d'erreur

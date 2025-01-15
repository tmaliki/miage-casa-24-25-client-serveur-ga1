// Déclaration d'un classe
class Personne {
  #age; // propriété privée

  // le constructeur : pour initialiser la classe lors de l'instanciation
  constructor(n, a) {
    this.nom = n;
    this.#age = a;
  }

  // Méthode pour obtenir l'age
  getAge() {
    return this.#age;
  }

  // Méthode pour définir un nouvel age
  setAge(nouvelAge) {
    if (nouvelAge >= 0) {
      this.#age = nouvelAge;
    } else {
      console.error("Erreur : L'age doit être un nombre positif");
    }
  }

  // ajout d'une méthode à la classe
  afficherDetails() {
    console.log(`Bonjour je m'appelle ${this.nom} et j'ai ${this.getAge()} ans`);
  }
}

// instantiation et test
const pers = new Personne("Maliki", 32);
pers.afficherDetails(); // affichage

// Modification de l'age
pers.setAge(33);
pers.afficherDetails(); // affichage

// cas d'une valeur de l'age négatif
pers.setAge(-5);

// Déclaration d'un classe
class Personne {
  // le constructeur : pour initialiser la classe lors de l'instanciation
  constructor(n, a) {
    this.nom = n;
    this.age = a;
  }

  // ajout d'une méthode à la classe
  afficherDetails() {
    console.log(`Bonjour je m'appelle ${this.nom} et j'ai ${this.age} ans`);
    // console.log("Bonjour je m'appelle" + this.nom + " et j'ai" + this.age + " ans");
  }
}

// création d'une instance de la classe Personne
const alice = new Personne("Alice", 30);
alice.afficherDetails();

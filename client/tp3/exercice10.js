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

// classe Etudiant qui hérite de la classe Personne
class Etudiant extends Personne {
  constructor(n, a, niv) {
    super(n, a);
    this.niveau = niv;
  }

  // Polymorphisme : surcharge de la classe Etudiant
  afficherDetails() {
    console.log(`Bonjour je m'appelle ${this.nom}, j'ai ${this.age} ans et je suis en ${this.niveau}`);
  }
}

// création d'une instance de la classe
const oumaima = new Etudiant("Oumaima", 30, "TS2 DI");
oumaima.afficherDetails();

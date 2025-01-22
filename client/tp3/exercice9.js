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

  // data = { nom: "Maliki", age: 30 }
  static creerPersonne(data) {
    // return new Personne(data.nom, data.age);
    return new this(data.nom, data.age);
  }

  static creerPersonne2(nomPers, agePers) {
    return new this(nomPers, agePers);
  }
}

// test : Utilisation de méthode statique
const objet = { nom: "John", age: 31 };
const john = Personne.creerPersonne(objet);
john.afficherDetails();

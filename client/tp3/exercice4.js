// Déclaration d'un classe
class Personne {
  // le constructeur : pour initialiser la classe lors de l'instanciation
  constructor(n, a) {
    this.nom = n;
    this.age = a;
  }
}

// création d'une instance de la classe Personne
const personne1 = new Personne("Alice", 30);
console.log(personne1);
console.log("Nom : " + personne1.nom);
console.log("Age : " + personne1.age + " ans");

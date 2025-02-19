import { Livre } from "./livre.js";
import { Bibliotheque } from "./bibliotheque.js";

/**
 * Phase de test
 */
// instanciation de la classe Bibliotheque
let bibliotheque = new Bibliotheque();

/**
 * ajout des livres
 */
console.log("---- Ajout des livres ----");

// livre 1
const livre1 = new Livre("9780545010221", "Harry Potter", "J.K. Rowling", "Fantasy");
bibliotheque.ajouterLivre(livre1);

// livre 2
const livre2 = new Livre("9782266285038", "Le Seigneur des Anneaux", "J.R.R. Tolkien", "Fantasy");
bibliotheque.ajouterLivre(livre2);

// livre 3
const livre3 = new Livre("9780451524935", "Les supers héros", "George Orwell", "Science Fiction");
bibliotheque.ajouterLivre(livre3);

// livre 4
const livre4 = new Livre("9783125577974", "Le Petit Prince", "Antoine de Saint-Exupéry", "Littérature");
bibliotheque.ajouterLivre(livre4);

console.log("---- Afficher tous les livres ----");
bibliotheque.afficherLivres();

console.log("\n---- Rechercher par auteur 'Rowling' ----");
console.log(bibliotheque.rechercherParAuteur("Rowling"));

console.log("\n---- Rechercher par titre 'Harry' ----");
console.log(bibliotheque.rechercherParTitre("Harry"));

console.log("\n---- Rechercher par ISBN '9780451524935' ----");
console.log(bibliotheque.rechercherParISBN("9780451524935"));

console.log("\n---- Supprimer le livre avec l'ISBN '9780545010221' ----");
bibliotheque.supprimerLivre("9780545010221");
bibliotheque.afficherLivres();

console.log("\n---- Trier par titre ----");
bibliotheque.trierParTitre();
bibliotheque.afficherLivres();

console.log("\n---- Trier par auteur ----");
bibliotheque.trierParAuteur();
bibliotheque.afficherLivres();

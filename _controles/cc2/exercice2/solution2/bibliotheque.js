export class Bibliotheque {
  constructor() {
    this.livres = [];
  }

  ajouterLivre(livre) {
    this.livres.push(livre);
  }

  modifierLivre(newInfoLivre) {
    const livreIndex = this.livres.findIndex((livre) => livre.isbn === newInfoLivre.isbn);
    if (livreIndex !== -1) {
      this.livres[livreIndex] = { ...this.livres[livreIndex], ...newInfoLivre };
    }
  }

  supprimerLivre(isbn) {
    this.livres = this.livres.filter((livre) => livre.isbn !== isbn);
  }

  rechercherParISBN(isbn) {
    return this.livres.find((livre) => livre.isbn === isbn);
  }

  afficherLivres() {
    // console.table(this.livres);
    this.livres.forEach((livre) => console.log(livre));
  }

  // Bonus
  rechercherParTitre(titre) {
    return this.livres.filter((livre) => livre.titre.toLowerCase().includes(titre.toLowerCase()));
  }

  rechercherParAuteur(auteur) {
    return this.livres.filter((livre) => livre.auteur.toLowerCase().includes(auteur.toLowerCase()));
  }

  trierParTitre() {
    this.livres.sort((a, b) => a.titre.localeCompare(b.titre));
  }

  trierParAuteur() {
    this.livres.sort((a, b) => a.auteur.localeCompare(b.auteur));
  }
}

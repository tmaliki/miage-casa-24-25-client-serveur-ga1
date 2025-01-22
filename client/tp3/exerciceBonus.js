// classe Personnne
class Personne {
  constructor(nom, prenom, dateNaiss) {
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaiss = dateNaiss;
  }

  afficherInfo() {
    console.log("***************Infos Personne***************");
    console.log("Nom : " + this.nom);
    console.log("Prénom : " + this.prenom);
    console.log("Date naissance : " + this.dateNaiss);
    console.log("******************************************");
  }
}

// classe Auteur
class Auteur extends Personne {
  constructor(nom, prenom, dateNaiss, nationalite) {
    super(nom, prenom, dateNaiss);
    this.nationalite = nationalite;
  }

  // Polymorphisme
  afficherInfo() {
    console.log("***************Infos Auteur***************");
    console.log("Nom : " + this.nom);
    console.log("Prénom : " + this.prenom);
    console.log("Date naissance : " + this.dateNaiss);
    console.log("Nationalité : " + this.nationalite);
    console.log("******************************************");
  }

  // méthode pour ajouter un auteur
  ajouter(auteur) {
    //
  }

  // méthode pour modifier un auteur
  modifier(auteur) {
    //
  }

  // méthode pour lister les livres d'un auteur
  listeLivresEcrites(bibliotheque) {
    //
  }
}

// classe Abonne
class Abonne extends Personne {
  constructor(nom, prenom, dateNaiss, matricule, email) {
    super(nom, prenom, dateNaiss);
    this.matricule = matricule;
    this.email = email;
    this.listeEmprunts = [];
  }

  // Polymorphisme
  afficherInfo() {
    console.log("****************Infos Abonne****************");
    console.log("Nom : " + this.nom);
    console.log("Prénom : " + this.prenom);
    console.log("Date naissance : " + this.dateNaiss);
    console.log("Matricule : " + this.matricule);
    console.log("Adresse e-mail : " + this.email);
    console.log("******************************************");
  }

  // méthode pour emprunter un livre
  emprunterLivre(livre, bibliotheque) {
    //
  }

  // méthode pour rendre un livre
  rendreLivre(livre, bibliotheque) {
    //
  }

  // méthode pour afficher les livres emprunter d'un abonné
  afficherLivresEmpruntees() {
    //
  }
}

// classe Livre
class Livre {
  constructor(isbn, titre, auteurs, anneePub, qteDispo) {
    this.isbn = isbn;
    this.titre = titre;
    this.auteurs = auteurs;
    this.anneePub = anneePub;
    this.qteDispo = qteDispo;
  }

  afficherInfo() {
    console.log("***************Infos Livre*****************");
    console.log("ISBN : " + this.isbn);
    console.log("Titre : " + this.titre);
    console.log("Auteurs : " + this.auteurs);
    console.log("Année de publication : " + this.anneePub);
    console.log("Quantité disponible : " + this.qteDispo);
    console.log("******************************************");
  }

  // méthode pour vérifier la disponibilité
  estDisponible() {
    //
  }
}

// classe Emprunt
class Emprunt {
  constructor(livre, abonne, dateEmprunt, dateRetour) {
    this.livre = livre;
    this.abonne = abonne;
    this.dateEmprunt = dateEmprunt;
    this.dateRetour = dateRetour;
  }

  afficherDetailsEmprunt() {
    console.log("***************Détail Emprunt *****************");
    console.log("Livre : " + this.livre);
    console.log("Abonne : " + this.abonne);
    console.log("Date emprunt : " + this.dateEmprunt);
    console.log("Date retour : " + this.dateRetour);
    console.log("**********************************************");
  }

  // méthode pour vérifier si un livre emprunter est est en retard
  estEnRetard() {
    //
  }
}

// classe Bibliotheque (classe principale)
class Bibliotheque {
  constructor(nom, adresse) {
    this.nom = nom;
    this.adresse = adresse;
    this.listeLivres = [];
    this.listeAbonnes = [];
    this.listeEmprunts = [];
  }

  // méthode pour ajouter un Livre
  ajouterLivre(livre) {
    //
  }

  // méthode pour supprimer un Livre
  supprimerLivre(isbn) {
    //
  }

  // méthode pour modifier un Livre
  modifierLivre(livre) {
    //
  }

  // méthode pour ajouter un Abonne
  ajouterAbonne(abonne) {
    //
  }

  // méthode pour supprimer un Abonne
  supprimerAbonne(matricule) {
    //
  }

  // méthode pour modifier un Abonne
  modifierAbonne(abonne) {
    //
  }

  // méthode pour rechercher un Livre par son titre
  rechercherLivre(titre) {
    //
  }

  afficherListeLivres() {
    //
  }

  afficherListeAbonnes() {
    //
  }

  aficherLivreParAuteur(auteur) {
    //
  }
}

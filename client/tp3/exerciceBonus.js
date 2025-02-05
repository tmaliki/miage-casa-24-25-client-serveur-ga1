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
  constructor(nom, prenom, dateNaiss, nationalite, matricule) {
    super(nom, prenom, dateNaiss);
    this.nationalite = nationalite;
    this.matricule = matricule;
  }

  // Polymorphisme
  afficherInfo() {
    console.log("***************Infos Auteur***************");
    console.log("Matricule : " + this.matricule);
    console.log("Nom : " + this.nom);
    console.log("Prénom : " + this.prenom);
    console.log("Date naissance : " + this.dateNaiss);
    console.log("Nationalité : " + this.nationalite);
    console.log("******************************************");
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
    console.log("Matricule : " + this.matricule);
    console.log("Nom : " + this.nom);
    console.log("Prénom : " + this.prenom);
    console.log("Date naissance : " + this.dateNaiss);
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
  afficherLivresEmpruntes() {
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
  constructor(livre, abonne) {
    this.livre = livre;
    this.abonne = abonne;
    this.dateEmprunt = new Date();
    this.dateRetour = null;
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
    this.listeAuteurs = [];
    this.listeLivres = [];
    this.listeAbonnes = [];
    this.listeEmprunts = [];
  }

  // méthode pour ajouter un Auteur
  ajouterAuteur(auteur) {
    this.listeAuteurs.push(auteur);
    console.log(`Auteur ${auteur.nom} ${auteur.prenom} (${auteur.matricule}) ajouté avec succès`);
  }

  // méthode pour modifier un Auteur
  modifierAuteur(auteur) {
    const index = this.listeAuteurs.findIndex((a) => a.matricule === auteur.matricule);
    if (index !== -1) {
      this.listeAuteurs[index] = auteur;
      console.log(`Auteur ${auteur.nom} ${auteur.prenom} (${auteur.matricule}) modifié avec succès`);
    } else {
      console.log("Auteur non trouvé !");
    }
  }

  // méthode pour ajouter un Livre
  ajouterLivre(livre) {
    this.listeLivres.push(livre);
    console.log(`Livre ${livre.titre} (${livre.isbn}) ajouté avec succès`);
  }

  // méthode pour supprimer un Livre
  supprimerLivre(isbn) {
    const findLivre = this.listeLivres.find((l) => l.isbn === isbn);
    if (findLivre) {
      this.listeLivres = this.listeLivres.filter((l) => l.isbn !== isbn);
      console.log(`Livre ${findLivre.titre} (${findLivre.isbn}) supprimé avec succès`);
    } else {
      console.log("Livre non trouvé !");
    }
  }

  // méthode pour modifier un Livre
  modifierLivre(livre) {
    const index = this.listeLivres.findIndex((a) => a.isbn === livre.isbn);
    if (index !== -1) {
      this.listeLivres[index] = livre;
      console.log(`Livre ${livre.titre} (${livre.isbn}) modifié avec succès`);
    } else {
      console.log("Livre non trouvé !");
    }
  }

  // méthode pour ajouter un Abonne
  ajouterAbonne(abonne) {
    this.listeAbonnes.push(abonne);
    console.log(`Abonné ${abonne.nom} ${abonne.prenom} (${abonne.matricule}) ajouté avec succès`);
  }

  // méthode pour supprimer un Abonne
  supprimerAbonne(matricule) {
    const findAbonne = this.listeAbonnes.find((a) => a.matricule === matricule);
    if (findAbonne) {
      this.listeAbonnes = this.listeAbonnes.filter((a) => a.matricule !== matricule);
      console.log(`Abonne ${findAbonne.nom} ${findAbonne.prenom} (${findAbonne.matricule}) supprimé avec succès`);
    } else {
      console.log("Abonne non trouvé !");
    }
  }

  // méthode pour modifier un Abonne
  modifierAbonne(abonne) {
    const index = this.listeAbonnes.indexOf(abonne);
    if (index !== -1) {
      this.listeAbonnes[index] = abonne;
      console.log(`Abonné ${abonne.nom} ${abonne.prenom} (${abonne.matricule}) modifié avec succès`);
    } else {
      console.log("Abonné non trouvé !");
    }
  }

  // méthode pour rechercher un Livre par son titre
  rechercherLivre(titre) {
    //
  }

  afficherListeAuteurs() {
    console.log(`\n****** Liste des auteurs de la bibliotheque ${this.nom} ******`);
    console.table(this.listeAuteurs);
    console.log(`***************************************************************`);
  }

  afficherListeLivres() {
    console.log(`\n****** Liste des livres de la bibliotheque ${this.nom} ******`);
    console.table(this.listeLivres);
    console.log(`************************************************************`);
  }

  afficherListeAbonnes() {
    console.log(`\n***** Liste des abonnes de la bibliotheque ${this.nom} ******`);
    console.table(this.listeAbonnes);
    console.log(`**************************************************************`);
  }

  aficherLivreParAuteur(auteur) {
    //
  }
}

/**
 * Phase de test
 */

// création d'une instance de la classe Personne
const p1 = new Personne("TCHEROU", "Maliki", "26-01-1992");
p1.afficherInfo();

// création d'une instance de la classe Bibliotheque
const b1 = new Bibliotheque("Bibliothèque nationale", "Al Saoud");

// création d'un objet de la classe Auteur
const auteur1 = new Auteur("Hugo", "Victoreee", "24-01-1820", "Français", "AU-00001");
const auteur2 = new Auteur("Flaubert", "Gustave", "24-01-1859", "Français", "AU-00002");
const auteur3 = new Auteur("Zola", "Emile", "24-01-1859", "Français", "AU-00003");
const auteur4 = new Auteur("Camus", "Albert", "24-01-1859", "Français", "AU-00004");
const auteur5 = new Auteur("Molière", "Molière", "24-01-1859", "Français", "AU-00005");
const auteur6 = new Auteur("Shoukri", "Mohamed", "24-01-1859", "Marocain-Algérien", "AU-00006");

console.log(auteur1);

// ajout des auteurs dans la Bibliotheque
b1.ajouterAuteur(auteur1);
b1.ajouterAuteur(auteur2);
b1.ajouterAuteur(auteur6);
b1.ajouterAuteur(auteur4);
b1.ajouterAuteur(auteur5);

// affichages de la liste des auteurs
// console.table(b1.listeAuteurs);
b1.afficherListeAuteurs();

// modification des informations d'un auteur
const editAuteur1 = new Auteur("Hugo", "Victor", "24-01-1820", "Français", "AU-00001");
b1.modifierAuteur(editAuteur1);
b1.afficherListeAuteurs();

// Ajout des livres
const livre1 = new Livre("LIV-00001", "Les misérables", ["AU-00001"], "1862", 50);
const livre2 = new Livre("LIV-00002", "Notre-Dame de Paris", ["AU-00001"], "1831", 20);
const livre3 = new Livre("LIV-00003", "Le dernier jour d'un condamné", ["AU-00001"], "1829", 100);
b1.ajouterLivre(livre1);
b1.ajouterLivre(livre2);
b1.ajouterLivre(livre3);
b1.afficherListeLivres();

const etudiant = {
  prenom: "Maliki",
  nom: "TCHEROU",
  age: 32,
  filiere: "Developpement Informatique",
  adresse: "12 rue des Lilas, Casablanca",

  sePresenter: function () {
    console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans, ` + `je suis étudiant à MIAGE CASA en ${this.filiere} et j’habite au ${this.adresse}.`);
  },
};

// test
etudiant.sePresenter();

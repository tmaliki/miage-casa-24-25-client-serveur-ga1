let personne = {
  nom: "TCHEROU",
  prenom: "Maliki",
  age: 32,
  message: function () {
    console.log(`Bonjour je m'appelle ${this.prenom} ${this.nom} et j'ai  ${this.age} ans`);
  },
};

// affichage du message
personne.message();

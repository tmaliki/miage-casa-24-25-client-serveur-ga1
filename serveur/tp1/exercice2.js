// importation du module readline avec du commonjs
const readline = require("readline");

// création de l'interface de lecture
const rlApp = readline.createInterface({
  input: process.stdin, // entrée
  output: process.stdout, // sortie
});

// test de l'interface (découverte)
// rlApp.question("Saisissez votre nom : ", (nom) => {
//   console.log(nom);
//   rlApp.close(); // pour quitter l'interface
// });

/**
 * Solution de l'exercice
 * item : {name: "Nom", phome: "06"}
 */
let contacts = [];

// fonction pour ajouter un contact
function addContacts() {
  rlApp.question("\nSaisissez le nom du contact : ", (name) => {
    rlApp.question("\nSaisissez le n° de téléphone : ", (phone) => {
      contacts.push({ name, phone });
      console.log("Contact ajouté avec succès.");
      showContacts();
    });
  });
}

// fonction pour afficher la liste des contacts
function showContacts() {
  console.log("----------------------------------------------------");
  console.log("*************** Liste de contacts ******************");
  console.log("----------------------------------------------------");
  if (contacts.length > 0) {
    // solution 1
    console.table(contacts);

    // solution 2
    // contacts.forEach((c, i) => {
    //   console.log(`${i + 1} - ${c.name} - ${c.phone}`);
    // });
  } else {
    console.log("Aucun contact trouvé !");
  }

  // réaffichage du menu
  main();
}

// fonction pour rechercher un contact
function searchContact() {
  rlApp.question("\nSaisissez le nom du contact que vous cherchez : ", (name) => {
    const contact = contacts.find((c) => c.name === name);
    if (contact) {
      console.log("-------------------------------------------------------");
      console.log("****************** Info du contact ********************");
      console.log("-------------------------------------------------------");
      console.log("Nom du contact  :", contact.name);
      console.log("N° de téléphone :", contact.phone);
    } else {
      console.log("\nContact non trouvé !");
    }

    // réaffichage du menu
    main();
  });
}

// fonction pour quitter l'application
function exitApp() {
  console.log("\nMerci d'avoir utilisé votre App, au revoir !");
  rlApp.close();
}

// fonction principale
function main() {
  console.log("\nChoisissez une option en saisissant le chiffre correspondant :");
  console.log("1 - Ajouter un conctact");
  console.log("2 - Afficher la liste des conctacts");
  console.log("3 - Chercher un contact");
  console.log("4 - Quitter l'application");

  rlApp.question("\nTapez votre choix : ", (choix) => {
    switch (choix) {
      case "1":
        addContacts();
        break;

      case "2":
        showContacts();
        break;

      case "3":
        searchContact();
        break;

      case "4":
        exitApp();
        break;

      default:
        console.log("Choix invalide, veuillez choisir une option valide !");
        main();
    }
  });
}

// exécution de la fonction principale
console.log("**********************************************");
console.log("********* Bienvenu dans App Contacts *********");
console.log("**********************************************");
main();

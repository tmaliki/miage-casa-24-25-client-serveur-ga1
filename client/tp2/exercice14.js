function trierParAge(tabObjet) {
  let size = tabObjet.length;

  for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (tabObjet[j].age > tabObjet[j + 1].age) {
        // échange des éléments
        const temp = tabObjet[j];
        tabObjet[j] = tabObjet[j + 1];
        tabObjet[j + 1] = temp;
      }
    }
  }

  return tabObjet;
}

// test
const etudiants = [
  { nom: "Dupont", prenom: "John", email: "dupont@example.com", age: 17 },
  { nom: "Durant", prenom: "Elise", email: "elise@example.com", age: 20 },
  { nom: "Jackson", prenom: "Dom", email: "dom@example.com", age: 30 },
  { nom: "Jackie", prenom: "Chan", email: "jackie@example.com", age: 23 },
];

console.table(trierParAge(etudiants));

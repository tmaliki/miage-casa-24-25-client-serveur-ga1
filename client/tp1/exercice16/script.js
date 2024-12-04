// déclaration d'un tableau vide
let tableau = [];
// console.log(tableau);

// ajoutons 3 élements au tableau
tableau.push(1, 2, 3);
// console.log(tableau);

// suprimer le 2ème du tableau
const extract = tableau.splice(1, 1);
console.log(extract); // [2]
console.log(tableau); // [1, 3]

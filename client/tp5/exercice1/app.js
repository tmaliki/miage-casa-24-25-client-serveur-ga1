// Découverte du DOM

// window est le super objet en js et contient d'autres objets comme
// console.log(window.alert("Bonjour tout le monde"));
// console.log(alert("Bonjour tout le monde"));

// console.log(window.document);
// console.log(document);

/**
 * Solution de l'exercice
 */

// Selection de l'élement p dont id = idP
const eltP = document.getElementById("idP");
// console.log(eltP);

// solution 1
function changerTexte() {
  eltP.innerText = "Bonjour tout le monde, je viens de changer le texte (s1)";
}

// solution 2

// Difference entre querySelector et querySelectorAll
// const eltPFirst = document.querySelector("p");
// console.log(eltPFirst);

// const eltPAll = document.querySelectorAll("p");
// console.log(eltPAll);
// console.log(eltPAll[0]); // pour récupérer le premier element p

// sélection de l'élement bouton 2
const eltBtn = document.querySelector("#btnId");
// console.log(eltBtn);

eltBtn.addEventListener("click", () => {
  eltP.innerText = "Bonjour tout le monde, je viens de changer le texte (s2)";
});

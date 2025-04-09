// Sélection des elements
const eltP = document.querySelector("#idP");
// console.log(eltP);
// eltP.style.color = "red";

const eltBtns = document.querySelectorAll("button");
// console.log(eltBtns);

// écoute d'évenement de click sur le 1er bouton pour changer la taille
eltBtns[0].addEventListener("click", () => {
  eltP.style.fontSize = "20px";
});

// écoute d'évenement de click sur le 2ème bouton pour changer la couleur
eltBtns[1].addEventListener("click", () => {
  eltP.style.color = "red";
});

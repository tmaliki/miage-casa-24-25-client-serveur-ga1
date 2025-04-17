const btn = document.querySelector("button");
const span = document.querySelector("#nbrClic");

let compteur = 0;
// Ecoute d'evenement de clmick sur le bouton
btn.addEventListener("click", () => {
  compteur++;
  span.textContent = compteur;
});

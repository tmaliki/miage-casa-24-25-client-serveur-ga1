// Récuperation des elements

const btnElt = document.querySelector("#btnId");
const inputElt = document.getElementById("pwdId");
// console.log(inputElt);

// Ecoute de l'evenement de click sur le bouton
btnElt.addEventListener("click", () => {
  if (inputElt.type === "password") {
    inputElt.type = "text";
    btnElt.textContent = "Masquer";
  } else {
    inputElt.type = "password";
    btnElt.textContent = "Afficher";
  }
});

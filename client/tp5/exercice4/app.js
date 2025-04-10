// Récuperation des élements
const eltNom = document.querySelector("#nomId");
const eltPrenom = document.querySelector("#prenomId");
const btnElt = document.querySelector("#btnId");
const msgErrElt = document.querySelector("#msgErreur");

// Ecoute d'evenement de click sur le bouton
btnElt.addEventListener("click", () => {
  const nom = eltNom.value;
  const prenom = eltPrenom.value;

  // La fonction trim() permet de nettoyer le text en supprimant les espaces
  if (nom.trim() === "" || prenom.trim() === "") {
    msgErrElt.textContent = "Veuillez remplir tous les champs.";
    msgErrElt.style.color = "red";
    //  ou
    // alert("Veuillez remplir tous les champs.");
  } else {
    msgErrElt.textContent = "Formulaire validé";
    msgErrElt.style.color = "#00cc00";
    //  ou
    // alert("Formulaire validé");
  }
});

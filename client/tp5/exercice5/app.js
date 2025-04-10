function verifyForm() {
  const nom = document.querySelector("#nom").value.trim();
  const prenom = document.querySelector("#prenom").value.trim();
  const email = document.querySelector("#email").value.trim();
  const nomError = document.getElementById("msgErrNom");
  const prenomError = document.getElementById("msgErrPrenom");
  const emailError = document.getElementById("msgErrEmail");

  // Réinitialisation des messages d'erreur
  nomError.textContent = "";
  prenomError.textContent = "";
  emailError.textContent = "";

  let valide = true;

  if (nom === "") {
    nomError.textContent = "Le champ nom est requis.";
    valide = false;
  }

  if (prenom === "") {
    prenomError.textContent = "Le champ prénom est requis.";
    valide = false;
  }

  if (email === "") {
    emailError.textContent = "Le champ email est requis.";
    valide = false;
  }

  if (valide) alert("Formulaire envoyé avec succès.");

  return valide;
}

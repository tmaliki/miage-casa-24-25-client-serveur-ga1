document.querySelector("btnAfficher").addEventListener("click", () => {
  const valeur = document.getElementById("inputText").value.trim();
  document.getElementById("resultat").textContent = valeur;
});

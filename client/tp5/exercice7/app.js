const inputElt = document.querySelector("#inputId");
const btnElt = document.querySelector("#btnId");
const ulElt = document.querySelector("#liste");

btnElt.addEventListener("click", () => {
  const texte = inputElt.value.trim();
  if (texte !== "") {
    // Création d'un element html li
    const li = document.createElement("li");
    li.textContent = texte;

    // Ajout du bouton de suppression
    const btnDel = document.createElement("button");
    btnDel.textContent = "Supprimer";
    btnDel.style.marginLeft = "10px";
    li.appendChild(btnDel); // associons l'element button à l'element li correspondant

    // Evenement de click pour supprimer l'element
    btnDel.addEventListener("click", () => {
      li.remove();
    });

    ulElt.appendChild(li);
    inputElt.value = "";
  }
});

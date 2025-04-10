const inputElt = document.querySelector("#inputId");
const btnElt = document.querySelector("#btnId");
const ulElt = document.querySelector("#liste");

btnElt.addEventListener("click", () => {
  const texte = inputElt.value.trim();
  if (texte !== "") {
    // Création d'un element html li
    const li = document.createElement("li");
    li.textContent = texte;
    ulElt.appendChild(li);
    inputElt.value = "";
  }
});

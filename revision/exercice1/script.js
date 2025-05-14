// récupération des élements HTML
const inputElt = document.getElementById("inputId");

const btnLocalSave = document.getElementById("localSaveId");
const btnSessionSave = document.getElementById("sessionSaveId");

const btnLocalGet = document.querySelector("#localGetId");
const btnSessionGet = document.querySelector("#sessionGetId");

const btnLocalDel = document.querySelector("#localDelId");
const btnSessionDel = document.querySelector("#sessionDelId");

// récupération de l'élement p par son nom
const outputElt = document.querySelector("p");

/**
 * Ecoute d'évenement de click sur les boutons d'enregistrement
 */
// Enregistrement dans localStorage
btnLocalSave.addEventListener("click", () => {
  const inputValue = inputElt.value.trim();
  if (inputValue) {
    localStorage.setItem("maValeurLocal", inputValue);
    inputElt.value = "";
  } else {
    alert("Veuillez saisir la valeur de localStorage !");
  }
});

// Enregistrement dans sessionStorage
btnSessionSave.addEventListener("click", () => {
  const inputValue = inputElt.value.trim();
  if (inputValue) {
    sessionStorage.setItem("maValeurSession", inputValue);
    inputElt.value = "";
  } else {
    alert("Veuillez saisir la valeur de sessionStorage !");
  }
});

/**
 * Ecoute d'évenement de click sur les boutons de lecture
 */
// Lecture ou recupération depuis localStorage
btnLocalGet.addEventListener("click", () => {
  const localVal = localStorage.getItem("maValeurLocal");
  if (localVal) {
    outputElt.textContent = `Valeur depuis localStorage : ${localVal}`;
  } else {
    alert("Pas de donnée dans la clé spécifie de votre localStorage");
  }
});

// Lecture ou recupération depuis sessionStorage
btnSessionGet.addEventListener("click", () => {
  const localVal = sessionStorage.getItem("maValeurSession");
  if (localVal) {
    outputElt.textContent = `Valeur depuis sessionStorage : ${localVal}`;
  } else {
    alert("Pas de donnée dans la clé spécifie de votre sessionStorage");
  }
});

/**
 * Ecoute d'évenement sur les boutons de suppression
 */
// Suppression depuis localStorage
btnLocalDel.addEventListener("click", () => {
  if (localStorage.getItem("maValeurLocal")) {
    localStorage.removeItem("maValeurLocal");
    alert("Donnée supprimé depuis le localStorage");
    outputElt.textContent = "";
  } else {
    alert("Pas de donnée à supprimer dans le localStorage");
  }
});

// Suppression depuis sessionStorage
btnSessionDel.addEventListener("click", () => {
  if (sessionStorage.getItem("maValeurSession")) {
    sessionStorage.removeItem("maValeurSession");
    alert("Donnée supprimé depuis le sessionStorage");
    outputElt.textContent = "";
  } else {
    alert("Pas de donnée à supprimer dans le sessionStorage");
  }
});

const fruits = ["Pomme", "Banane", "Orange"];
const user = { nom: "Alice", age: 22 };

const btnLocalSaveArray = document.querySelector("#localSaveId");
const btnSessionSaveArray = document.querySelector("#sessionSaveId");
const btnLocalReadArray = document.querySelector("#localReadId");
const btnSessionReadArray = document.querySelector("#sessionReadId");
const btnLocalRemoveArray = document.querySelector("#localRemoveId");
const btnSessionRemoveArray = document.querySelector("#sessionRemoveId");
const arrayOutput = document.querySelector("#arrayOutputId");

const btnLocalSaveObject = document.querySelector("#localSaveId2");
const btnSessionSaveObject = document.querySelector("#sessionSaveId2");
const btnLocalReadObject = document.querySelector("#localReadId2");
const btnSessionReadObject = document.querySelector("#sessionReadId2");
const btnLocalRemoveObject = document.querySelector("#localRemoveId2");
const btnSessionRemoveObject = document.querySelector("#sessionRemoveId2");
const objOutput = document.querySelector("#objOutputId");

// --- Stockage/Lecture/Suppresion d'un Tableau dans localStrorage et sessionStorage
// enregistrement localStorage
btnLocalSaveArray.addEventListener("click", () => {
  const arrayToString = JSON.stringify(fruits);
  localStorage.setItem("fruits", arrayToString);
});
// enregistrement sessionStorage
btnSessionSaveArray.addEventListener("click", () => {
  const arrayToString = JSON.stringify(fruits);
  sessionStorage.setItem("fruits", arrayToString);
});

// lecture localStorage
btnLocalReadArray.addEventListener("click", () => {
  const dataString = localStorage.getItem("fruits");
  if (dataString) {
    const dataArray = JSON.parse(dataString);
    arrayOutput.innerText = "Fruits (Local) : " + dataArray.join(", ");
  } else {
    arrayOutput.innerText = "Acune donnée trouvée dans localStorage.";
  }
});
// lecture sessionStorage
btnSessionReadArray.addEventListener("click", () => {
  const dataString = sessionStorage.getItem("fruits");
  if (dataString) {
    const dataArray = JSON.parse(dataString);
    arrayOutput.innerText = "Fruits (Session) : " + dataArray.join(", ");
  } else {
    arrayOutput.innerText = "Acune donnée trouvée dans sessionStorage.";
  }
});
// suppresion localStorage
btnLocalRemoveArray.addEventListener("click", () => {
  if (localStorage.getItem("fruits")) {
    localStorage.removeItem("fruits");
    alert("Donnée supprimer depuis localStorage");
    arrayOutput.innerText = "";
  } else {
    alert("Acune donnée trouvée dans localStorage.");
  }
});
// suppresion sessionStorage
btnSessionRemoveArray.addEventListener("click", () => {
  if (sessionStorage.getItem("fruits")) {
    sessionStorage.removeItem("fruits");
    alert("Donnée supprimer depuis sessionStorage");
    arrayOutput.innerText = "";
  } else {
    alert("Acune donnée trouvée dans sessionStorage.");
  }
});

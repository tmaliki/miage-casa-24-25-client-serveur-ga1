// les variables
let timerId; // stocker l'id du timer

// Récuperation des elements span
let heuresId = document.querySelector("#heuresId");
let minutesId = document.querySelector("#minutesId");
let secondesId = document.querySelector("#secondesId");
let millisecondesId = document.querySelector("#millisecondesId");

// Récuperation des elements button
let startId = document.querySelector("#startId");
let stopId = document.querySelector("#stopId");
let resetId = document.querySelector("#resetId");

// initialisation des variables heures, minutes, secondes et milisecondes
let heures = 0;
let minutes = 0;
let secondes = 0;
let msecondes = 0;

// fonction poiur ajouter un 0 lorsqu'il y uniquement les unités/chiffres (0 - 9)
function numberFormat(nbr) {
  return nbr.toString().padStart(2, "0");
}

// start function
startId.addEventListener("click", startChrono);
function startChrono() {
  timerId = setInterval(() => {
    heuresId.textContent = numberFormat(heures);
    minutesId.textContent = numberFormat(minutes);
    secondesId.textContent = numberFormat(secondes);
    millisecondesId.textContent = numberFormat(msecondes);

    msecondes += 1;
    if (msecondes >= 10) {
      msecondes = 0; // remise à zéro de msecondes
      secondes += 1; // incrementation de secondes pour chaque 1000 ms
    }

    if (secondes >= 60) {
      secondes = 0;
      minutes += 1;
    }

    if (minutes >= 60) {
      minutes = 0;
      heures += 1;
    }
  }, 100); // 1seconde = 1000 millisconde

  // desactivation du bouton start (en ajoutant l'attribut disabled)
  startId.setAttribute("disabled", "");
}

// stop function
stopId.addEventListener("click", stopChrono);
function stopChrono() {
  clearInterval(timerId);

  // reactivation du bouton start (en supprimant l'attribut disabled)
  startId.removeAttribute("disabled");
}

// reset function
resetId.addEventListener("click", resetChrono);
function resetChrono() {
  heures = 0;
  minutes = 0;
  secondes = 0;
  msecondes = 0;

  clearInterval(timerId);

  heuresId.textContent = numberFormat(heures) || "00";
  minutesId.textContent = numberFormat(minutes) || "00";
  secondesId.textContent = numberFormat(secondes) || "00";
  millisecondesId.textContent = numberFormat(msecondes) || "00";

  // reactivation du bouton start (en supprimant l'attribut disabled)
  startId.removeAttribute("disabled");
}

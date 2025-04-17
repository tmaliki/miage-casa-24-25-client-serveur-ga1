function mettreAJourHorloge() {
  const now = new Date();
  const heures = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const secondes = String(now.getSeconds()).padStart(2, "0");

  // affichage de l'heure actuelle dans la div horloge
  document.querySelector("#horloge").textContent = `${heures}:${minutes}:${secondes}`;
}

setInterval(mettreAJourHorloge, 1000);
mettreAJourHorloge(); // Initialisation de l'heure

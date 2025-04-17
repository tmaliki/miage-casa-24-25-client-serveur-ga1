const images = document.querySelectorAll(".carousel img");
let current = 0;

function updateCarousel(index) {
  images.forEach((img) => img.classList.remove("active"));
  images[index].classList.add("active");
}

// Evenement pour le bouton précédent
document.querySelector("#prev").addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  updateCarousel(current);
});

// Evenement pour le bouton suivant
document.querySelector("#next").addEventListener("click", () => {
  current = (current + 1) % images.length;
  updateCarousel(current);
});

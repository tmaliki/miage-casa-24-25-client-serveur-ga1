const form = document.querySelector("#quizForm");

form.addEventListener("submit", (evt) => {
  evt.preventDefault(); // suppression de l'evenement par défaut sur la balise form/bouton
  //   console.log(evt);

  const responses = {
    q1: "const",
    q2: "toUpperCase",
    q3: "array",
    q4: "//",
    q5: "push",
  };

  let score = 0;

  for (let q in responses) {
    const choix = document.querySelector(`input[name="${q}"]:checked`);
    if (choix && choix.value === responses[q]) score++;
  }

  const resultat = document.getElementById("resultat");
  resultat.textContent = `Votre score : ${score}/5`;
});

function diviser(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division par zéro impossible");
    }
    console.log(`La division de ${a} / ${b} = ${a / b}`);
  } catch (error) {
    console.error("Erreur : ", error.message);
  }
}

// test
diviser(16, 2);
diviser(54, 0);

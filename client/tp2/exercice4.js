function inverseMots(phrase) {
  return phrase.split(" ").reverse().join(" ");
}

// test
console.log(inverseMots("Javascript est amusant et intéressant"));
console.log(inverseMots("Apprenez à coder en JavaScript"));

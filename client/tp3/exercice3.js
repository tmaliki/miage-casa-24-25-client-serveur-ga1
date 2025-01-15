// fonction flechée
const division = (numerateur, denominateur) => {
  if (denominateur == 0) return "Division par zéro (0) impossible";
  return `Division de ${numerateur} : ${denominateur} = ${numerateur / denominateur}`;
};

// test
console.log(division(9, 3));
console.log(division(12, 0));

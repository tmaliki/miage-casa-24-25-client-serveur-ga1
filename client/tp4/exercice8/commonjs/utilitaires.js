// fonction flèchée
module.exports.genererNombreAleatoire1 = (min, max) => {
  if (min >= max) {
    throw new Error("min doit être plus petit que max");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// fonction anonyme
module.exports.genererNombreAleatoire = function (min, max) {
  if (min >= max) {
    throw new Error("min doit être plus petit que max");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

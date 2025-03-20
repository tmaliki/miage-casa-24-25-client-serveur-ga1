export default function genererNombreAleatoire(min, max) {
  if (min >= max) {
    throw new Error("min doit être plus petit que max");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

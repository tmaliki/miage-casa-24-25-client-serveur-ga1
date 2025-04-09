const todoList = "https://jsonplaceholder.typicode.com/todos";
const findTodo1 = "https://jsonplaceholder.typicode.com/todos/1";

// async function nomFonction() {}

const recupererDonnees = async () => {
  try {
    const reponse = await fetch(todoList); // Requête HTTP avec la méthode GET

    if (!reponse.ok) {
      throw new Error(`Erreur HTTP : ${reponse.status}`);
    }

    const data = await reponse.json(); // Attendre la conversion en JSON

    console.table(data);
  } catch (error) {
    console.error("Erreur detectée : ", error);
  } finally {
    console.log("Requête temrinée.");
  }
};

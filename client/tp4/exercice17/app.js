const todoList = "https://jsonplaceholder.typicode.com/todos";
const findTodo1 = "https://jsonplaceholder.typicode.com/todos/1";

const recupererDonnees = () => {
  fetch(todoList)
    .then((response) => {
      // console.log(response);
      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`); // Gestion des erreurs HTTP
      }
      return response.json(); // Conversion en JSON
    })
    .then((data) => {
      console.table(data);
    })
    .catch((err) => {
      console.error("Erreur detectée : ", err);
    })
    .finally(() => {
      console.log("Requête temrinée.");
    });
};

recupererDonnees();

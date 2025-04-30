// importation du module http de node.js
const http = require("http");

// création du serveur
// req : request => pour les demandes vers le serveur
// res : response => pour la réponse du serveur
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("Hello world !"); // response de retour du serveur
});

// écoute sur le port du serveur
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

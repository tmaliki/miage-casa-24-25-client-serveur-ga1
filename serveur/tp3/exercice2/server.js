const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request URL :", req.url);
  console.log("Request Method :", req.method);
  console.log("Request Headers :", req.headers);

  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("Information affichée avec succès !");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

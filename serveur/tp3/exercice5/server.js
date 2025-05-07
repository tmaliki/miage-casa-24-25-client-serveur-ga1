// importation du framework express
const express = require("express");

// création du serveur à partir d'express
const app = express();

// data
const users = [
  { id: 1, name: "John", email: "john@test.com" },
  { id: 2, name: "Doe", email: "doe@test.com" },
  { id: 3, name: "Maliki", email: "maliki@test.com" },
];

// création de la route /user/:id ex : /user/3
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  const userData = users.find((u) => u.id === parseInt(userId));
  if (userData) {
    res.status(200).json(userData);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

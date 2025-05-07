// importation du framework express
const express = require("express");

// création du serveur à partir d'express
const app = express();

// permet de lire les formats JSON dans le body
app.use(express.json());

// { id: 1, designation: "tomate", price: 10.5, qte_stock: 500 }
let products = [];

// route pour récupérer la liste de tous les produits
app.get("/products/list", (req, res) => {
  res.json(products);
});

// route pour créer/ajouter un nouveau produit
app.post("/products/add", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json({
    message: "Ajouté avec succès",
    result: newProduct,
  });
});

// route pour récupérer les infos d'un produit par son id
app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === parseInt(productId));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

// route pour mettre à jour un produit
app.put("/products/update/:id", (req, res) => {
  const productId = req.params.id;
  const productData = req.body;
  const index = products.findIndex((p) => p.id === parseInt(productId));
  if (index === -1) {
    res.status(404).json({ error: "Product not found" });
  } else {
    products[index] = productData;
    res.status(201).json({
      message: "Modifié avec succès",
      result: productData,
    });
  }
});

// route pour supprimer un produit
app.delete("/products/del/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === parseInt(productId));
  if (product) {
    products = products.filter((p) => p.id !== parseInt(productId));
    res.json({ message: "Product deleted successfully" });
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

// not found error
app.use((req, res) => {
  res.status(404).json({ error: "Url not found error" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

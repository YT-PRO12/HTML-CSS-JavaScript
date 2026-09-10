import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const products = [
  { id: 1, name: "Keyboard", price: 1200 },
  { id: 2, name: "Mouse", price: 800 }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(item => item.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

app.post("/api/products", (req, res) => {
  const { name, price } = req.body;

  if (!name || typeof price !== "number") {
    return res.status(400).json({
      message: "name and numeric price are required"
    });
  }

  const product = {
    id: products.length + 1,
    name,
    price
  };

  products.push(product);
  res.status(201).json(product);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});

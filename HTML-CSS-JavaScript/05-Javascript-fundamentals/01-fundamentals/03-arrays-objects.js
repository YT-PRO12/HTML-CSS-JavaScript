const products = [
  { name: "Keyboard", price: 1200, category: "electronics" },
  { name: "Notebook", price: 150, category: "stationery" },
  { name: "Mouse", price: 800, category: "electronics" }
];

const electronics = products.filter(p => p.category === "electronics");
const total = products.reduce((sum, p) => sum + p.price, 0);

console.log("Electronics:", electronics);
console.log("Total:", total);

const { profileEnd } = require("console");

const name = "Rakib";
const age = 21;

const user = {
  name,
  age,
  location: "London",
};

console.log(user);

const product = {
  label: "Notebook",
  price: "£4",
  stock: 201,
  salePrice: undefined,
};

const { label, price, stock } = product;

console.log(label, price, stock);

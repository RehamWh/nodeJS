const express = require('express');
const app = express();
const port = process.env.PORT || 3400;
const { products } = require('./data');


app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});


const filterProducts = (products, price) => {
  return products.filter(product => product.price > price);
};

// Route to fetch products with a price higher than the specified value
app.get('/api/products/:productPrice', (req, res) => {
  const { productPrice } = req.params;

  // Check if the price parameter is a valid number
  if (isNaN(productPrice)) {
    return res.status(400).send('Product price must be a valid number.');
  }

  // Filter products with price higher than the provided value
  const filteredProducts = filterProducts(products, Number(productPrice));

  // Return an error if no products are found
  if (filteredProducts.length === 0) {
    return res.status(404).send('No products found with a price higher than the specified value.');
  }

  // Send the filtered products in JSON format
  res.json(filteredProducts);
});

// Route to fetch all products, with only id, name, and image
app.get('/api/products', (req, res) => {
  const newProducts = products.map(product => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  // Send the simplified product list in JSON format
  res.json(newProducts);
});

// Route to fetch a specific product by its ID
app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;

  // Find the product by its ID
  const singleProduct = products.find(
    product => product.id === Number(productID),
  );

  // Return an error if the product does not exist
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist');
  }

  // Send the found product in JSON format
  return res.json(singleProduct);
});

//review of a product
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params); 
  res.send('hello world'); 
});

// Start the server on the port 3400
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

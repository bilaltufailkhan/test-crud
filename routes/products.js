const express = require("express");
const Product = require("../models/Products");
const router = express.Router();

// Get all Products
router.get("/", (req, res) => {
  Product.find((err, products) => {
    if (err) {
      return res.send(err);
    }
    return res.json(products);
  });
});

// Get Single Product
router.get("/:id", (req, res) => {
  res.json({ msg: "Getting a single Product" });
});

// Create a New Product
router.post("/", async (req, res) => {
  const { title, price, quantity } = req.body;

  try {
    const product = await Product.create({
      title,
      price,
      quantity,
    });
    return res.status(200).json(product);
  } catch (err) {
    return res.status(400).json({ msg: err.message });
  }
});

// Edit a Product
router.put("/:id", (req, res) => {
  const { title, price, quantity } = req.body;
  Product.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        title,
        price,
        quantity,
      },
    },
    { new: true },
    (err, Product) => {
      if (err) {
        res.send(err);
      } else res.json(Product);
    }
  );
});

// Delete a Product
router.delete("/:id", (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then(() => res.json({ message: "Product Deleted" }))
    .catch((err) => res.send(err));
});

module.exports = router;

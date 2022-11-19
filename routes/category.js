const express = require("express");

const router = express.Router();

// Get all categories
router.get("/", (req, res) => {
  res.json({ msg: "Getting all categories" });
});

// Create a New Category
router.post("/:cid", (req, res) => {
  res.json({ msg: "Creating a new category" });
});

// Edit a category
router.patch("/:cid", (req, res) => {
  res.json({ msg: "Editing a category" });
});

// Delete a category
router.delete("/:cid", (req, res) => {
  res.json({ msg: "Deleting a category" });
});

module.exports = router;

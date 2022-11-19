const express = require("express");

const router = express.Router();

// Get all divisions
router.get("/", (req, res) => {
  res.json({ msg: "Getting all divisions" });
});

// Create a New Division
router.post("/:did", (req, res) => {
  res.json({ msg: "Creating a new division" });
});

// Edit a division
router.patch("/:did", (req, res) => {
  res.json({ msg: "Editing a division" });
});

// Delete a division
router.delete("/:did", (req, res) => {
  res.json({ msg: "Deleting a division" });
});

module.exports = router;

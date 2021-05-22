const mongoose = require("../db/connection.js")
const db = mongoose.connection
const router = require("express").Router()
const Plant = require("../models/Plant.js")

// Find all Plants
router.get("/", async (req, res) => {
  try {
    res.send("/plants route hit with GET request")
  } catch (error) {
    res.status(400).json(error)
  }
})

// Create a new Plant
router.post("/", async (req, res) => {
  try {
    res.send("/plants route hit with POST request")
  } catch (error) {
    res.status(400).json(error)
  }
})

// Find a single Plant by ObjectId
router.get("/:id", async (req, res) => {
  try {
    res.send("/plants/:id route hit with GET request")
  } catch (error) {
    res.status(400).json(error)
  }
})

// Update a single Plant by ObjectId
router.put("/:id", async (req, res) => {
  try {
    res.send("/plants/:id route hit with PUT request")
  } catch (error) {
    res.status(400).json(error)
  }
})

// Delete a single Plant by ObjectId
router.delete("//:id", async (req, res) => {
  try {
    res.send("/plants/:id route hit with DELETE request")
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router

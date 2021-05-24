const mongoose = require("../db/connection.js")
const db = mongoose.connection
const router = require("express").Router()
const Garden = require("../models/garden.js")
const Plant = require("../models/plant.js")

// Create a new Garden
router.post("/", async (req, res) => {
  try {
    res.send("/gardens route hit with POST request")
  } catch (error) {
    res.status(400).json(error)
  }
})

// Validate user, Find Garden and Plants
router.get("/:email", async (req, res) => {
  try {
    res.send("/gardens/:email route hit with GET request")
  } catch (error) {
    res.status(400).json(error)
  }
})

// Find a Garden by ObjectId
router.get("/:id", async (req, res) => {
  try {
    res.send("/gardens/:id route hit with GET request")
  } catch (error) {
    res.status(400).json(error)
  }
})

// Find all Plants in Garden by Garden's ObjectId
router.get("/:id/plants", async (req, res) => {
  try {
    res.send("/gardens/plants route hit with GET request")
  } catch (error) {
    res.status(400).json(error)
  }
})

// Add a single Plant to a Garden by the Garden's ObjectId
router.post("/:id/plants", async (req, res) => {
  try {
    res.send("/gardens/plants route hit with POST request")
  } catch (error) {
    res.status(400).json(error)
  }
})

// Update a single Plant by ObjectId in a Garden by ObjectId
router.put("/:id/plants/:id", async (req, res) => {
  try {
    res.send("/gardens/plants/:id route hit with PUT request")
  } catch (error) {
    res.status(400).json(error)
  }
})

// Delete a single Plant by ObjectId in a Garden by ObjectId
router.delete("/:id/plants/:id", async (req, res) => {
  try {
    res.send("/gardens/plants/:id route hit with DELETE request")
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router

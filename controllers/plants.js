const mongoose = require("../db/connection.js")
const db = mongoose.connection
const router = require("express").Router()
const Plant = require("../models/plant.js")

// Find all Plants
router.get("/", async (req, res) => {
  try {
    res.json(await Plant.find({}))
    // res.send("testing")
  } catch (error) {
    res.status(400).json(error)
  }
})

// Create a new Plant
router.post("/", async (req, res) => {
  try {
    res.json(await Plant.create(req.body))
  } catch (error) {
    res.status(400).json(error)
  }
})

// Find a single Plant by ObjectId
router.get("/:id", async (req, res) => {
  try {
    res.json(await Plant.findById(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
})

// Update a single Plant by ObjectId
router.put("/:id", async (req, res) => {
  try {
    res.json(
      await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true })
    )
  } catch (error) {
    res.status(400).json(error)
  }
})

// Delete a single Plant by ObjectId
router.delete("/:id", async (req, res) => {
  try {
    res.json(await Plant.findByIdAndDelete(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
})

// Seed route - for Development purposes.
router.post("/seed", async (req, res) => {
  try {
    await Plant.deleteMany({})
    res.json(await Plant.create(req.body))
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router

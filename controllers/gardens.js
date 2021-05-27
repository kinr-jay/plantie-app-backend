const mongoose = require("../db/connection.js")
const db = mongoose.connection
const router = require("express").Router()
const Garden = require("../models/garden.js")
const Plant = require("../models/plant.js")

// Create a new Garden
router.post("/", async (req, res) => {
  try {
    res.json(await Garden.create(req.body))
  } catch (error) {
    res.status(400).json(error)
  }
})

// Validate user, Find Garden and Plants
// router.get("/:email", async (req, res) => {
//   try {
//     res.json("/gardens/:email route hit with GET request")
//   } catch (error) {
//     res.status(400).json(error)
//   }
// })

// Find a Garden by ObjectId
router.get("/:id", async (req, res) => {
  try {
    res.json(await Garden.findById(req.params.id).populate("plants.species"))
  } catch (error) {
    res.status(400).json(error)
  }
})

// Find all Plants in Garden by Garden's ObjectId
// router.get("/:id/plants", async (req, res) => {
//   try {
//     const garden = await Garden.findById(req.params.id).populate("plants")
//     res.json(garden.plants)
//   } catch (error) {
//     res.status(400).json(error)
//   }
// })

// Add a single Plant by ObjectId to a Garden by ObjectId
router.post("/:gardenId/plants/:plantId", async (req, res) => {
  try {
    const plantObj = await Plant.findById(req.params.plantId)
    const housePlant = {
      name: req.body.name,
      birthday: req.body.birthday,
      img: req.body.img,
      species: plantObj._id,
    }
    res.json(
      await Garden.findByIdAndUpdate(
        req.params.gardenId,
        { $push: { plants: housePlant } },
        { new: true }
      )
    )
  } catch (error) {
    res.status(400).json(error)
  }
})

// Update a single Plant by ObjectId in a Garden by ObjectId
router.put("/:gardenId/plants/:plantId", async (req, res) => {
  try {
    res.json(await Garden.updateOne(
      { _id: req.params.gardenId, "plants._id": req.params.plantId },
      { $set: { "plants.$.name": req.body.name, "plants.$.birthday": req.body.birthday }},
    ))
  } catch (error) {
    res.status(400).json(error)
  }
})

// Delete a single Plant by ObjectId in a Garden by ObjectId
router.delete("/:gardenId/plants/:plantId", async (req, res) => {
  try {
    res.json(await Garden.findByIdAndUpdate(
      req.params.gardenId,
      { $pull: { plants: { _id: req.params.plantId }}},
    ))
  } catch (error) {
    res.status(400).json(error)
  }
})

// For development
//////////////////
// Find all Gardens
router.get("/", async (req, res) => {
  try {
    res.json(await Garden.find({}))
  } catch (error) {
    res.status(400).json(error)
  }
})

// Delete all Gardens
router.delete("/", async (req, res) => {
  try {
    res.json(await Garden.deleteMany({}))
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router

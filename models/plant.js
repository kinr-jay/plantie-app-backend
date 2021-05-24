const { Schema, model } = require("mongoose")

const plantSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    frequency: { type: Number, required: true },
    lastWatered: { type: Date, default: Date.now() },
    water: { type: Number, required: true },
    sunlight: { type: String, required: true },
    temperature: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
    },
    description: { type: String, required: true },
    img: { type: String, required: true },
    birthday: { type: Date, default: Date.now() },
  },
  { timestamps: true }
)

const Plant = model("Plant", plantSchema)

module.exports = Plant

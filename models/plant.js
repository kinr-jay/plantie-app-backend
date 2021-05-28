const { Schema, model } = require("mongoose")

const plantSchema = new Schema(
  {
    type: { type: String, required: true },
    frequency: { type: Number, required: true },
    water: { type: Number, required: true },
    sunlight: { type: String, required: true },
    temperature: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
    },
    description: { type: String, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true }
)

const Plant = model("Plant", plantSchema)

module.exports = Plant

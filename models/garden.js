const { Schema, model } = require("mongoose")

const gardenSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    plants: {
      ref: "Plant",
      type: Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
)

const Garden = model("Garden", gardenSchema)

module.exports = Garden

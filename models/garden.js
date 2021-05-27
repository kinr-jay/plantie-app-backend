const { Schema, model } = require("mongoose")

const gardenSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    plants: [
      {
        name: { type: String, required: true },
        birthday: { type: Date, default: Date.now() },
        lastWatered: { type: Date, default: Date.now() },
        img: { type: String, required: true },
        species: {
          ref: "Plant",
          type: Schema.Types.ObjectId,
        },
      },
    ],
  },
  { timestamps: true }
)

const Garden = model("Garden", gardenSchema)

module.exports = Garden

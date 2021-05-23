// ENV variables
require("dotenv").config()
const { PORT = 4500, NODE_ENV = "development" } = process.env

// CORS
const cors = require("cors")
const corsOptions = require("./config/cors.js")

// Express
const express = require("express")
const app = express()

// Logger
const morgan = require("morgan")

// Middleware
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan("dev"))

// Routes

app.get("/", (req, res) => {
  res.send("<h1>Heeeyy everybody, it's Alex Merced.</h1>")
})

const plantController = require("./controllers/plants.js")
const gardenController = require("./controllers/gardens.js")
app.use("/plants", plantController)
app.use("/garden", gardenController)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

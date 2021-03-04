require("dotenv").config()
const express = require("express")
const app = new express()
const bodyParser = require("body-parser")
const config = require("./config.js")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index", {config})
})

app.listen(process.env.port, () => console.log("Site online on port " + process.env.port))
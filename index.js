require("dotenv").config()
const express = require("express")
const app = new express()
const bodyParser = require("body-parser")
const config = require("./config.js")
const GhostContentAPI = require('@tryghost/content-api');
const api = new GhostContentAPI({
  url: config.ghost,
  key: process.env.GHOST,
  version: "v3"
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.set("view engine", "ejs")

const run = async () => {
  

  app.get("/", async (req, res) => {
    let announcement = await api.posts.browse({limit: 1, filter: 'featured:true'});
    let podcasts = await api.posts.browse({limit: 50, filter: 'tag:podcast'});
    console.log(podcasts)

    res.render("index", { config, announcement, podcasts })
  })


  app.listen(process.env.PORT, () => console.log("Site online on port " + process.env.PORT))

}

run()
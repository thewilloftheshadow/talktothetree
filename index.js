const express = require("express")
const app = new express()

app.get("*", (req, res) => res.status(200).send("Site is not yet completed"))

app.listen(process.env.port).then(console.log(`Site online - ${Date.now()}`))
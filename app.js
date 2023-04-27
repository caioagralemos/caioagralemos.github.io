const express = require("express")
const app = express()
const path = require("path")

app.set("view engine", "ejs") // request e ja define ejs como nossa engine
app.use(express.static(path.join(__dirname, 'public')))

app.get("*", (req, res) => {
    res.render("home.ejs")
})

app.listen('21076', () => {
    console.log('live @ 21076')
})
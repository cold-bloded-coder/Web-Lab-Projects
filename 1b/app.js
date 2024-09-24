const express = require("express")
const mongoose = require("mongoose")
const path = require("path");

const studentRoutes = require("./routes/studentRoutes");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost:27017/studentDB")
    .then(() => {
        console.log("successfully connected")
    })

app.use("/students", studentRoutes)

app.listen(3000, () => {
    console.log("Listening at http://localhost:3000")
})


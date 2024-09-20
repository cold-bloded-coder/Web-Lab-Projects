const express = require("express")
const path = require("path");
const bodyParser = require("body-parser");
const employeeRoutes = require("./routes/employeeRoutes")
const mongoose = require("mongoose")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost:27017/HR")
.then(()=>{console.log("Connection established")})
.catch((err)=>{console.log(err)})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.use('/employee', employeeRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`)
})
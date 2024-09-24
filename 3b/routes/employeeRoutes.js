const express = require("express");
const bodyParser = require("body-parser")
const router = express.Router();
const Employee = require("../models/Employee")

router.post("/add", async (req, res) => {
    const {name, ssn} = req.body;

    try{
        const newEmployee = new Employee({
            ssn,
            name,
        });
        await newEmployee.save();
        res.redirect('/');
    }catch(err){
        res.status(400).json({message: "Employee could not be added", error: err.message})
    }
})

router.get("/add", (req, res) => {
    console.log(req.body)
})

module.exports = router;
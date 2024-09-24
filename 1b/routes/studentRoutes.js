const express = require("express")

const Student = require("../models/Student")

const router = express.Router()

router.get("/get", async (req, res) => {
    try {
        const students = await Student.find()
        if (!students.length) {
            return res.status(404).send("No students found");
        }
        res.json(students);
    } catch (err) {
        console.log("router.js: ", err)
    }
})

module.exports = router;
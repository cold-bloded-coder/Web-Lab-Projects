const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    ssn: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    }
})

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
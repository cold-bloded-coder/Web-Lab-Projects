const { mongoose, mongo } = require("mongoose");

const studentSchema = new mongoose.Schema({
    usn: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    subject_code: { type: String, required: true },
    cie_marks: { type: Number, required: true }
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student;
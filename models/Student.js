const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    registerDate: {
        type: Date,
        default: Date.now()
    }
})
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
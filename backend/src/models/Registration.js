const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// =========================================================

const registrationSchema = new Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    unix_timestamp: {
        type: Date,
        default: Date.now()
    }
},
{collection: 'registration'});


// =========================================================
module.exports = mongoose.model('Registration', registrationSchema);
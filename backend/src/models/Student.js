const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// =========================================================

const studentSchema = new Schema({
    full_name:{
        type:String,
        required: true,
        unique: true,
        minlength: 2
    },
    email:{
        type:String,
        required: true,
        unique: true,
        minlength: 2,
        format: "email"
    }
},
{collection: 'student'});

// =========================================================
module.exports = mongoose.model('Student', studentSchema)
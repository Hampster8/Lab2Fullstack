const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// =========================================================

const courseSchema = new Schema({
    course_name:{
        type:String,
        required:true,
        minlength: 2
    },
    course_description:{
        type:String,
        required: true,
        maxlength: 1024
    }
});

// =========================================================
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;



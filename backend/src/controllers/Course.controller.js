const Course = require('../models/Course')
// =========================================================

const createCourse = async (req, res) => {
    const course = new Course({
        course_name: req.body.course_name,
        course_description: req.body.course_description
    })
    await course.save();
    res.send(course);
};

const getCourses = async (req, res) => {
    const allCourses = await Course.find();
    return res.status(200).json(allCourses);
}
/*

const getCourseByID = async (req, res) => {
    const course = await Course.findOneById(req.params.id);
    if (!course) return res.status(404).send('No Course with this ID.');
    res.send(course);
}

const updateCourse = async (req, res) => {
    const course = await Course.findByIdAndUpdate(req.params.id,
        {
            course_name: req.body.course_name,
            course_description: req.body.course_description
        });

    if (!course) return res.status(404).send('Unable to update, no Course with this ID.');

    res.send(course);
}

const deleteCourse = async (req, res) => {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).send('Unable to Delete, no Course with this ID.');
    res.status(200).send(course);
}
*/

// =========================================================
module.exports = {
    createCourse,
    getCourses
    //getCourseByID,
    //updateCourse,
    //deleteCourse
}
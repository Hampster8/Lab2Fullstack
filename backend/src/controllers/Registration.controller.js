const { Registration } = require('../models/Registration');
// =========================================================

const getRegistration =  async (req, res) => {
    const { student_id, course_id } = req.body;

    const registration = new Registration({
        student: student_id,
        course: course_id,
    });
    await registration.save();
    res.send(registration);
};

const createRegistration = async (req, res) => {
    Registration.find()
        .populate("student")
        .populate("course")
        .exec(function (err, registration) {
            res.send(registration);
        })
};

const getLatestRegistrations = async (req, res) => {
    const registrations = await Registration
        .find()
        .sort({unix_timestamp: -1})
        .limit(5)
        .pretty()
    res.send(registrations);
};

// =========================================================
module.exports = {
    getRegistration,
    createRegistration,
    getLatestRegistrations
};
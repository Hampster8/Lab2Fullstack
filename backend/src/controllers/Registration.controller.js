const Registration  = require('../models/Registration');
// =========================================================
const getLatestRegistrations = async (req, res) => {
    const registration = await Registration
        .find()
        .sort({unix_timestamp: -1})
        .limit(5)
    res.status(200).json(registration);
};
/*
const createRegistration = async (req, res) => {
    Registration.find()
        .populate("student")
        .populate("course")
        .exec(function (err, registration) {
            res.send(registration);
        })
};


*/
// =========================================================
module.exports = {
    //getRegistration,
    //createRegistration
    getLatestRegistrations
};
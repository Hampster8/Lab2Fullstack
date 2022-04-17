const Registration  = require('../models/Registration');
// =========================================================
const getLatestRegistrations = async (req, res) => {
    const registration = await Registration
        .find()
        .sort({unix_timestamp: "desc"})
        .populate("student")
        .populate("course")
        .limit(5)
    res.status(200).json(registration);
};






// =========================================================
module.exports = {
    //getRegistration,
    //populateRegistration,
    getLatestRegistrations
};
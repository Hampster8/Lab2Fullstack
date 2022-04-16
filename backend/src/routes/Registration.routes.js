const express = require("express");
const registrationController = require('../controllers/Registration.controller');
const router = express.Router();
// =========================================================

router.get('/register', registrationController.getRegistration)
//router.get('/latest', registrationController.getLatestRegistrations)
router.post('/register', registrationController.createRegistration)

// =========================================================
module.exports = router;
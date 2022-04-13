const express = require("express");
const registrationController = require('../controllers/Registration.controller');
const router = express.Router();
// =========================================================

router.get('/', registrationController.getRegistration)
router.get('/', registrationController.getLatestRegistrations)
router.post('/new', registrationController.createRegistration)

// =========================================================
module.exports = router;
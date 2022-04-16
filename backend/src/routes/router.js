const express = require("express");
const studentController = require('../controllers/Student.controller');
const registrationController = require('../controllers/Registration.controller');
const courseController = require('../controllers/Course.controller');
const router = express.Router();


router.post('/student', studentController.createStudent)
router.get('/student', studentController.getStudents)

router.get('/register', registrationController.getRegistration)
//router.get('/latest', registrationController.getLatestRegistrations)
router.post('/register', registrationController.createRegistration)

router.post('/course', courseController.createCourse)
router.get('/course', courseController.getCourses)


module.exports = router;
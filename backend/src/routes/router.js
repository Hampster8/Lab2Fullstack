const express = require("express");
const studentController = require('../controllers/Student.controller');
const registrationController = require('../controllers/Registration.controller');
const courseController = require('../controllers/Course.controller');
const router = express.Router();


router.post('/', studentController.createStudent)
router.get('/student', studentController.getStudents)

router.get('/latest', registrationController.getLatestRegistrations)
//router.get('/latest', registrationController.populateRegistration)
//router.post('/registration', registrationController.createRegistration)

router.post('/', courseController.createCourse)
router.get('/course', courseController.getCourses)



module.exports = router;
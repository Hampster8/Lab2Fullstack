const express = require("express");
const studentController = require('../controllers/Student.controller');
const router = express.Router();
// =========================================================

router.post('/student', studentController.createStudent)
router.get('/student', studentController.getStudents)
/*
router.get('/:id', studentController.getStudentByID)
router.put('/:id', studentController.updateStudent)
router.delete('/:id', studentController.deleteStudent)
*/
// =========================================================
module.exports = router;
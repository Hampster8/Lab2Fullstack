const express = require("express");
const courseController = require('../controllers/Course.controller');
const router = express.Router();
// =========================================================

router.get('/', courseController.getCourses)
router.post('/', courseController.createCourse)
/*
router.get('/:id', courseController.getCourseByID)
router.put('/:id', courseController.updateCourse)
router.delete('/:id', courseController.deleteCourse)
*/

// =========================================================
module.exports = router;
const express = require("express");
const courseController = require('../controllers/Course.controller');
const router = express.Router();
// =========================================================

router.post('/', courseController.createCourse)
/*
router.get('/', courseController.getCourses)
router.get('/:id', courseController.getCourseByID)
router.put('/:id', courseController.updateCourse)
router.delete('/:id', courseController.deleteCourse)
*/

// =========================================================
module.exports = router;
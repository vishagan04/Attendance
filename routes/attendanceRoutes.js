// routes/attendanceRoutes.js
const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

// Route to get all attendances
router.get('/', attendanceController.getAllAttendances);

// Route to get attendance by ID
router.get('/:id', attendanceController.getAttendanceById);

// Route to create a new attendance
router.post('/', attendanceController.createAttendance);

// Route to update an attendance by ID
router.put('/:id', attendanceController.updateAttendance);

// Route to delete an attendance by ID
router.delete('/:id', attendanceController.deleteAttendance);

module.exports = router;

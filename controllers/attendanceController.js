// controllers/attendanceController.js
const attendanceModel = require('../models/attendanceModel');

const getAllAttendances = async (req, res) => {
  try {
    const attendances = await attendanceModel.getAllAttendances();
    res.json(attendances);
  } catch (err) {
    console.error('Error fetching attendances:', err);
    res.status(500).send('Internal Server Error');
  }
};

const getAttendanceById = async (req, res) => {
  const { id } = req.params;
  try {
    const attendance = await attendanceModel.getAttendanceById(id);
    if (attendance) {
      res.json(attendance);
    } else {
      res.status(404).send('Attendance record not found');
    }
  } catch (err) {
    console.error('Error fetching attendance by ID:', err);
    res.status(500).send('Internal Server Error');
  }
};

const createAttendance = async (req, res) => {
  try {
    const newAttendance = await attendanceModel.createAttendance(req.body);
    res.status(201).json(newAttendance);
  } catch (err) {
    console.error('Error creating attendance:', err);
    res.status(500).send('Internal Server Error');
  }
};

const updateAttendance = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const updatedAttendance = await attendanceModel.updateAttendance(id, updatedData);
    res.json(updatedAttendance);
  } catch (err) {
    console.error('Error updating attendance:', err);
    res.status(500).send('Internal Server Error');
  }
};

const deleteAttendance = async (req, res) => {
  const { id } = req.params;
  try {
    await attendanceModel.deleteAttendance(id);
    res.status(204).send(); // No Content
  } catch (err) {
    console.error('Error deleting attendance:', err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getAllAttendances,
  getAttendanceById,
  createAttendance,
  updateAttendance,
  deleteAttendance
};

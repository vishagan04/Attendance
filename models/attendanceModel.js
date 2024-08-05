// models/attendanceModel.js
const prisma = require('./prismaClient');

// Get all attendances
const getAllAttendances = async () => {
  return await prisma.employeeAttendance.findMany();
};

// Get attendance by ID
const getAttendanceById = async (id) => {
  return await prisma.employeeAttendance.findUnique({
    where: { id: parseInt(id) }
  });
};

// Create a new attendance
const createAttendance = async (attendanceData) => {
  return await prisma.employeeAttendance.create({
    data: attendanceData
  });
};

// Update an existing attendance
const updateAttendance = async (id, updatedData) => {
  return await prisma.employeeAttendance.update({
    where: { id: parseInt(id) },
    data: updatedData
  });
};

// Delete an attendance record
const deleteAttendance = async (id) => {
  return await prisma.employeeAttendance.delete({
    where: { id: parseInt(id) }
  });
};

module.exports = {
  getAllAttendances,
  getAttendanceById,
  createAttendance,
  updateAttendance,
  deleteAttendance
};

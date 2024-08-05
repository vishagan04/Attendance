// models/employeeModel.js
const prisma = require('./prismaClient');

// Get all employees
const getAllEmployees = async () => {
  return await prisma.employee.findMany();
};

// Get employee by ID
const getEmployeeById = async (id) => {
  return await prisma.employee.findUnique({
    where: { id: parseInt(id) }
  });
};

// Create a new employee
const createEmployee = async (employeeData) => {
  return await prisma.employee.create({
    data: employeeData
  });
};

// Update an existing employee
const updateEmployee = async (id, updatedData) => {
  return await prisma.employee.update({
    where: { id: parseInt(id) },
    data: updatedData
  });
};

// Delete an employee record
const deleteEmployee = async (id) => {
  return await prisma.employee.delete({
    where: { id: parseInt(id) }
  });
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
};

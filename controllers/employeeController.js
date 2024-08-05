// controllers/employeeController.js
const employeeModel = require('../models/employeeModel');

const getAllEmployees = async (req, res) => {
  try {
    const employees = await employeeModel.getAllEmployees();
    res.json(employees);
  } catch (err) {
    console.error('Error fetching employees:', err);
    res.status(500).send('Internal Server Error');
  }
};

const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await employeeModel.getEmployeeById(id);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).send('Employee not found');
    }
  } catch (err) {
    console.error('Error fetching employee by ID:', err);
    res.status(500).send('Internal Server Error');
  }
};

const createEmployee = async (req, res) => {
  try {
    const newEmployee = await employeeModel.createEmployee(req.body);
    res.status(201).json(newEmployee);
  } catch (err) {
    console.error('Error creating employee:', err);
    res.status(500).send('Internal Server Error');
  }
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const updatedEmployee = await employeeModel.updateEmployee(id, updatedData);
    res.json(updatedEmployee);
  } catch (err) {
    console.error('Error updating employee:', err);
    res.status(500).send('Internal Server Error');
  }
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    await employeeModel.deleteEmployee(id);
    res.status(204).send(); // No Content
  } catch (err) {
    console.error('Error deleting employee:', err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
};

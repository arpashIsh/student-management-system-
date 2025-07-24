const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let employees = [];

// Get all employees
app.get('/api/employees', (req, res) => {
  res.json(employees);
});

// Add new employee
app.post('/api/employees', (req, res) => {
  const employee = req.body;
  employees.push(employee);
  res.status(201).json({ message: 'Employee added successfully' });
});

// Update employee by ID
app.put('/api/employees/:id', (req, res) => {
  const id = req.params.id;
  const updatedEmployee = req.body;
  const index = employees.findIndex(emp => emp.empID === id);
  if (index !== -1) {
    employees[index] = updatedEmployee;
    res.json({ message: 'Employee updated successfully' });
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
});

// Delete employee by ID
app.delete('/api/employees/:id', (req, res) => {
  const id = req.params.id;
  employees = employees.filter(emp => emp.empID !== id);
  res.json({ message: 'Employee deleted successfully' });
});

app.listen(port, () => {
  console.log('Server running on http://localhost:' + port);
});

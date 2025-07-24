const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let students = [];

// Get all students
app.get('/api/students', (req, res) => {
  res.json(students);
});

// Add new student
app.post('/api/students', (req, res) => {
  const student = req.body;
  students.push(student);
  res.status(201).json({ message: 'Student added successfully' });
});

// Update student by ID
app.put('/api/students/:id', (req, res) => {
  const id = req.params.id;
  const updatedStudent = req.body;
  const index = students.findIndex(stu => stu.studentID === id);
  if (index !== -1) {
    students[index] = updatedStudent;
    res.json({ message: 'Student updated successfully' });
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
});

// Delete student by ID
app.delete('/api/students/:id', (req, res) => {
  const id = req.params.id;
  students = students.filter(stu => stu.studentID !== id);
  res.json({ message: 'Student deleted successfully' });
});

app.listen(port, () => {
  console.log('Server running on http://localhost:' + port);
});

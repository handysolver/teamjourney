const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/employeesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const employeeSchema = new mongoose.Schema({
  first_name: String,
  middle_name: String,
  last_name: String,
  prefix: String,
  permanent_address: String,
  probation_salary: Number,
  fulltime_salary: Number,
  probation_period: Number,
  notice_period: Number,
  commitment_period: Number,
  designation: String,
  date_of_joining: Date,
  email: String, 
});

const Employee = mongoose.model('Employee', employeeSchema);

// Routes
app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/employees', async (req, res) => {
  const employeeData = req.body;
  try {
    const employee = await Employee.create(employeeData);
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

app.put('/employees/:id', async (req, res) => {
  const { id } = req.params;
  const employeeData = req.body;
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      employeeData,
      { new: true }
    );
    res.json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

app.delete('/employees/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Employee.findByIdAndDelete(id);
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

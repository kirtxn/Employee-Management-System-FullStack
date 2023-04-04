const Employee = require("../models/Employee");

// Get all employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new employee
exports.createEmployee = async (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    designation: req.body.designation,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    address: req.body.address,
  });

  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing employee by ID
exports.updateEmployee = async (req, res) => {
  console.log(req);

  const { name, age, gender, designation, phoneNumber, email, address } =
    req.body;
  const updateFields = {};
  if (name) updateFields.name = name;
  if (age) updateFields.age = age;
  if (gender) updateFields.gender = gender;
  if (designation) updateFields.designation = designation;
  if (phoneNumber) updateFields.phoneNumber = phoneNumber;
  if (email) updateFields.email = email;
  if (address) updateFields.address = address;

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { upsert: false },

    );

    if (updatedEmployee) {
      res.json(updatedEmployee);
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete an existing employee by ID
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (employee) {
      await Employee.deleteOne({ _id: employee._id });
      res.json({ message: "Employee removed" });
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

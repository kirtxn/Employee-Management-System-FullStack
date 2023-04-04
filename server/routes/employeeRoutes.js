const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

// Get all employees
router.get("/", employeeController.getEmployees);

// Get a single employee by ID
router.get("/:id", employeeController.getEmployeeById);

// Create a new employee
router.post("/", employeeController.createEmployee);

// Update an existing employee by ID
router.patch("/:id", employeeController.updateEmployee);

// Delete an existing employee by ID
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;

const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "*"
}));
app.use(express.json());

const MONGODB_URI="mongodb://localhost:27017/EmployeeDatabase"

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/employees", employeeRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

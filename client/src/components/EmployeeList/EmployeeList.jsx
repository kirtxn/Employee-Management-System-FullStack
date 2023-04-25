import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EmployeeList.css";
import EmployeeTable from "../EmployeeTable/EmployeeTable";
import { Link } from "react-router-dom";
const EmployeeList = () => {
  const [employeeData, setEmployeeData] = useState();

  useEffect(() => {
    axios
      .get("http://3.110.106.6:5000/employees/")
      .then((res) => {
        const data = res.data;
        setEmployeeData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(employeeData);
  }, [employeeData]);

  console.log(employeeData);
  return (
    <div className="employee-data">
      <Link to="/create-employee">
        <button className="add-button">Create Employee</button>
      </Link>
      {employeeData && <EmployeeTable employeeData={employeeData} />}
    </div>
  );
};

export default EmployeeList;

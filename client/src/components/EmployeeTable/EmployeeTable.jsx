import React, { useState } from "react";
import "./EmployeeTable.css";
import axios from "axios";
import { Link } from "react-router-dom";
const EmployeeTable = ({ employeeData }) => {
  const [data, setData] = useState(employeeData);
  const handleRemove = (id) => {
    axios
      .delete(`http://3.110.106.6:5000/employees/${id}`)
      .then((res) => {
        console.log(res);
        const newData = data.filter((emp) => emp._id !== id);
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="employee-data">
      <table>
        <colgroup span="4"></colgroup>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Designation</th>
          <th>PhoneNumber</th>
          <th>Email</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
        {data.map((emp) => {
          return (
            <tr key={emp._id}>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.gender}</td>
              <td>{emp.designation}</td>
              <td>{emp.phoneNumber}</td>
              <td>{emp.email}</td>
              <td>{emp.address}</td>
              <td>
                <Link to="/update-employee">
                  <button
                    className="button update"
                    style={{ marginBottom: "10px" }}
                  >
                    Update
                  </button>
                </Link>

                <button
                  className="button remove"
                  onClick={() => handleRemove(emp._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default EmployeeTable;

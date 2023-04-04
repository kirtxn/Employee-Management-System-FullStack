import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import "./CreateEmployee.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateEmployee = () => {
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState("");
  //   const [gender, setGender] = useState("");
  //   const [designation, setDesignation] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    designation: "",
    phoneNumber: "",
    email: "",
    address: "",
  });
 

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/employees/", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

   
    navigate("/");
    navigate(0);
  };

  return (
    <form class="material-form" onSubmit={handleSubmit} >
      <div class="form-control">
        <label for="name">Employee Name:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div class="form-control">
        <label for="age">Age:</label>
        <input
          type="text"
          id="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>

      <div class="form-control">
        <label for="gender">Gender:</label>
        <input
          type="text"
          id="gender"
          value={formData.gender}
          onChange={handleChange}
        />
      </div>

      <div class="form-control">
        <label for="designation">Designation:</label>
        <input
          type="text"
          id="designation"
          value={formData.designation}
          onChange={handleChange}
        />
      </div>

      <div class="form-control">
        <label for="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div class="form-control">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div class="form-control">
        <label for="address">Address:</label>
        <input
          type="text"
          id="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateEmployee;

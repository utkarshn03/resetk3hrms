import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const { ipapi } = require("../config.json");

const SignUpForm = () => {
  const history = useNavigate();
  const apisignup = ipapi + "/api/user/signup";
  const apidepartment = ipapi + "/api/department";

  const [inputs, setInputs] = useState({
    empid: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    level: "",
    department: "",
  });

  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post(apisignup, {
        username: inputs.username,
        email: inputs.email,
        password: inputs.password,
        level: inputs.level,
        department: inputs.department,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/login")); // Replace with your own logic for handling form submission
  };

  useEffect(() => {
    axios.get(apidepartment).then(response => {
      setItems(response.data);
    });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row g-3">
          <div className="col-md d-flex align-items-stretch justify-content-center">
            <h4 className="text-success mb-0">User Registration</h4>
            <br />

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFirstName">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="fname"
                  value={inputs.fname}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="lname"
                  value={inputs.lname}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={inputs.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formempid">
                <Form.Label for="emplidfloatingInput">EmployeeId</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter employee id"
                  name="empid"
                  value={inputs.empid}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formemplevel">
                <Form.Label for="empllevelfloatingInput">
                  Employee Level
                </Form.Label>
                <select
                  className="form-select"
                  onChange={handleChange}
                  name="level"
                  value={inputs.level}
                >
                  <option value="2">Employee</option>
                  <option value="1">Supervisior</option>
                  <option value="0">Admin</option>
                </select>
              </Form.Group>

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Select Item
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  style={{ maxHeight: "200px", overflowY: "auto" }}
                >
                  {/* {items.map((item) => (
                    <a key={item.id} className="dropdown-item" href="#">
                      {item.name}
                    </a>
                  ))} */}

<a class="dropdown-item" href="#">Item 1</a>
    <a class="dropdown-item" href="#">Item 2</a>
    <a class="dropdown-item" href="#">Item 3</a>
    <a class="dropdown-item" href="#">Item 4</a>
    <a class="dropdown-item" href="#">Item 5</a>
                </div>
              </div>

              <Button variant="primary" type="submit">
                Create User
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

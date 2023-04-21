import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const { ipapi } = require("../config.json");

const Employeecreate = () => {
  const history = useNavigate();
  const apisignup = ipapi + "/api/user/signup";
  const apidepartment = ipapi + "/api/department";

  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    department: "",
    email: "",
    empid: "",
    level: "",
    password: "kiit@123",
    insta: "",
    fb: "",
    twitter: "",
    yt: ""
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
        fname: inputs.fname,
        lname: inputs.lname,
        department: inputs.department,
        email: inputs.email,
        username: inputs.empid,
        level: inputs.level,
        password: inputs.password,
        insta: inputs.insta,
        fb: inputs.fb,
        twitter: inputs.twitter,
        yt: inputs.yt
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/k3/admin/employee")); // Replace with your own logic for handling form submission
  };

  useEffect(() => {
    axios.get(apidepartment).then(response => {
      setItems(response.data);
    });
  }, []);

  return (
    <div>
      <div className="container">
        {/* <h4 className="text-success mb-0">Candidate Registration</h4>
        <p className="mb-3">
          <small className="text-muted">Add Candidate</small>
        </p> */}
        <form onSubmit={handleSubmit}>
          <div className="mt-3 mb-3">
            <div className="border rounded-4 p-4">
              <h5 className="mb-4">Basic Details</h5>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="admreffloatingInput">ID</label>
                    <input
                      type="text"
                      className="form-control"
                      name="empid"
                      id="admreffloatingInput"
                      required
                      value={inputs.empid}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="passfloatingInput">Password</label>
                    <input
                      type="text"
                      className="form-control"
                      name="password"
                      id="passfloatingInput"
                      required
                      readOnly
                      disabled
                      onChange={handleChange}
                      value={inputs.password}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="fnamefloatingInput">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fname"
                      id="fnamefloatingInput"
                      required
                      value={inputs.fname}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="lnamefloatingInput">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lname"
                      id="lnamefloatingInput"
                      required
                      value={inputs.lname}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="relationfloatingInput">Level</label>
                    <select className="form-select" onChange={handleChange} name="level" value={inputs.level}>
                      <option value="">--Select Employee Level--</option>
                      <option value="2">Employee</option>
                      <option value="1">SuperVisior</option>
                      <option value="0">Admin</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="depfloatingInput">Department</label>
                    <select className="form-select" onChange={handleChange} name="department" value={inputs.department}>
                      {items.map((item) => (

                        <option key={item.dep_id} value={item.dep_id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
              </div>
              <h5 className="mb-4">Contact Details</h5>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="emailfloatingInput">Email ID</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="emailfloatingInput"
                      required
                      onChange={handleChange}
                      value={inputs.email}
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="mobilefloatingInput">Moblie no.</label>
                    
                    <input
                      type="tel"
                      maxlength="10"
                      name="phone"
                      pattern="[6-9]{1}[0-9]{9}"
                      className="form-control"
                      id="mobilefloatingInput"
                      required
                      disabled
                      readOnly
                      onChange={handleChange}
                      value={inputs.phone}
                    />
                  </div>
                </div>
              </div>
              
              <h5 className="mb-4">Social Media Details</h5>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="admreffloatingInput">Instagram</label>
                    <input
                      type="text"
                      className="form-control"
                      name="insta"
                      id="admreffloatingInput"
                      required
                      value={inputs.insta}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="fnamefloatingInput">Twitter</label>
                    <input
                      type="text"
                      className="form-control"
                      name="twitter"
                      id="fnamefloatingInput"
                      required
                      value={inputs.twitter}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="fnamefloatingInput">Facebook</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fb"
                      id="fnamefloatingInput"
                      required
                      value={inputs.fb}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="fnamefloatingInput">Youtube</label>
                    <input
                      type="text"
                      className="form-control"
                      name="yt"
                      id="fnamefloatingInput"
                      required
                      value={inputs.yt}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>           
            </div>
          </div>
          {/* <!----><!----><!----> */}

          <div className="mt-3 mb-3">
            <div className="border rounded-4 p-4 text-end">
              <button type="reset" className="btn btn-danger btn">
                Cancel
              </button>
              <button type="submit" className="btn btn-success btn">
                Register
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Employeecreate;

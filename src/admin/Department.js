import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import axios from "axios";
import dayjs from "dayjs";
const ipapi = require("../config.json");

const Department = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  document.title = "K3hrms · Admin";

  // const [validated, setValidated] = useState([]);

  const [inputs, setInputs] = useState({
    name: "",
    dep_id: "",
  });

  const apidepartmentadd = ipapi + "/api/department/add";

  const sendRequest = async () => {
    const res = await axios
      .post(apidepartmentadd, {
        name: inputs.name,
        dep_id: inputs.dep_id,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => alert(inputs));
  };

  return (
    <div>
      <div className="container">
        <h4 className="text-success mb-0">Department Registration</h4>
        <p className="mb-3">
          <small className="text-muted">Add Department</small>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mt-3 mb-3">
            <div className="border col-sm rounded-4 p-4">
              <h5 className="mb-4">Basic Details</h5>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label>Department Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      required
                      value={inputs.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="fnamefloatingInput">Department ID</label>
                    <input
                      type="text"
                      className="form-control"
                      name="dep_id"
                      id="dep_id"
                      required
                      value={inputs.dep_id}
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
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Department;

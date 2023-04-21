import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import moment from "moment";

// import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

import dayjs from "dayjs";
const {ipapi} = require("../config.json");

const Hospitalityform = () => {

  document.title="K3hrms · Hospitality";

  const [inputs, setInputs] = useState({
    eid: "",
    purpose: "",
    total_price: "",
    dop: "",
  });

  const apihospitalityform = ipapi + "/api/hospitality/add";
  console.log(apihospitalityform);

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  };

const [valuetime, setValuetime] = React.useState(
    dayjs().format("YYYY-MM-DD"),
  );

  const handleChangetime = (newValuetime) => {
    console.log(newValuetime)
    const time = new Date(newValuetime.target.value);
    console.log(time)
    var t = new Date(time.getTime() - time.getTimezoneOffset() * 60000).toISOString();
    t = dayjs(t).format("YYYY-MM-DD");
    setValuetime(t);
    console.log(t);
    //avail_date=newValuetime;
  };



  const sendRequest = async () => {
    const res = await axios
      .post(apihospitalityform, {
        eid: inputs.eid,
        purpose: inputs.purpose,
        total_price: inputs.total_price,
        dop: inputs.dop,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => console.log("looks good/")); 
      };

  return (
    <div>
      <div className="container">
        <h4 className="text-success mb-0">Hospitality</h4>
        <p className="mb-3">
          <small className="text-muted">Add Service</small>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mt-3 mb-3">
            <div className="border rounded-4 p-4">
              <h5 className="mb-4">Basic Details</h5>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="dobfloatingInput">
                      Date of Purchase/Service Availed
                    </label>
                    <Form.Control
                      type="date"
                      className="form-control"
                      /* id="dobfloatingInput" */
                      id="start"
                      name="valuetime"
                      /* disabledFuture="true" */
                      max={moment().format("YYYY-MM-DD")}
                      inputFormat="YYYY-MM-DD"
                      value={valuetime}
                      onChange={handleChangetime}
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="relationfloatingInput">
                      Service Availed Type
                    </label>
                    <select className="form-select" required onChange={handleChange} values={inputs.purpose} name="purpose">
                      <option value="">-- Select Service Type --</option>
                      <option value="Food">Food</option>
                      <option value="Hotel">Hotel</option>
                      <option value="Party Booking">Party Booking</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="input-group mb-3">
                    <span className="input-group-text">₹</span>

                    <input
                      type="text"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      required
                      onChange={handleChange}
                      values={inputs.total_price}
                      name="total_price"
                    />
                    <span className="input-group-text">.00</span>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <label className="input-group-text" for="inputGroupFile01">
                    Upload
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile01"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!----><!----><!----> */}
          <div className="mt-3 mb-3">
            <div className="border rounded-4 p-4 text-end">
              <button type="button" className="btn btn-danger btn">
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

export default Hospitalityform;

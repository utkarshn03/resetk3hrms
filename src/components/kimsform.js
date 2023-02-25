import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import moment from "moment";
import dayjs from "dayjs";

// import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
const ipapi = require('../config.json');
 
const Kimsform = () => {
  
    const [inputs, setInputs] = useState({
        eid: "3478g",
        
      });
    
      const apikimsform = ipapi+"/api/kims/adddata";
    
      const handleChange = (e) => {
        setInputs((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
        console.log(e.target.value);
      };
    
      const sendRequest = async () => {
        const res = await axios
          .post(apikimsform, {
            eid: inputs.eid,
            
          })
          .catch((err) => console.log(err));
        const data = await res.data;
        return data;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(() => alert(inputs)); //to meghna
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


  return (
    <div>
      <div className="container">
        <h4 className="text-success mb-0">Patient Registration</h4>
        <p className="mb-3">
          <small className="text-muted">Add Patient</small>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mt-3 mb-3">
            <div className="border rounded-4 p-4">
              <h5 className="mb-4">Basic Details</h5>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="admreffloatingInput">Uhid No.</label>
                    <input
                      type="text"
                      className="form-control"
                      id="uhidfloatingInput"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="fnamefloatingInput">Patient Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fnamefloatingInput"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="dobfloatingInput">Date of Purchase/Service Avail</label>
                    <Form.Control
                      type="date"
                      className="form-control"
                      /* id="dobfloatingInput" */
                      id="start"
                      name="valuetime"
                      /* disabledFuture="true" */
                      max={moment().format("YYYY-MM-DD")}
                      inputFormat="YYYY-MM-DD"
                      disabled
                      value={valuetime}
                      onChange={handleChangetime}
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="relationfloatingInput">Relation</label>
                    <select className="form-select" required>
                      <option value="">-- Select Relation --</option>
                      <option value="Self">Self</option>
                      <option value="Friend">Friend</option>
                      <option value="Relative">Relative</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="mobilefloatingInput">Moblie no.</label>
                    <input
                      type="tel"
                      maxlength="10"
                      pattern="[6-9]{1}[0-9]{9}"
                      className="form-control"
                      id="mobilefloatingInput"
                      required
                      onChange={handleChange}
                    />
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
                      placeholder="Amount paid"
                      onChange={handleChange}
                      required
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

export default Kimsform;

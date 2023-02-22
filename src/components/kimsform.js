import React, { useEffect, useState } from "react";
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';

// import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
const ipapi = require('../config.json');
 
const Kimsform = () => {
  
    const [inputs, setInputs] = useState({
        eid: "3478g",
        adm_ref_no: "",
        student_name: "",
        student_address: "",
        city: "",
        state: "",
        pincode: "",
        student_ph: "",
        student_email: "",
        student_rel: "",
        amount_by_candidate: "",
        proof_docu: "",
        student_dep: "",
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
            adm_ref_no: inputs.adm_ref_no,
            student_name: inputs.student_name,
            student_address: inputs.student_address,
            city: inputs.city,
            state: inputs.state,
            pincode: inputs.pincode,
            student_rel: inputs.rel,
            student_ph: inputs.student_ph,
            student_email: inputs.student_email,
            amount_by_candidate: inputs.amount_by_candidate,
            docu_img: inputs.docu_img,
            contains_det: inputs.contains_det,
            student_dep: inputs.student_dep,
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
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="dobfloatingInput">Date of Purchase/Service Avail</label>
                    <input
                      type="date"
                      className="form-control"
                      id="dopfloatingInput"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="relationfloatingInput">Relation</label>
                    <select className="form-select" required>
                      <option value="">-- Select Relation --</option>
                      <option value="Child of Friend">Child of Friend</option>
                      <option value="Child of Relative">Child of Relative</option>
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

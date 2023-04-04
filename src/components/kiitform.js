import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
const { ipapi } = require("../config.json");

function Kiitform (props) {

  document.title="K3hrms · Kiitform";
  
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

  const apikiitform = ipapi+"/api/kiit/adddata";

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  };

  const sendRequest = async () => {
    const res = await axios
      .post(apikiitform, {
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
    sendRequest().then(() => props.showAlert("Form has been submitted successfully", "success")); //to meghna
  };

  return (
    <div>
      <div className="container">
        <h4 className="text-success mb-0">Candidate Registration</h4>
        <p className="mb-3">
          <small className="text-muted">Add Candidate</small>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mt-3 mb-3">
            <div className="border rounded-4 p-4">
              <h5 className="mb-4">Basic Details</h5>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="admreffloatingInput">Admission Ref. No.</label>
                    <input
                      type="text"
                      className="form-control"
                      name="adm_ref_no"
                      id="admreffloatingInput"
                      required
                      value={inputs.adm_ref_no}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="fnamefloatingInput">Student Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="student_name"
                      id="fnamefloatingInput"
                      required
                      value={inputs.student_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="relationfloatingInput">Relation</label>
                    <select className="form-select" onChange={handleChange} name="student_rel" value={inputs.student_rel}>
                      <option value="">-- Select Relation --</option>
                      <option value="Child of Friend">Child of Friend</option>
                      <option value="Child of Relative">
                        Child of Relative
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="depfloatingInput">Department</label>
                    <select className="form-select" onChange={handleChange} name="student_dep" value={inputs.student_dep}>
                      <option value="">-- Select Department --</option>
                      <option value="Engineering">Engineering</option>
                      <option value="ITI">ITI</option>
                      <option value="Polytechnic">Polytechnic</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="addressfloatingInput">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="student_address"
                      id="inputAddress"
                      required
                      onChange={handleChange}
                      value={inputs.student_address}
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="cityfloatingInput">City</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      id="inputCity"
                      required
                      onChange={handleChange}
                      value={inputs.city}
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="statefloatingInput">State</label>
                    <select className="form-select" required onChange={handleChange} name="state" value={inputs.state}>
                      <option value="">-- Select State --</option>
                      <option value="Andaman and Nicobar Islands">
                        Andaman and Nicobar Islands
                      </option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">
                        Arunachal Pradesh
                      </option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Dadra and Nagar Haveli and Daman and Diu">
                        Dadra and Nagar Haveli and Daman and Diu
                      </option>
                      <option value="Delhi">Delhi</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jammu and Kashmir">
                        Jammu and Kashmir
                      </option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Ladakh">Ladakh</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Puducherry">Puducherry</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="zipfloatingInput">Pincode</label>
                    <input
                      type="number"
                      className="form-control"
                      name="pincode"
                      id="inputzip"
                      onChange={handleChange}
                      value={inputs.pincode}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="emailfloatingInput">Email ID</label>
                    <input
                      type="email"
                      className="form-control"
                      name="student_email"
                      id="emailfloatingInput"
                      required
                      onChange={handleChange}
                      value={inputs.student_email}
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="mobilefloatingInput">Moblie no.</label>
                    
                    <input
                      type="tel"
                      maxlength="10"
                      name="student_ph"
                      pattern="[6-9]{1}[0-9]{9}"
                      className="form-control"
                      id="mobilefloatingInput"
                      required
                      onChange={handleChange}
                      value={inputs.student_ph}
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
                      name="amount_by_candidate"
                      aria-label="Amount (to the nearest dollar)"
                      placeholder="Amount paid by the candidate"
                      onChange={handleChange}
                      required
                      value={inputs.amount_by_candidate}
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

export default Kiitform;

import React from "react";
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';

// import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.css";

const kiitform = () => {
  // const [validated, setValidated] = useState([]);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  return (
    <div>
      <div className="container">
        <h4 className="text-success mb-0"></h4>
        <p className="mb-3">
          <small className="text-muted">Add Candidate</small>
        </p>
        <form>
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
                      id="admreffloatingInput"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="fnamefloatingInput">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fnamefloatingInput"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="lnamefloatingInput">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lnamefloatingInput"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="dobfloatingInput">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      id="dobfloatingInput"
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
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="depfloatingInput">Department</label>
                    <select className="form-select" required>
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
                      id="inputAddress"
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="cityfloatingInput">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="statefloatingInput">State</label>
                    <select className="form-select" required>
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
                    <label for="zipfloatingInput">Zip</label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputzip"
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
                      id="emailfloatingInput"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="mobilefloatingInput">Moblie no.</label>
                    <input
                      type="tel"
                      maxlength="10"
                      pattern="[6-9]{1}[0-9]{9}"
                      className="form-control"
                      id="mobilefloatingInput"
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
            <button type="button" className="btn btn-danger btn-lg">
                Cancel
              </button>
              <button type="disabled" className="btn btn-success btn-lg">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default kiitform;

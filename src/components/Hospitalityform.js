import React from "react";
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';

// import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.css";

const hospitalityform = () => {
  
  const [inputs, setInputs] = useState({
    eid: "3478g",
    
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
    sendRequest().then(() => alert(inputs)); //to meghna
  };

  return (
    <div>
      <div className="container">
        <h4 className="text-success mb-0">Hospitality</h4>
        <p className="mb-3">
          <small className="text-muted">Add Service</small>
        </p>
        <form>
          <div className="mt-3 mb-3">
            <div className="border rounded-4 p-4">
              <h5 className="mb-4">Basic Details</h5>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="dobfloatingInput">Date of Purchase/Service Availed</label>
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
                    <label for="relationfloatingInput">Service Availed Type</label>
                    <select className="form-select" required>
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
                <button type="disabled" className="btn btn-success btn">
                Add
                </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default hospitalityform;

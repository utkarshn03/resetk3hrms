import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import dayjs from "dayjs";
const ipapi = require('../config.json');

const Templeform = () => {

  document.title="K3hrms · Templeform";

  // const [validated, setValidated] = useState([]);

  const [inputs, setInputs] = useState({
    eid: "3478g",
    
  });

  const apitempleform = ipapi+"/api/temple/adddata";

  const sendRequest = async () => {
    const res = await axios
      .post(apitempleform, {
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

  const [valuetime, setValuetime] = React.useState(dayjs().format('MM-DD-YYYY'));
    const handleChangetime = (newValuetime) => {
        console.log(newValuetime);
        const time = new Date(newValuetime);
        const t = new Date(time.getTime() - time.getTimezoneOffset()*60000).toISOString();
        setValuetime(t);
        console.log(t);
        //avail_date=newValuetime;
    };

  return (
    <div>
      <div className="container">
        <h4 className="text-success mb-0">Temple Trust</h4>
        <p className="mb-3">
          <small className="text-muted">Add Service Availed</small>
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
                      id="dopsfloatingInput"
                      required
                      onChange={handleChangetime}
                      
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="relationfloatingInput">Service Availed Type</label>
                    <select className="form-select" required>
                      <option value="">-- Select Service Type --</option>
                      <option value="Prasad">Prasad</option>
                      <option value="Place Booking">Place Booking</option>
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

export default Templeform;

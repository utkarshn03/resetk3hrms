import React, {useState} from "react";
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';

// import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.css";
const ipapi = require('../config.json');


const options = [
    { name: "One", id: 1 },
    { name: "Two", id: 2 },
    { name: "Three", id: 3 },
    { name: "four", id: 4 }
  ];

const Kissform = () => {

    // const [dataTable, setDataTable] = useState([]);
    // console.log(dataTable);
  
    // const Tablerow = ({ data, column }) => {
    //   return (        
    //       <tbody>
    //         {data.map((item, index) => (
    //           <TableRow item={item} column={column} />
    //         ))}
    //       </tbody>
    //   );
    // };
  
    // const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
    // const TableRow = ({ item, column }) => (
    //   <tr>
    //     {column.map((columnItem, index) => {
    //       if (columnItem.value.includes(".")) {
    //         const itemSplit = columnItem.value.split("."); //['address', 'city']
    //         return <td>{item[itemSplit[0]][itemSplit[1]]}</td>;
    //       }
  
    //       return <td>{item[`${columnItem.value}`]}</td>;
    //     })}
    //   </tr>
    // );
  
    // //axios 
    // const apikiss = ipapi+"/getall";
  
    // useEffect(() => {
    //   axios(apikiit)
    //     .then((res) => setDataTable(res.data))
    //     .catch((err) => console.log(err));
    // }, []);
  
    // //table columns
  
    // const column = [
    //   { heading: "Admission Ref.", value: "adm_ref_no" },
    //   { heading: "Name", value: "student_name" },
    //   { heading: "City", value: "city" },
    //   { heading: "Phone", value: "ph_no" },
    //   { heading: "Department", value: "student_det" },
    //   // { heading: 'Document', value: 'proof_docu.links' },
    // ];
  


    const [val, setVal] = useState([]);
  console.log(val);
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
        <h4 className="text-success mb-0">Add Cart</h4>
        <p className="mb-3">
          <small className="text-muted">Add Product</small>
        </p>
        <form>
          <div className="mt-3 mb-3">
            <div className="border rounded-4 p-4">
              <h5 className="mb-4">Basic Details</h5>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="dobfloatingInput">Date of Purchase</label>
                    <input
                      type="date"
                      className="form-control"
                      id="dobfloatingInput"
                      required
                      readOnly
                      disabled
                    />
                  </div>
                </div>

                <div className="col-sm">
                  <div className="mb-3">
                    <label for="itemsfloatingInput">Items</label>
                    <select
                      className="form-select"
                      value={val} onChange={(e) => setVal(e.target.value)}
                      required
                    >
                      {options.map((o) => {
                        const { name, id } = o;
                        return <option value={id}>{name}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Product Id"
                      value={"hello"}
                      disabled
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      label="Enter Quantity"
                      placeholder="Enter Quantity"
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="input-group mb-3">
                    <span className="input-group-text">₹</span>

                    <input
                      type="text"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      disabled
                      readOnly
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
                <button type="disabled" className="btn btn-success btn">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="mt-3 mb-4">
            <div className="border rounded-4 p-4">
              <h5 className="text-success mb-4">Cart</h5>
              <div className="row">
            <div className="col-sm">
              <div className="table-responsive-sm">
                {/* <table
                  className="table table-hover table-responsive-sm"
                  id="admsearch"
                >
                  <thead>
                    <tr>
                      {column.map((item, index) => (
                        <TableHeadItem item={item} />
                      ))}
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    
                  <Tablerow data={dataTable} column={column}/>
                  </tbody>
                </table> */}
              </div>
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

export default Kissform;

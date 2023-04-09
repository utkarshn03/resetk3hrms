import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import Kiitform from "./Kiitform"
// import kiittable from "";
const { ipapi } = require("../config.json");
const Kiittable = () => {

  document.title="K3hrms · Kiit";

  const [dataTable, setDataTable] = useState([]);
  // const [serialNumber, setSerialNumber] = useState(1);
  let serialNumber =1;
  console.log(dataTable);

  const Table = ({ data, column }) => {
    return (
      <table className="table table-hover table-responsive-sm"
      id="admsearch">
        <thead>
          <tr>
            
            {column.map((item, index) => <TableHeadItem item={item} />)}
            <th>Actions</th>
          </tr>
          

          
        </thead>
        <tbody className="table-group-divider">
        
          {data.map((item, index) => <TableRow item={item} column={column} />)}
        </tbody>
        <tfoot  className="table-group-divider">
        <tr>
            {column.map((item, index) => <TableHeadItem item={item} />)}
            <th>Actions</th>
          </tr>
        </tfoot>
      </table>
    )
  }

  const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
  const TableRow = ({ item, column }) => (
    
    <tr>
      
      {column.map((columnItem, index) => {
        
        return <>
        
        <td>{item[`${columnItem.value}`]}</td></>;
      })}
      <td>
      <button className="btn btn-body-color" 
        // onClick={() => handleView(item._id)}
        >
          View</button>
        <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>
          Del
        </button>
      </td>
      
    </tr>
  );

  //axios
  const apikiittable = ipapi+"/api/kiit/getdata";
  const apikiittabledelete = ipapi+"/api/kiit/delete";

  useEffect(() => {
    axios.get(apikiittable)
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
  },[]);

  //table columns

  const column = [
    { heading: "Serial Number", value: serialNumber},
    { heading: "Admission Ref.", value: "adm_ref_no" },
    { heading: "Name", value: "student_name" },
    { heading: "Email", value: "student_email" },
    { heading: "Phone", value: "student_ph" },
    { heading: "Amount (₹)", value: "amount_by_candidate" },
    // { heading: 'Document', value: 'proof_docu.links' },
  ];

  const handleDelete = (id) => {
    console.log(id);
    axios.post(apikiittabledelete, {id})
      .then((res) => {
        setDataTable(dataTable.filter((item) => item._id !== id));
      })
      .catch((err) => console.log("err",err));
  };


  const handleView = (id) => {

  };

  const navigate = useNavigate() 
  const handleClick= async(e)=>{
       e.preventDefault()
       navigate("./k3/kiit/form")
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="bg-secondary bg-opacity-10 py-5">
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h4 className="text-success mb-0">
                Kiit Admission <span className="text-primary">(0)</span>
              </h4>
              <p className="mb-3">
                <small className="text-muted"></small>
              </p>
            </div>
            <div className="col-sm-auto">
              <button className="btn btn-success mx-2" type="button" data-toggle="modal" data-target="#exampleModalCenter" variant="primary" onClick={handleShow}>
               
                Add Candidate Details
              </button>
            </div>
          </div>

      <Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-success">Add Candidate Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Kiitform/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


          <div className="row">
            <div className="col-sm">
              <label
                for="admSelect"
                className="form-label"
                onkeyup="myFunction()"
              >
                Select Department
              </label>
              <select
                className="form-select"
                aria-label="Select Department"
                id="admSelect"
              >
                <option value="">All</option>
                <option value="Engineering">Engineering</option>
                <option value="ITI">ITI</option>
                <option value="Polytechnic">Polytechnic</option>
              </select>
            </div>

            <div className="col-sm">
              <div className="text-sm-end">
                <label for="searchInput" className="form-label">
                  Search
                </label>
              </div>
              <input
                type="text"
                className="form-control"
                id="searchInput"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm ">
              <div className="table-responsive-sm">
                <Table data={dataTable} column={column}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kiittable;

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
  const[test,setTest]=useState(1);
  console.log(dataTable);

  const Table = ({ data, column }) => {
    return (
      <table className="table table-hover table-responsive-sm"
      id="admsearch">
        <thead>
          <tr>
            {column.map((item, index) => <TableHeadItem item={item} />)}
          </tr>
          
        </thead>
        <tbody className="table-group-divider">
          {data.map((item, index) => <TableRow item={item} column={column} />)}
        </tbody>
        <tfoot  className="table-group-divider">
        <tr>
            {column.map((item, index) => <TableHeadItem item={item} />)}
          </tr>
        </tfoot>
      </table>
    )
  }

  const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
  const TableRow = ({ item, column }) => (
    <tr>
      {column.map((columnItem, index) => {
        if (columnItem.value.includes(".")) {
          const itemSplit = columnItem.value.split("."); //['address', 'city']
          return <td>{item[itemSplit[0]][itemSplit[1]]}</td>;
        }

        return <td>{item[`${columnItem.value}`]}</td>;
      })}
      <td>
        <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>Delete</button>
        <button className="btn btn-white" onClick={() => handleView(item._id)}>View</button>
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
  },[test]);

  //table columns

  const column = [
    { heading: "Serial no", value: "adm_ref_no" },
    { heading: "Admission Ref.", value: "adm_ref_no" },
    { heading: "Name", value: "student_name" },
    { heading: "City", value: "city" },
    { heading: "Phone", value: "student_ph" },
    { heading: "Amount (₹)", value: "amount_by_candidate" },
    { heading: "Actions"}
    // { heading: 'Document', value: 'proof_docu.links' },
  ];

  const handleDelete = (id) => {
    console.log(id);
    setTest(test+1);
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Kiitform/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes and close
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

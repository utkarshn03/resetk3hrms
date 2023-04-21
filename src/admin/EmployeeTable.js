import React, { useEffect, useState } from "react";
import axios from "axios";

import Employeeform from "./Employeecreate"
import "bootstrap/dist/css/bootstrap.css";
import { Modal, Button } from "react-bootstrap";
const { ipapi } = require("../config.json");

const Employeetable = (props) => {
  
  const [showregister, setShowregister] = useState(false);
  const [showedit, setShowedit] = useState(false);

  const handleClose = () => setShowregister(false);
  const handleShow = () => setShowregister(true);

  const handleCloseedit = () => setShowedit(false);
  const handleShowedit = () => setShowedit(true);

  document.title="K3hrms · Employee";

  const [dataTable, setDataTable] = useState([]);

  console.log(dataTable);

  const Table = ({ data, column }) => {
    return (
      <table className="table table-hover table-responsive-sm" id="admsearch">
        <thead>
          <tr>
            {column.map((item, index) => (
              <TableHeadItem item={item} />
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {data.map((item, index) => (
            <TableRow item={item} column={column} />
          ))}
        </tbody>
        <tfoot className="table-group-divider">
          <tr>
            {column.map((item, index) => (
              <TableHeadItem item={item} />
            ))}
            <th>Actions</th>
          </tr>
        </tfoot>
      </table>
    );
  };

  const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
  const TableRow = ({ item, column }) => (
    <tr>

      {column.map((columnItem, index) => {
        
        return <td>{item[columnItem.value]}</td>;
      })}
      <td>
      <button
          className="btn btn-secondary"
          onClick={() => handleView(item._id)}
        >
          View
      </button>
      <button
          className="btn btn-secondary"
          onClick={() => {  handleEdit(item._id); handleShowedit()}}
        >
          Edit
      </button>
        <button
          className="btn btn-danger"
          onClick={() => {handleDelete(item._id)}}
          // onClick={handleShow} 
        >
          Delete
        </button>
      </td>
    </tr>
  );

  //api
  const apiemployeetable = ipapi + "/api/user/getall";
  const apidepartmentdelete = ipapi + "/api/department/delete"; 
  const apiempedit = ipapi + "/api/department/edit"; 

  useEffect(() => {
    axios
      .get(apiemployeetable)
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
  },[]);

  //table columns

  const column = [
    { heading: "Id", value: "username" },
    { heading: "Fisrt Name", value: "fname" },
    { heading: "Last Name", value: "lname" },
    { heading: "Level", value: "level"},
    { heading: "Department", value: "department"}
  ];
   
  const handleDelete = (id) => {
    axios
      .post(apidepartmentdelete, { id })
      .then((res) => {
        setDataTable(dataTable.filter((item) => item._id !== id));
      })
      .catch((err) => console.log("good"));
  };

  const handleEdit = (id) => {
    axios
      .post(apiempedit, { id })
      .then((res) => {
        setDataTable(dataTable.filter((item) => item._id !== id));
      })
      .catch((err) => console.log("err", err));
  };

  const handleView = (id) => {
    axios
      .get(apiemployeetable, {id})
      .then((res) => {
        console.log(id)
      }
      )
      .catch((err) => console.error(err));
  }

  return (
    <div className="bg-secondary bg-opacity-10 py-5">
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h4 className="text-success mb-0">
                Employee Table <span className="text-primary"></span>
              </h4>
              <p className="mb-3">
                <small className="text-muted"></small>
              </p>
            </div>
            <div className="col-sm-auto">
              <button onClick={handleShow} className="btn btn-success mx-2">
                Add Employee
              </button>
            </div>
            <div></div>
          </div>
          <Modal show={showregister} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
          <Modal.Header closeButton>
          <Modal.Title>
          <h4 className="text-success mb-0">Employee Registration</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Employeeform/>
        </Modal.Body>
      </Modal>

      <Modal show={showedit} onHide={handleCloseedit} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
          <Modal.Header closeButton>
          <Modal.Title>
          <h4 className="text-success mb-0">Employee Registration</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Employeeform/>
        </Modal.Body>
      </Modal>
           
          <div className="row">
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
            <div className="col-sm">
              <div className="table-responsive-sm">
                <Table data={dataTable} column={column} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employeetable;

import React, { useEffect, useState } from "react";
import axios from "axios";

import Departmentform from "./Department"
import "bootstrap/dist/css/bootstrap.css";
import { Modal, Button } from "react-bootstrap";
const { ipapi } = require("../config.json");

const Departmentable = (props) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  document.title="K3hrms · Admin";

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
          className="btn btn-danger"
          onClick={() => handleDelete(item._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );

  //api
  const apidepartmenttable = ipapi + "/api/department";
  const apidepartmentdelete = ipapi + "/api/department/delete";  

  useEffect(() => {
    axios
      .get(apidepartmenttable)
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
  },[]);

  //table columns

  const column = [
    { heading: "Department Name", value: "name" },
    { heading: "Department Id", value: "dep_id" }
  ];
   
  const handleDelete = (id) => {
    axios
      .post(apidepartmentdelete, { id })
      .then((res) => {
        setDataTable(dataTable.filter((item) => item._id !== id));
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <div className="bg-secondary bg-opacity-10 py-5">
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h4 className="text-success mb-0">
                Department Table <span className="text-primary"></span>
              </h4>
              <p className="mb-3">
                <small className="text-muted"></small>
              </p>
            </div>
            <div className="col-sm-auto">
              <button onClick={handleShow} className="btn btn-success mx-2">
                Add Department Details
              </button>
            </div>
            <div></div>
          </div>
          <Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
          <Modal.Header closeButton>
          <Modal.Title>
          <h4 className="text-success mb-0">Department Registration</h4>
        <p className="mb-3">
          <small className="text-muted">Add Department</small>
        </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Departmentform/>
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

export default Departmentable;

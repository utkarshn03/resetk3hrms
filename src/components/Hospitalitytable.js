import React, { useEffect, useState } from "react";
import axios from "axios";
import Hospitalityform from "./Hospitalityform"
import { Modal, Button } from "react-bootstrap";
//import DataTable from "react-data-table-component";
const { ipapi } = require("../config.json");

const Hospitalitytable = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  document.title="K3hrms · Hospitality";

  const [dataTable, setDataTable] = useState([]);
  const [serialNumber, setSerialNumber] = useState(1);

  console.log(dataTable);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthIndex = new Date().getMonth();
  let monthName = monthNames[monthIndex];

  const dateString = "2015-03-10T10:50:30.389Z";
  const dateObject = new Date(dateString);
  const month = dateObject.getMonth();
  //console.log(monthNames[month]);

  const complicatedDateString = "2015-03-10T10:50:30.389Z";
  const dateObjectfy = new Date(complicatedDateString);
  const simpleDateString = dateObjectfy.toLocaleDateString();
  //console.log(simpleDateString); // Output: "3/10/2015"

  // render jsx

  const Table = ({ data, column }) => {
    return (
      <table className="table table-hover table-responsive-sm" id="admsearch">
        <thead>
          <tr>
            {column.map((item, index) => (
              <TableHeadItem item={item} />
            ))}
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
          </tr>
        </tfoot>
      </table>
    );
  };


  const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
  const TableRow = ({ item, column }) => (
    <tr>
      {column.map((columnItem, index) => {

      {column.map((columnItem, index) => {
        if (columnItem.value === "dop") {
          //console.log(columnItem.heading);
          console.log(item[columnItem.value]);
          const dateofpr = item[columnItem.value];
          const dateObjectfi = new Date(dateofpr);

          item[columnItem.value]=dateObjectfi.toLocaleDateString();
          console.log(item[columnItem.value]);
        return <td>{item[columnItem.value]}</td>;
      })}
      <td>
        <button className="btn btn-secondary">View</button>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(item._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );

  //axios
  const apihospitalitytable = ipapi + "/api/hospitality/get";
  const apihospitalitytabledelete = ipapi + "/api/hospitality/delete";

  useEffect(() => {
    axios
      .get(apihospitalitytable)
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
  },[]);

  //table columns

  const column = [
    { heading: "Purpose", value: "purpose" },
    { heading: "Date of Purchase", value: "dop" },
    { heading: "Total Price (₹)", value: "total_price" },
    // { heading: 'Document', value: 'proof_docu.links' },
  ];
   
  const handleDelete = (id) => {
    axios
      .post(apihospitalitytabledelete, { id })
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
                Hospitality Table <span className="text-primary">(0)</span>
              </h4>
              <p className="mb-3">
                <small className="text-muted"></small>
              </p>
            </div>
            <div className="col-sm-auto">
              <button onClick={handleShow} className="btn btn-success mx-2">
                Add Candidate Details
              </button>
            </div>
            <div></div>
          </div>
          <Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
          <Modal.Header closeButton>
          <Modal.Title>
          <h4 className="text-success mb-0">Candidate Registration</h4>
        <p className="mb-3">
          <small className="text-muted">Add Candidate</small>
        </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Hospitalityform/>
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
                Select Month
              </label>
              <select
                className="form-select"
                aria-label="Select Department"
                id="admSelect"
              >
                <option value={monthIndex}>{monthName}</option>
                <option value="0">January</option>
                <option value="1">Hotel</option>
                <option value="2">Party Booking</option>
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

export default Hospitalitytable;

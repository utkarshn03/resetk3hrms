import React, { useEffect, useState } from "react";
import axios from "axios";
//import DataTable from "react-data-table-component";
const { ipapi } = require("../config.json");
//const ExpanddedComponent = ({data}) => <pre>{JSON.stringify(data, null, 2)}</pre>

// import kiittable from "";

const Hospitalitytable = (props) => {

  document.title="K3hrms · Hospitality";

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
        if (columnItem.value.includes(".")) {
          const itemSplit = columnItem.value.split("."); //['address', 'city']
          return <td>{item[itemSplit[0]][itemSplit[1]]}</td>;
        }
        return <td>{item[`${columnItem.value}`]}</td>;
      })}
      <td>
        <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>Delete</button>
      </td>
    </tr>
  );

  //axios
  const apihospitalitytable = ipapi + "/api/hospitality/get";
  const apihospitalitytabledelete = ipapi + "/api/hospitality/delete";

  useEffect(() => {
    axios(apihospitalitytable)
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
  });

  //table columns

  const column = [
    { heading: "Purpose", value: "purpose" },
    { heading: "Date of Purchase", value: "dop" },
    { heading: "Total Price (₹)", value: "total_price" },
    // { heading: 'Document', value: 'proof_docu.links' },
  ];

  const handleDelete = (id) => {
    console.log(id);
    axios.post(apihospitalitytabledelete, {id})
      .then((res) => {
        setDataTable(dataTable.filter((item) => item._id !== id));
      })
      .catch((err) => console.log("err",err));
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
              <a href="/k3/hospitality/form" className="btn btn-success mx-2">
                Add Candidate Details
              </a>
            </div>
          </div>

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
                <option value="Food">Food</option>
                <option value="Hotel">Hotel</option>
                <option value="Party Booking">Party Booking</option>
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

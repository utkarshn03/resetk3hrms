import React, {useEffect, useState} from "react";
import axios from "axios";
const { ipapi } = require('../config.json');

// import kiittable from "";

const Kiittable = () => {


  const [dataTable, setDataTable] = useState([]);
  console.log(dataTable);

  const Tablerow = ({ data, column }) => {
    return (        
        <tbody>
          {data.map((item, index) => (
            <TableRow item={item} column={column} />
          ))}
        </tbody>
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
    </tr>
  );

  //axios 

  useEffect(() => {
    axios(ipapi)
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
  }, []);

  //table columns

  const column = [
    { heading: "Admission Ref.", value: "adm_ref_no" },
    { heading: "Name", value: "student_name" },
    { heading: "City", value: "city" },
    { heading: "Phone", value: "ph_no" },
    { heading: "Department", value: "student_det" },
    // { heading: 'Document', value: 'proof_docu.links' },
  ];

  return (
    
    <div class="bg-secondary bg-opacity-10 py-5">
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
              <a href="form.html" className="btn btn-success mx-2">
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
            <div className="col-sm">
              <div className="table-responsive-sm">
                <table
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
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




export default Kiittable;

import React from "react";
// import axios from "axios";
// import kiittable from "";

const Kiittable = () => {
//   const [countries, setCountries] = useState([]);

//   const getKiitdata = async () => {
//     try {
//       const response = await axios.get("https://restcountries.com/v2/all");
//     } catch (error) {}
//   };

  return (
    <>
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
              <label for="admSelect" className="form-label" onkeyup="myFunction()">
                Select Department
              </label>
              <select
                className="form-select"
                aria-label="Select Department"
                id="admSelect"
              >
                <option value="">All</option>
                <option value="@mdo">@mdo</option>
                <option value="@fat">@fat</option>
                <option value="@twitter">@twitter</option>
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
                      <th scope="col">Adm. Ref.</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Department</th>
                      <th scope="col">City</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>hello</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Kiittable;
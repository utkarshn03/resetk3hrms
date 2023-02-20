import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

const employeedet = () => {
  return (
    <div><div className="bg-dark bg-opacity-25 py-5">
    <div className="container">
      <div className="bg-white rounded-4 p-4 mb-3">
        <div className="row">
          <div className="col-sm-8 d-flex align-items-stretch">
            <div className="bg-white rounded-4 p-5 flex-fill">
              <div className="row mb-3">
                <div className="col">
                  <h4 className="text-success mb-3">Employee Detail</h4>
                </div>
                <div className="col-auto text-end">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    title="Will be active soon"
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="ratio ratio-1x1" title="Will be active soon">
                    <div className="d-flex align-items-center justify-content-center border text-center">
                      <div></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div>
                    <small className="text-muted">Employee ID: </small>
                    <p className="lead mb-3">Name: </p>
                    <small className="text-muted">Contact / Address</small>
                    <p className="mb-3">
                      patia, Bhubaneswar, Odisha
                      <br />
                      Ph. 7978988100, Email: webmasterkiit@kiit.ac.in
                    </p>
                    <small className="text-muted">Sports Director</small>
                    <p className="mb-0">
                      Dr. Gaganendu Dash
                      <br />
                      <small>
                        <span className="me-3">
                          Email: sports.kiit@gmail.com
                        </span>
                        <span className="me-3">Mobile: 9437020244</span>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default employeedet;
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

// let getimage = document.getElementbyId('test');
//     getimage.src= "data"

//     fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/435828')
//     .then((response) => response.json())
//     .then(data => getimage.src = data.primaryImage);
    
const Employeedet = () => {
  return (
    <div><div className="bg-dark bg-opacity-25 py-3">
    <div className="container">
      <div className="bg-white rounded-4 p-2 mb-2">
        <div className="row">
          <div className="col d-flex align-items-stretch">
            <div className="bg-white rounded-7 p-2 flex-fill">
              <div className="row">
                <div className="col-sm-3">
                  <div className="ratio ratio-1x1" title="Will be active soon">
                    <div className="d-flex align-items-center justify-content-center border text-center">
                      <div></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div>
                    <small className="text-muted">Employee ID: </small>
                    <p className="lead mb-2">Name: </p>
                    <p className="lead mb-2">Department: </p>
                    <p>
                      <br />
                      <small>
                        <span className="me-3">
                          Email: 
                        </span>
                        <br />
                        <span className="me-3">Mobile: </span>
                      </small>
                    </p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="ratio ratio-1x1" title="Will be active soon">
                    <div className="d-flex align-items-center justify-content-center border text-center">
                      <div></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="ratio ratio-1x1" title="Will be active soon">
                    <div className="d-flex align-items-center justify-content-center border text-center">
                      <div>
                        <img src='test'/>
                      </div>
                    </div>
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

export default Employeedet;
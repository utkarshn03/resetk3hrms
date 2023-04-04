import React from "react";
import PieChart from "./Doughnutchart.js";
import Monthend from "./Monthend.js";

function Welcomecard() {
  return (
    <div>
      <div className="bg-dark bg-opacity-25 py-5">
        <div className="container">
          <div className="row g-3">
            <div className="col-sm-4 d-flex align-items-stretch">
            <div className="bg-white rounded-4 p-5 flex-fill">
              <PieChart />
            </div>
          </div>
          <div className="col-sm-8 d-flex align-items-stretch">
            <div className="bg-white rounded-4 p-5 flex-fill">
              <Monthend />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcomecard;

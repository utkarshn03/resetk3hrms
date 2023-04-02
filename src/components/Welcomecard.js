import React from "react";
import PieChart from "./Doughnutchart.js";
import Monthend from "./Monthend.js";

function Welcomecard() {
  return (
    <div>
      <div class="bg-dark bg-opacity-25 py-5">
        <div class="container">
          <div class="row g-3">
            <div class="col-sm-4 d-flex align-items-stretch">
            <div class="bg-white rounded-4 p-5 flex-fill">
              <PieChart />
            </div>
          </div>
          <div class="col-sm-4 d-flex align-items-stretch">
            <div class="bg-white rounded-4 p-5 flex-fill">
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

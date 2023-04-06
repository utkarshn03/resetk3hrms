import React from "react";
import Table from 'react-bootstrap/Table';

function Monthend() {
  const tablestyle = {};

  return (
    <>

      <h4 className="text-success mb-0">Month Total Benefit</h4>
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>Department</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>KIIT</td>
              <td>23445</td>
            </tr>
            <tr>
              <td>KIMS</td>
              <td>45638</td>
            </tr>
            <tr>
              <td>KISS</td>
              <td>45638</td>
            </tr>
            <tr>
              <td>Temple</td>
              <td>45638</td>
            </tr>
            <tr>
              <td>Hospitality</td>
              <td>45638</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Monthend;

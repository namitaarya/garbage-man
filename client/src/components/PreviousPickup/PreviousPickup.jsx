import React from "react";
import "./pickup.css";
import Table from 'react-bootstrap/Table';

const PreviousPickup = () => {
  return (
    <div className="prev-pickup">
      <h1>PreviousPickup</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Waste Category</th>
            <th>Quantity (Kg)</th>
            <th>Pickup Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>Domestic</td>
            <td>10</td>
            <td>28-09-2022</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>Domestic</td>
            <td>10</td>
            <td>28-09-2022</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>Domestic</td>
            <td>10</td>
            <td>28-09-2022</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>Domestic</td>
            <td>10</td>
            <td>28-09-2022</td>
          </tr>
          <tr>
            <td>1.</td>
            <td>Domestic</td>
            <td>10</td>
            <td>28-09-2022</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default PreviousPickup;

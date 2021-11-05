import React, { Component } from "react";
import { getPatients } from "./services/fakePatientDataService";

class Patients extends Component {
  state = {
    patients: getPatients(),
  };

  render() {
    const { length: count } = this.state.patients;

    if (count === 0) return <p>目前尚没有患者资料。</p>;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.patients.map((patient) => (
              <tr>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.hometown}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Patients;

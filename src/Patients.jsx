import React, {Component} from "react";
import { getPatients } from "./services/fakePatientDataService";

class Patients extends React.Component {

    state = {
        patients: getPatients()
    };
    
    render() { 
        return <div></div>;
    }
}
 
export default Patients;


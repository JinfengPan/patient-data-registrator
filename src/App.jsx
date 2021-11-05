import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Patients from "./Patients";
import Home from "./home";
import PatientForm from "./PatientForm";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Routes>
          <Route path="/add" element={<PatientForm />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    );
  }
}

export default App;

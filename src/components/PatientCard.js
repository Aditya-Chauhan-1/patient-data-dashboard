import React from 'react';
import '../styles/Chart.css';

const PatientCard = ({ patient }) => (
  
  <div className="patient-card">
    <h2>{patient.name}</h2>
    <p>Age: {patient.age}</p>
    <p>Blood Group: {patient.bloodGroup || "NA"} </p>
  </div>
);

export default PatientCard;

import React, { useEffect, useState } from 'react';
import { fetchPatientData } from './api';
import PatientCard from './components/PatientCard';
import BloodPressureChart from './components/BloodPressureChart';
import './styles/App.css';

function App() {
  const [patient, setPatient] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPatientData();
      const jessica = data.find(person => person.name === 'Jessica Taylor');
      setPatient(jessica);
      setChartData(jessica.diagnosis_history);
    };

    loadData();
  }, []);

  return (
    <div className="App">
      {patient ? (
        <>
          <PatientCard patient={patient} />
          <BloodPressureChart data={chartData} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;



import React, { useState } from 'react';

const SymptomsCheck = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [diagnosis, setDiagnosis] = useState('');

  const allSymptoms = [
    'Fever',
    'Cough',
    'Headache',
    'Fatigue',
    'Shortness of breath',
    'Sore throat',
    // Add more symptoms as needed
  ];

  const handleSymptomToggle = (symptom) => {
    const updatedSymptoms = selectedSymptoms.includes(symptom)
      ? selectedSymptoms.filter((s) => s !== symptom)
      : [...selectedSymptoms, symptom];

    setSelectedSymptoms(updatedSymptoms);
  };

  const checkDiagnosis = (selectedSymptoms) => {
    // Your logic for checking the diagnosis based on selected symptoms
    // This is a simplified example, and in a real-world scenario, you'd have a more complex algorithm or API call.
    if (selectedSymptoms.length > 0) {
      return 'You may have a common cold.';
    } else {
      return 'Please select symptoms to check for diagnosis.';
    }
  };

  const handleCheckDiagnosis = () => {
    const result = checkDiagnosis(selectedSymptoms);
    setDiagnosis(result);
  };

  return (
    <div>
      <h2>Symptom Checker</h2>
      <div>
        <h3>Select Symptoms:</h3>
        {allSymptoms.map((symptom) => (
          <div key={symptom}>
            <input
              type="checkbox"
              id={symptom}
              checked={selectedSymptoms.includes(symptom)}
              onChange={() => handleSymptomToggle(symptom)}
            />
            <label htmlFor={symptom}>{symptom}</label>
          </div>
        ))}
      </div>
      <button onClick={handleCheckDiagnosis}>Check Diagnosis</button>
      <div>
        <h3>Diagnosis:</h3>
        <p>{diagnosis}</p>
      </div>
    </div>
  );
};

export default SymptomsCheck;


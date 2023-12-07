import React, { useState } from 'react';

const calculateBMI = (weight, height) => {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi.toFixed(2);
};

const categorizeBMI = (bmi) => {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return 'Normal Weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
};

const checkCholesterol = () => {
  // Just a placecard for now i am planning to use some external apis
  
  return 'Cholesterol: Normal'; 
};

const styles = {
  healthTracker: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  },
  form: {
    background: '#ffffff',
    padding: '20px',
    borderRadius: '4px',
    boxShadow: '0 4px 10px 4px rgba(19, 35, 47, 0.3)',
    marginBottom: '20px',
    width: '300px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    background: '#1ab188',
    color: '#ffffff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  buttonHover: {
    background: '#15a67d',
  },
  result: {
    background: '#ffffff',
    padding: '20px',
    borderRadius: '4px',
    boxShadow: '0 4px 10px 4px rgba(19, 35, 47, 0.3)',
    textAlign: 'center',
    width: '300px',
  },
  resultHeading: {
    marginBottom: '10px',
  },
};

function HealthTracker() {
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
  });

  const [bmiResult, setBMIResult] = useState(null);
  const [bmiCategory, setBMICategory] = useState(null);
  const [cholesterolResult, setCholesterolResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCalculateBMI = () => {
    const { weight, height } = formData;
    if (weight && height) {
      const bmi = calculateBMI(Number(weight), Number(height));
      setBMIResult(bmi);
      const category = categorizeBMI(bmi);
      setBMICategory(category);
    } else {
      setBMIResult(null);
      setBMICategory(null);
    }
  };

  const handleCheckCholesterol = () => {
    const cholesterolResult = checkCholesterol();
    setCholesterolResult(cholesterolResult);
  };

  return (
    <div style={styles.healthTracker}>
      <h2>Health Tracker</h2>
      <div style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="weight">
            Weight (kg):
          </label>
          <input
            style={styles.input}
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="height">
            Height (cm):
          </label>
          <input
            style={styles.input}
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <button
            type="button"
            style={{ ...styles.button, ...(styles.buttonHover && { ':hover': styles.buttonHover }) }}
            onClick={handleCalculateBMI}
          >
            Calculate BMI
          </button>
        </div>

        <div style={styles.formGroup}>
          <button
            type="button"
            style={{ ...styles.button, ...(styles.buttonHover && { ':hover': styles.buttonHover }) }}
            onClick={handleCheckCholesterol}
          >
            Check Cholesterol
          </button>
        </div>
      </div>

      {bmiResult !== null && bmiCategory !== null && (
        <div style={styles.result}>
          <h3 style={styles.resultHeading}>Your BMI:</h3>
          <p>BMI: {bmiResult}</p>
          <p>Category: {bmiCategory}</p>
        </div>
      )}

      {cholesterolResult !== null && (
        <div style={styles.result}>
          <h3 style={styles.resultHeading}>Cholesterol:</h3>
          <p>{cholesterolResult}</p>
        </div>
      )}
    </div>
  );
}

export default HealthTracker;

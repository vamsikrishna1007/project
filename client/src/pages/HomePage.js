// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Layout from "./../components/Layout";
// import { Row } from "antd";
// import DoctorList from "../components/DoctorList";
// const HomePage = () => {
//   const [doctors, setDoctors] = useState([]);
//   // login user data
//   const getUserData = async () => {
//     try {
//       const res = await axios.get(
//         "/api/v1/user/getAllDoctors",

//         {
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token"),
//           },
//         }
//       );
//       if (res.data.success) {
//         setDoctors(res.data.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getUserData();
//   }, []);
//   return (
//     <Layout>
//       <h1 className="text-center">Home Page</h1>
//       <Row>
//         {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
//       </Row>
//     </Layout>
//   );
// };

// export default HomePage;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";

const HomePage = () => {
  const [doctors, setDoctors] = useState([]);

  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.get("/api/v1/user/getAllDoctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout>
      {/* <header style={headerStyle}>
        <h1>DocMed</h1>
        <nav>
          <ul style={navStyle}>
            <li style={navItemStyle}>
              <a href="#Book an appointment">Book an Appointment</a>
            </li>
            <li style={navItemStyle}>
              <a href="#Health-tracker">Health Tracker</a>
            </li>
            <li style={navItemStyle}>
              <a href="#Products">Products</a>
            </li>
            <li style={navItemStyle}>
              <a href="#Symptoms Check">Symptoms Checker</a>
            </li>
          </ul>
        </nav>
      </header> */}

      <section id="products" style={sectionStyle}>
        <h2>Products</h2>
        <p>Explore our range of medical products.</p>
        <div style={productGrid}>
          {Array.from({ length: 20 }, (_, index) => (
            <div key={index} style={productItemStyle}>
              <img
                src={'data:image/jpeg;base64,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'} 
                alt={`Product ${index + 1}`}
                style={{ width: '100%' }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* <h1 className="text-center">Home Page</h1> */}
      <Row>
        {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
      </Row>

      <footer style={footerStyle}>
        <p>&copy; 2023 DocMed. All rights reserved.</p>
      </footer>
    </Layout>
  );
};

const headerStyle = {
  backgroundColor: '#4CAF50',
  padding: '1rem',
  color: 'white',
  textAlign: 'center',
};

const sectionStyle = {
  padding: '2rem',
  borderBottom: '1px solid #ddd',
};

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
};

const navStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
};


const navItemStyle = {
  marginRight: '20px',
};


const productGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)', 
  gap: '20px', 
};

const productItemStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  textAlign: 'center',
};


// Rest of the style constants remain the same as in the second code snippet

export default HomePage;

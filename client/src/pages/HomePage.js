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
      const res = await axios.get(
        "/api/v1/user/getAllDoctors",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
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
      <h1 className="text-center">Home Page</h1>
      <Row>
        {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
      </Row>
    </Layout>
  );
};

export default HomePage;
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
//       const res = await axios.get("/api/v1/user/getAllDoctors", {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       });
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
//       {/* <header style={headerStyle}>
//         <h1>DocMed</h1>
//         <nav>
//           <ul style={navStyle}>
//             <li style={navItemStyle}>
//               <a href="#Book an appointment">Book an Appointment</a>
//             </li>
//             <li style={navItemStyle}>
//               <a href="#Health-tracker">Health Tracker</a>
//             </li>
//             <li style={navItemStyle}>
//               <a href="#Products">Products</a>
//             </li>
//             <li style={navItemStyle}>
//               <a href="#Symptoms Check">Symptoms Checker</a>
//             </li>
//           </ul>
//         </nav>
//       </header> */}

//       <section id="products" style={sectionStyle}>
//         <h2>Products</h2>
//         <p>Explore our range of medical products.</p>
//         <div style={productGrid}>
//           {Array.from({ length: 20 }, (_, index) => (
//             <div key={index} style={productItemStyle}>
//               <img
 
//                 alt={`Product ${index + 1}`}
//                 style={{ width: '100%' }}
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* <h1 className="text-center">Home Page</h1> */}
//       <Row>
//         {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
//       </Row>

//       <footer style={footerStyle}>
//         <p>&copy; 2023 DocMed. All rights reserved.</p>
//       </footer>
//     </Layout>
//   );
// };

// const headerStyle = {
//   backgroundColor: '#4CAF50',
//   padding: '1rem',
//   color: 'white',
//   textAlign: 'center',
// };

// const sectionStyle = {
//   padding: '2rem',
//   borderBottom: '1px solid #ddd',
// };

// const footerStyle = {
//   backgroundColor: '#333',
//   color: 'white',
//   padding: '1rem',
//   textAlign: 'center',
// };

// const navStyle = {
//   listStyleType: 'none',
//   margin: 0,
//   padding: 0,
//   display: 'flex',
//   justifyContent: 'center',
// };


// const navItemStyle = {
//   marginRight: '20px',
// };


// const productGrid = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(5, 1fr)', 
//   gap: '20px', 
// };

// const productItemStyle = {
//   border: '1px solid #ddd',
//   padding: '10px',
//   textAlign: 'center',
// };


// // Rest of the style constants remain the same as in the second code snippet

// export default HomePage;

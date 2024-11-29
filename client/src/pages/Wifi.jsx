import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import './Wifi.css'

const Wifi = () => {
  const data = [
    { network: "Audi", password: "audi@net" },
    { network: "CSED", password: "csed@123#" },
    { network: "CSED_LAB", password: "hecllab768" },
    { network: "Directorate", password: "dir@tu&98765" },
    { network: "EACCESS", password: "hostelnet" },
    { network: "Hostel J", password: "LetMeC@@nnectViaCISH2010@Thapar" },
    { network: "Machine Tool", password: "workshop@54321" },
    { network: "Placement Cell", password: "Cilp@98765" },
    { network: "THights", password: "abcd1234" },
    { network: "TU", password: "tu@inet1" },
    { network: "LC", password: "lc@tiet1" },
  ];

  return (
    <>
    <Navbar/>
    <div className='wifiMainDiv'>
      <h1>WIFI and Their Passwords</h1>
      <table style={{ borderCollapse: "collapse", width: "80%", textAlign: "center" }}>
        <thead>
          <tr>
            <th style={{ border: "2px solid #ddd", padding: "8px", backgroundColor: "#f2f2f2" }}>Network Name</th>
            <th style={{ border: "2px solid #ddd", padding: "8px", backgroundColor: "#f2f2f2" }}>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.network}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Wifi;

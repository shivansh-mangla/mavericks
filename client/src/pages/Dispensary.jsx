import React from "react";

const Dispensary = () => {
  const dispensaryInfo = {
    id: 1,
    name: "Health Plus",
    location: "Downtown",
    contact: "123-456-7890",
    openHours: "9:00 AM - 8:00 PM",
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>Dispensary Information</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4", borderBottom: "2px solid #ccc" }}>
            <th style={{ padding: "10px", textAlign: "left" }}>Field</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "10px" }}>ID</td>
            <td style={{ padding: "10px" }}>{dispensaryInfo.id}</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "10px" }}>Name</td>
            <td style={{ padding: "10px" }}>{dispensaryInfo.name}</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "10px" }}>Location</td>
            <td style={{ padding: "10px" }}>{dispensaryInfo.location}</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "10px" }}>Contact</td>
            <td style={{ padding: "10px" }}>{dispensaryInfo.contact}</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "10px" }}>Open Hours</td>
            <td style={{ padding: "10px" }}>{dispensaryInfo.openHours}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dispensary;

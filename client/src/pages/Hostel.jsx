import React, { useState } from "react";
import axios from "axios";
import "./Hostel.css";
import Navbar from "../Components/Navbar/Navbar";

function Hostel() {
  const [selectedHostel, setSelectedHostel] = useState(""); 
  const [hostelData, setHostelData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedHostel) {
      alert("Please select a subject");
      return;
    }

    try {
      // Send the selected subject to the server
      const response = await axios.post("http://localhost:3001/hostelInfo", {hostel: selectedHostel});

      console.log(response);
      // Handle the response
      setHostelData(response.data);
    } catch (error) {
      console.error("Error fetching Hostel data:", error);
      alert("Failed to fetch Hostel data. Please try again.");
    }
  };

  return (
    <>
    <Navbar/>
    <div className="HostelInfoMainDiv">
      <h1>Get Your Hostel Info</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Hostel: </label>
          <select
            value={selectedHostel}
            onChange={(e) => setSelectedHostel(e.target.value)}
          >
            <option value="">--Select a hostel--</option>
            <option value="E">Hostel O (Vyom Hall)</option>
            <option value="O">Hostel O (Vyom Hall)</option>
            <option value="B">Hostel B (Amritam Hall)</option>
            <option value="D">Hostel D (Neeram Hall)</option>
            <option value="A">Hostel A (Agira Hall)</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {hostelData && (
        <div className="hostelData">
          <h2>Information for {selectedHostel} Hostel</h2>
          <iframe src= {hostelData.location} width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <h3>Warden Name: {hostelData.wardenName}</h3>
          <h3>Warden Contact: <a href={"tel:+" + hostelData.wardenContact}>{hostelData.wardenContact}</a></h3>
          <h3>Mess menu-</h3>
          <img src={hostelData.messMenu} />
        </div>
      )}
    </div>
    </>
  );
}

export default Hostel;

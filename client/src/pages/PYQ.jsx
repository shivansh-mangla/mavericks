import React, { useState } from "react";
import axios from "axios";
import './PYQ.css';
import Navbar from "../Components/Navbar/Navbar";

function PYQ() {
  const [selectedSubject, setSelectedSubject] = useState(""); // State to hold selected subject
  const [PYQData, setPYQData] = useState(null); // State to hold playlist data from server

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSubject) {
      alert("Please select a subject");
      return;
    }

    try {
      // Send the selected subject to the server
      const response = await axios.post("http://localhost:3001/PYQ", {
        subject: selectedSubject,
      });

      console.log(response.data);
      // Handle the response
      setPYQData(response.data);
    } catch (error) {
      console.error("Error fetching PYQ data:", error);
      alert("Failed to fetch PYQ data. Please try again.");
    }
  };

  return (
    <>
    <Navbar/>
    <div className="subjectPYQ">
      <h1>Select a Subject</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Subject: </label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">--Select a Subject--</option>
            <option value="Data Structures And Algorithms">Data Structures And Algorithms</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {PYQData && (
        <div className="PYQData">
          <h2>PYQs for {selectedSubject}</h2>
          <iframe className="PYQDrive"
            src= {PYQData}>
          </iframe>
        </div>
      )}
    </div>
    </>
  );
}

export default PYQ;

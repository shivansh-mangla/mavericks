import React, { useState } from "react";
import axios from "axios";
import "./SubjectPlaylist.css";
import Navbar from "../Components/Navbar/Navbar";

function SubjectPlaylist() {
  const [selectedSubject, setSelectedSubject] = useState(""); // State to hold selected subject
  const [playlistData, setPlaylistData] = useState(null); // State to hold playlist data from server

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSubject) {
      alert("Please select a subject");
      return;
    }

    try {
      // Send the selected subject to the server
      const response = await axios.post("http://localhost:3001/subjectPlaylist", {
        subject: selectedSubject,
      });

      console.log(response.data);
      // Handle the response
      setPlaylistData(response.data); // Assuming server responds with playlist data
    } catch (error) {
      console.error("Error fetching playlist data:", error);
      alert("Failed to fetch playlist data. Please try again.");
    }
  };

  return (
    <>
    <Navbar/>
    <div className="subjectPlaylist">
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
            <option value="Operating Systems">Operating Systems</option>
            <option value="Operating Systems">Applied Chemistry</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {playlistData && (
        <div className="playlistData">
          <h2>Playlist for {selectedSubject}</h2>
            {playlistData.map((item, index) => (
              <div key={index}>
              <h3>{item.title}</h3>
              <iframe width="560" height="315" src={item.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
              </div>
            ))}
        </div>
      )}
    </div>
    </>
  );
}

export default SubjectPlaylist;

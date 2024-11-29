import React, { useState, useEffect } from "react";
import axios from "axios";
import './News.css';
import Navbar from "../Components/Navbar/Navbar";

function News() {
  const [newsData, setNewsData] = useState([]); // Initialize state as an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/news");
        setNewsData(response.data); // Update state with fetched data
        console.log("Fetched Data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
    <Navbar/>
    <div className="newsMainContainer">
      <h1>All the news about patiala at one place!!</h1>
      {newsData.map((value, index) => (
        <div className="newsContainer" key={index}>
          <a href={value.link} target="_blank">
            <div className="newsContainer2">
            <img src={value.img} alt="news thumbnail" />
            <h2>{value.headline}</h2>
            </div>
          </a>
        </div>
      ))}
    </div>
    </>
  );
}

export default News;

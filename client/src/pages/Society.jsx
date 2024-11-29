import React from 'react';
import Navbar from "../Components/Navbar/Navbar";

const Society = () => {
  const societies = [
    { sno: 1, name: "GENE", objective: "GENE Society promotes student's professional development by sponsoring technical activities such as workshops, panel discussions and guest lectures. Furthermore, we offer a variety of educational opportunities in biotechnology, technological advancements, and ethical conduct to encourage continued learning and professional progress. Our Cultural flagship event encourages member's personal, professional and creative development along with celebrating unity in diversity." },
    { sno: 2, name: "Creative Computing Society (CCS)", objective: "Creative Computing Society strive to encourage students to develop an analytical temperament in the field of technology and innovation. The society conducts workshops and coding competitions on a regular basis, thus acting as a platform for students to showcase and nurture their technical skill to discover their best lying potential. Over the years the society has had numerous pivotal collaborations with organizations like Google Developers Group, Women Techmaker, Mozilla Webmaker, PyData to name a few." },
    { sno: 3, name: "Elpis, the psychology society", objective: "Elpis is a Psychology Society of Thapar Institute. Elpis is for everyone interested in delving in the field of psychology. Whether you have a background in psychology or are simply fascinated by the world of psychology, everyone is welcome to join our community. We strive to enhance and support stimulating academic experiences, promote multidimensional approach of psychology by thinking out of the box, providing social opportunities and foster insight into the psychological field. We seek to attain our agenda by arranging seminars, movie nights, fun psychological activities, lunches, campaigns and psycho fest. The society invites each one of you to be a part of this journey." },
    { sno: 4, name: "ENACTUS", objective: "ENACTUS is a community of students, academic and business leaders committed to using entrepreneurial action to transform lives and shape a better world."},
    { sno: 5, name: "Frosh Week", objective: "Frosh Week Society welcomes the first year students in TIET. This society basically involves with all the activities of first year students just after they join institute. Arranging Infodesk, supporting in person counselling, organising orientation program and Frosh week for first year students are the major activities"},
  ];

  return (
    <>
    <Navbar/>
    <div className='societyMainDiv' style={{ padding: "20px", fontFamily: "Arial, sans-serif", margin: "200px" }}>
      <h1>Societies and Objectives</h1>
      <table style={{ borderCollapse: "collapse", width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f2f2f2" }}>SNo.</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f2f2f2" }}>Society</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f2f2f2" }}>Objective</th>
          </tr>
        </thead>
        <tbody>
          {societies.map((society, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{society.sno}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{society.name}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{society.objective}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Society;

import React, { useState } from "react";
import "./SGPA.css";
import Navbar from "../Components/Navbar/Navbar";

const SGPA = () => {
  const [subjects, setSubjects] = useState([
    { id: Date.now(), name: "", credits: "", grade: "" },
  ]);

  // Grade Points Mapping
  const gradePoints = {
    "A": 10,
    "A-": 9,
    "B": 8,
    "B-": 7,
    "C": 6,
    "C-": 5
  };

  // Add a new subject row
  const addSubject = () => {
    setSubjects([
      ...subjects,
      { id: Date.now(), name: "", credits: "", grade: "" },
    ]);
  };

  // Remove a subject row
  const removeSubject = (id) => {
    setSubjects(subjects.filter((subject) => subject.id !== id));
  };

  // Handle input changes
  const handleInputChange = (id, field, value) => {
    setSubjects(
      subjects.map((subject) =>
        subject.id === id ? { ...subject, [field]: value } : subject
      )
    );
  };

  // Calculate SGPA
  const calculateSGPA = () => {
    let totalCredits = 0;
    let weightedGradePoints = 0;

    subjects.forEach((subject) => {
      const credits = parseFloat(subject.credits);
      const grade = gradePoints[subject.grade];

      if (!isNaN(credits) && !isNaN(grade)) {
        totalCredits += credits;
        weightedGradePoints += credits * grade;
      }
    });

    return totalCredits > 0
      ? (weightedGradePoints / totalCredits).toFixed(2)
      : "0.00";
  };

  return (
    <>
    <Navbar/>
    <div className="SGPAContainer">
      <h1>SGPA Calculator</h1>
      <table>
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Credits</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.id}>
              <td>
                <input
                  type="text"
                  placeholder="Subject Name"
                  value={subject.name}
                  onChange={(e) =>
                    handleInputChange(subject.id, "name", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Credits"
                  min="1"
                  value={subject.credits}
                  onChange={(e) =>
                    handleInputChange(subject.id, "credits", e.target.value)
                  }
                />
              </td>
              <td>
                <select
                  value={subject.grade}
                  onChange={(e) =>
                    handleInputChange(subject.id, "grade", e.target.value)
                  }
                >
                  <option value="">Select Grade</option>
                  <option value="A">A</option>
                  <option value="A-">A-</option>
                  <option value="B">B</option>
                  <option value="B-">B-</option>
                  <option value="C">C</option>
                  <option value="C-">C-</option>
                </select>
              </td>
              <td>
                <button onClick={() => removeSubject(subject.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-button" onClick={addSubject}>
        Add Subject
      </button>
      <h2>Your SGPA: {calculateSGPA()}</h2>
    </div>
    </>
  );
};

export default SGPA;

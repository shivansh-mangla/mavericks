import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./Discussion.css";
import Navbar from "../Components/Navbar/Navbar";
import { UserContext } from "../UserContext";

function Discussion() {
  const { user } = useContext(UserContext); // Access user info from context
  const [question, setQuestion] = useState(""); // To store the current user's question
  const [questions, setQuestions] = useState([]); // To store all questions from the database

  // Fetch all questions from the backend when the page loads
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:3001/questions");
        setQuestions(response.data);
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    };

    fetchQuestions();
  }, []);

  // Handle submitting a new question
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!question) {
        return;
      }

      const response = await axios.post("http://localhost:3001/questions", {
        username: user.username,
        profilePhoto: user.profilePhoto,
        question: question,
      });

      setQuestions([response.data, ...questions]); // Add the new question to the list
      setQuestion("");
    } catch (err) {
      console.error("Error submitting question:", err);
    }
  };

  // Render the component
  return (
    <>
      <Navbar />
      <div className="discussionDiv">
        <h1>Discussion Forum</h1>
        <div className="gotAQuestionDiv">
          <h2>Got A Question? Ask it here...</h2>

          <form onSubmit={handleSubmit}>
            <label>Enter your doubt</label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question here..."
            />
            <button type="submit">Post</button>
          </form>
        </div>

        <div className="questionsDiv">
          <h2>Questions</h2>
          {questions.length === 0 ? (
            <p>No questions yet. Be the first to ask!</p>
          ) : (
            questions.map((q) => (
              <div key={q._id} className="questionItem">
                <div className="questionTop">
                <img src={q.profilePhoto} alt={`${q.username}'s profile`} className="profilePhoto" />
                <div className="questionTopRight">
                  <strong>{q.username}</strong>
                  <p>Posted at: {q.join_date}</p>
                </div>
                </div>
                <h1>{q.body}</h1>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Discussion;

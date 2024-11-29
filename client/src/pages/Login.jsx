import React, { useContext } from "react";
import { useFormik } from 'formik';
import axios from "axios";
import "./CreateUser.css";
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../UserContext"; // Import the context


function Login() {

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // Access the setUser function from context

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: async (values) => {
        // Send POST request to the backend
        const response = await axios.post("http://localhost:3001/user/login", {username: values.username, password: values.password});
        console.log(response.data);
        if(!response.data.message){
          setUser(response.data); // Save the user info in context
          navigate("/home"); 
        }
        else{
          alert(response.data.message);
        }
    }
  });

  return (
    <div className="createUserDiv">
      <h1>Enter your details</h1>
    <form onSubmit={formik.handleSubmit} className="createUserForm">
      <div>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <div>
      <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  );  
}

export default Login;

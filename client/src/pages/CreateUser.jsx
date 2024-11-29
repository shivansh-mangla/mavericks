import React from "react";
import { useFormik } from 'formik';
import axios from "axios";
import "./CreateUser.css";
import { useNavigate } from 'react-router-dom'


function CreateUser() {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      photo: '',
      age: 18,
      school: ''
    },
    onSubmit: async (values) => {
      try {
        // Create a FormData object
        const formData = new FormData();
        formData.append('username', values.username); 
        formData.append('password', values.password); 
        formData.append('photo', values.photo); 
        formData.append('age', values.age); 
        formData.append('school', values.school);

        // Send POST request to the backend
        const response = await axios.post("http://localhost:3001/user", formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Required for file uploads
          },
        });
        alert("User account has been created succesfully... now login");
        navigate("/login");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  });

  return (
    <div className="createUserDiv">
      <h1>Enter your details</h1>
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data" className="createUserForm">
      <div>
        <label>Username:<span className="form-compulsary">*</span></label>
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
      </div>
      <div>
        <label>Password:<span className="form-compulsary">*</span></label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <div>
        <label> Upload Profile Photo</label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={(e) => formik.setFieldValue('photo', e.currentTarget.files[0])}
        />
      </div>
      <div>
        <label>Age: </label>
        <input
          type="number"
          name="age"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
      </div>
      <div>
        <label>School: </label>
        <input
          type="text"
          name="school"
          onChange={formik.handleChange}
          value={formik.values.school}
        />
      </div>
      <div>
      <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  );  
}

export default CreateUser;

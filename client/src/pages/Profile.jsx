import React, {useContext} from "react";
import { useFormik } from 'formik';
import axios from "axios";
import "./Profile.css";
import Navbar from "../Components/Navbar/Navbar";
import { useNavigate , useLocation} from 'react-router-dom';
import { UserContext } from "../UserContext";

function Profile(){

  const { user } = useContext(UserContext); // Access the user info from context

  const location = useLocation();

  const profilePhoto = user.profilePhoto;
  const username = user.username;
  const age = user.age;
  const school = user.school;
  const joinDate = user.join_date

  return(
    <>
    <Navbar/>
    <div className="profileDiv">
      <h1>User Profile</h1>
      <div className="profilePicDiv">
        <img src={profilePhoto} alt="profilePic" className="profilePic"/>
      </div>
      <h3>Username: {username}</h3>
      <h3>Age: {age}</h3>
      <h3>School: {school}</h3>
      <h3>Join Date: {joinDate}</h3>
    </div>
    </>
  );
}

export default Profile;
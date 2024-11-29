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
      <div className="pmain">
        <div className="profilePicDiv">
          <img src={profilePhoto} alt="profilePic" className="profilePic"/>
        </div>
        <h1>{username}</h1>
        <h4>Thapar Institute of Engineering and Technology</h4>
        <div className="profileInfoDiv">
          <h3>
            Age: <input type="text" value={`${age} years old`} disabled />
          </h3>
          <h3>
            School: <input type="text" value={school} disabled />
          </h3>
          <h3>
            Join Date: <input type="text" value={joinDate} disabled />
          </h3>
        </div>
      </div>
    </div>
    </>
  );
}

export default Profile;
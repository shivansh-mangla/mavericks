import React, { useState, useEffect , useContext} from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { useNavigate , useLocation} from 'react-router-dom';
import { UserContext } from "../../UserContext";


const Navbar = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext); // Access the user info from context

  const [studyInfoOpen, setStudyInfoOpen] = useState(false);
  const [generalInfoOpen, setGeneralInfoOpen] = useState(false);
  const [societyOpen, setSocietyOpen] = useState(false);
  const [stickyNavbar, setStickyNavbar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      setStickyNavbar(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    const handleClickOutside = () => {
      setStudyInfoOpen(false);
      setGeneralInfoOpen(false);
      setSocietyOpen(false);
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  
  const handleDropdownClick = (e) => e.stopPropagation();

  const toggleStudyInfo = (e) => {
    e.stopPropagation();
    setStudyInfoOpen(!studyInfoOpen);
    setGeneralInfoOpen(false);
    setSocietyOpen(false);
  };

  const toggleGeneralInfo = (e) => {
    e.stopPropagation();
    setGeneralInfoOpen(!generalInfoOpen);
    setStudyInfoOpen(false);
    setSocietyOpen(false);
  };

  const toggleSociety = (e) => {
    e.stopPropagation();
    setSocietyOpen(!societyOpen);
    setStudyInfoOpen(false);
    setGeneralInfoOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <nav className={`navbar ${stickyNavbar ? "sticky-navbar" : ""}`}>
        <img src={logo} alt="logo" className="logo" />
        <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
          <li className="nav-item" onClick={() => navigate("/home")}>Home</li>
          <li className="nav-item" onClick={() => navigate("/news")}>News</li>
          <li
            className="nav-item"
            onClick={toggleStudyInfo}
            style={{ position: "relative" }}
          >
            Study Info
            {studyInfoOpen && (
              <div className="dropdown-menu" onClick={handleDropdownClick}>
                <ul>
                  <li onClick={() => navigate("/subjectPlaylist")}>Subject Wise Playlist</li>
                  <li onClick={() => navigate("/notes")}>Handwritten Notes</li>
                  <li onClick={() => navigate("/pyq")}>Previous Year Questions</li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="nav-item"
            onClick={toggleGeneralInfo}
            style={{ position: "relative" }}
          >
            General Info
            {generalInfoOpen && (
              <div className="dropdown-menu" onClick={handleDropdownClick}>
                <ul>
                  <li onClick={() => navigate("/sgpa")}>Grade/CG Calculator</li>
                  <li onClick={() => navigate("/subjectPlaylist")}>Dispensary Info</li>
                  <li onClick={() => navigate("/hostelInfo")}>Hostel Related Info</li>
                  <li onClick={() => navigate("/subjectPlaylist")}>Holiday Calendar</li>
                  <li onClick={() => navigate("/subjectPlaylist")}>All Subgroup Timetable</li>
                  <li onClick={() => navigate("/map")}>College Map and Navigation</li>
                  <li onClick={() => navigate("/wifi")}>WiFi Passwords</li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="nav-item"
            onClick={toggleSociety}
            style={{ position: "relative" }}
          >
            Society and Events
            {societyOpen && (
              <div className="dropdown-menu" onClick={handleDropdownClick}>
                <ul>
                  <li onClick={() => navigate("/society")}>Society Information</li>
                  <li onClick={() => navigate("/subjectPlaylist")}>Recent Upcoming Events Info</li>
                </ul>
              </div>
            )}
          </li>
          <li className="nav-item" onClick={() => navigate("/discussion")}>Discussions</li>
          <li className="nav-item" 
            onClick={() => navigate("/profile")}
          >Hello {user ? user.username : "Guest"}</li>
        </ul>
        <img
          src={menu_icon}
          alt="menu icon"
          className="menu-icon"
          onClick={toggleMobileMenu}
        />
      </nav>
    </div>
  );
};

export default Navbar;
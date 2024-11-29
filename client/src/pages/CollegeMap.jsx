import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Navbar from "../Components/Navbar/Navbar";
import './CollegeMap.css'

// Fix marker icons (required for proper rendering in Leaflet)
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const CollegeMap = () => {
  // Center the map around your college (latitude, longitude)
  const collegeLocation = [30.3542, 76.3681];
  const libraryLocation = [30.354295954951805,76.37004375457765];

  return (
    <>
    <Navbar/>
    <div className="mapMainDiv">
      <h1>College Map & Navigation</h1>
      <MapContainer
        className="mapContainerCollege"
        center={collegeLocation}
        zoom={16}
      >
        {/* Map Tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <Marker position={collegeLocation}>
          <Popup>
            Welcome to Thapar University! <br />
            Main building is here.
          </Popup>
        </Marker>
        <Marker position={libraryLocation}>
          <Popup>
            Nava Nalanda Library <br />
            Asia's Biggest Library
          </Popup>
        </Marker>

        {/* Add more markers as needed */}
      </MapContainer>
    </div>
    </>
  );
};

export default CollegeMap;

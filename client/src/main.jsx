import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './UserContext'; // Import UserProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider> {/* Wrap the app with UserProvider */}
      <App />
    </UserProvider>
  </React.StrictMode>
);
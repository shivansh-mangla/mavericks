import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './pages/Home';
import CreateUser from './pages/CreateUser';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SubjectPlaylist from './pages/SubjectPlaylist';
import Hostel from './pages/Hostel';
import PYQ from './pages/PYQ';
import SGPA from './pages/SGPA';
import News from './pages/News';
import Discussion from './pages/Discussion';
import Wifi from './pages/Wifi';
import Society from './pages/Society';
import CollegeMap from './pages/CollegeMap';

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div className='App'>
      <Router>
        <Link to='/createpost'>Create a Post</Link>
        <Link to='/home'>Home Page</Link>
        <Routes>
          <Route path='/home' exact element={<Home/>}/>
          <Route path='/profile' exact element={<Profile/>}/>
          <Route path='/signup' exact element={<CreateUser/>}/>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/subjectPlaylist' exact element={<SubjectPlaylist/>}/>
          <Route path='/hostelInfo' exact element={<Hostel/>}/>
          <Route path='/PYQ' exact element={<PYQ/>}/>
          <Route path='/SGPA' exact element={<SGPA/>}/>
          <Route path='/news' exact element={<News/>}/>
          <Route path='/discussion' exact element={<Discussion/>}/>
          <Route path='/wifi' exact element={<Wifi/>}/>
          <Route path='/society' exact element={<Society/>}/>
          <Route path='/map' exact element={<CollegeMap/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
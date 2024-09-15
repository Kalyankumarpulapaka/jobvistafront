import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import PersonalizedDashboard from './components/PersonalizedDashboard';
import Profile from './components/Profile';
import Jobs from './components/Jobs';
import Messages from './components/Messages';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PersonalizedDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </Router>
  );
}

export default App;

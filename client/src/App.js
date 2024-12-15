import React, { useContext, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Welcom from './components/Events/Welcom';
import AllEvents from './components/Events/AllEvents';
import CreateEvent from './components/Events/CreateEvent/CreateEvent';
import Profile from './components/Profile/Profile';
import AdminPanel from './components/Admin/AdminPanel';
import ProtectedRoute from './routes/ProtectedRoute';
import { AppContext } from './context/AppContext';
import EventHomePage from './pages/EventHomePage';

function App() {
  const { isAuthenticated } = useContext(AppContext)

  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/home'} />} />
      <Route path="/home" element={<EventHomePage />} >
        <Route index element={<Welcom />} />
        <Route path="/home/all-events" element={<AllEvents />} />
        <Route path="/home/create-event"
          element={<ProtectedRoute isAuthenticated={isAuthenticated}><CreateEvent /></ProtectedRoute>} />
        <Route path="/home/profile"
          element={<ProtectedRoute isAuthenticated={isAuthenticated}><Profile /></ProtectedRoute>} />
        <Route path="/home/admin-panel"
          element={<ProtectedRoute isAuthenticated={isAuthenticated}><AdminPanel /></ProtectedRoute>} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;

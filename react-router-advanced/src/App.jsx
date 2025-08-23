import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './components/useAuth'; // Adjust the import path as necessary
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './components/Blog';
import Home from './components/Home';
import './App.css'

function App() {

  return (
    <div>
      <AuthProvider>
       <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile/" element={ <ProtectedRoute> <Profile /> </ProtectedRoute> } />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
    </AuthProvider>
    </div>
  )
}

export default App

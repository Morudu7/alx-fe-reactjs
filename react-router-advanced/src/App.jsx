import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './components/Blog';
import Home from './components/Home';
import './App.css'

function App() {

  return (
    <div>
       <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile/" element={ <ProtectedRoute> <Profile /> </ProtectedRoute> } />
        <Route path=":postId" element={<BlogPost />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App

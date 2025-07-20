
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Optional
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css'

function App() {
  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: '1200px',
    padding: '2rem',
  };

  return (
    <div style={appStyle}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer /> {/* Optional */}
    </div>
  );
}

export default App;
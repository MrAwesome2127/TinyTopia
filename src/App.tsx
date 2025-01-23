import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import FAQ from './pages/FAQ';
import Perks from './pages/Perks';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeSection from './pages/Welcome-Section';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="welcome" element={<WelcomeSection />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="perks" element={<Perks />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
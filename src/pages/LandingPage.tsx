import React from 'react';
import { Link } from 'react-router-dom';
import WelcomeSection from './Welcome-Section';
import Perks from './Perks';
import FAQ from './FAQ';

const LandingPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to TinyTopia</h1>
      <WelcomeSection />
      <Perks />
      <FAQ />
      <Link to="/about" className="btn btn-primary">About Us</Link>
    </div>
  );
};

export default LandingPage;


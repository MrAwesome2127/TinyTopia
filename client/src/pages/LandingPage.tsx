import React from 'react';
import WelcomeSection from './Welcome-Section';
import Perks from './Perks';
import FAQ from './FAQ';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './AboutUs';


const LandingPage: React.FC = () => {
  return (
    <div>
      <WelcomeSection />
      <Perks />
      <FAQ />
      <AboutUs />
    </div>
  );
};

export default LandingPage;


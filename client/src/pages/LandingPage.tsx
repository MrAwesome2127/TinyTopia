import React from 'react';
import WelcomeSection from './Welcome-Section';
import Perks from './Perks';
import FAQ from './FAQ';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './AboutUs';


const LandingPage: React.FC = () => {
  return (
  <div> 
    <div>
      <WelcomeSection />
    </div>
    <div style={{
      backgroundImage: 'url(../assets/images/TinyTopia (1).png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      padding: 0,
      margin: 0
    } as React.CSSProperties}>
      <WelcomeSection />
    </div>  
    <div>  
      <AboutUs />
      <Perks />
      <FAQ />
    </div>
  </div>    
  );
};

export default LandingPage;

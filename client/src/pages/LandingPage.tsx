import React from 'react';
import WelcomeSection from './Welcome-Section';
import Perks from './Perks';
import FAQ from './FAQ';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './AboutUs';
import BGimage from '../assets/images/TinyTopiaBG.png';



const LandingPage: React.FC = () => {
  return (
  <div> 
    <div>
      <WelcomeSection />
    </div>
    <div style={{
      backgroundImage: 'url(' + BGimage + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      padding: 0,
      margin: 0
    } as React.CSSProperties}>
<<<<<<< HEAD
      <WelcomeSection />
=======
>>>>>>> 4b04fe9d2ce7a15de2ce63d30956a15b77099fa3
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

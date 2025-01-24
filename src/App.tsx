import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
      <div>
        <Header />
        <div className="container">
          <Outlet/>
        </div>
        <Footer />
      </div>
  );
}

export default App;
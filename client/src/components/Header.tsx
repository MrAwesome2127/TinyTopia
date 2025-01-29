import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-4 col-md-3 mb-2 mb-md-0 text-white">
        <h1 className="mb-3">Welcome to TinyTopia!</h1>
        <p className="lead">Where the world is small and the possibilities are endless.</p>
      </div>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li className="nav-item">
          <Link className="nav-link px-2 link-secondary" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-2 link-dark" to="/models">
            Models
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-2 link-dark" to="/weather">
            Weather search
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-2 link-dark" to="/aboutus">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-2 link-dark" to="/contactus">
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="col-md-3 text-end d-flex">
        <button type="button" className="btn btn-outline-primary me-2" onClick={handleLoginClick}>Login</button>
        <img src="../assets/images/TinyTopia Header.png" alt="Logo" width={55} height={35} />
      </div>
    </header>
  );
};

export default Header;

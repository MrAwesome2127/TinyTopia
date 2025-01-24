import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white text-center py-3">
      <h1 className="mb-3">Welcome to TinyTopia!</h1>
      <p className="lead">Where the world is small and the possibilities are endless.</p>
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/models">
              Models
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/perks">
              Perks
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/faq">
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
import '../styles/Header.css';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-primary text-white text-center py-3">
            <h1>Welcome to TinyTopia!</h1>
            <p>Where the world is small and the possibilities are endless.</p>
        </header>
    );
};

export default Header;
import React from 'react';
import './Header.css'; // Import your CSS file

const Header = () => {
    return (
        <div className="navigation-bar">
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Contact us</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;

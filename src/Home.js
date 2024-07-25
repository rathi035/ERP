import React, { useState } from 'react';
import './Home.css';
import video from './pecvid.mp4';
import logo from './peclogo.png';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenu, setSubMenu] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubMenu = (menu) => {
    setSubMenu(subMenu === menu ? '' : menu);
  };

  return (
    <div className={`container ${menuOpen ? 'menu-open' : ''}`}>
      <div className="video">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h3>
          To Cultivate academically excellent, intellectually adept, and self-disciplined engineers, shaping them into citizens of integrity and morality to serve nations needs.
        </h3>
      </div>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="top-right">
        <button className="menu" onClick={toggleMenu}>Menu</button>
      </div>
      <div className="sidebar">
        <button onClick={() => toggleSubMenu('academics')}>Academics</button>
        {subMenu === 'academics' && (
          <div className="submenu">
            <button onClick={() => window.location.href = '/login'}>Student Info</button>
            <button onClick={() => window.location.href = '/login1'}>Mentor Info</button>
            <button onClick={() => window.location.href = '/login2'}>HOD Info</button>
          </div>
        )}
        <button onClick={() => toggleSubMenu('campus')}>Campus</button>
        {subMenu === 'campus' && (
          <div className="submenu">
            <button onClick={() => window.location.href = '/login3'}>Students Activities</button>
            <button onClick={() => window.location.href = '/login4'}>Mentors </button>
            <button onClick={() => window.location.href = '/login5'}>HOD </button>
          </div>
        )}
        <button onClick={() => toggleSubMenu('in-focus')}>In Focus</button>
        {subMenu === 'in-focus' && (
          <div className="submenu">
            <button onClick={() => window.location.href = '/login6'}>Students</button>
            <button onClick={() => window.location.href = '/login7'}>Mentors</button>
            <button onClick={() => window.location.href = '/login8'}>HOD</button>
          </div>
        )}
        <button onClick={() => window.location.href = '/visit'}>Visit</button>
        <button onClick={() => window.location.href = '/about'}>About</button>
      </div>
    </div>
  );
}

export default Home;

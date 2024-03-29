import React from 'react'
import { Link } from 'react-router-dom';
import "./Nav Bar.css";

const NavBar = ({ Tabs, gap = '20px', display = 'flex', flexDirection = 'row', listStyleType = 'none', textDecoration = 'none', color = 'black', padding = '0px', hover = 'default', children }) => {
  return (
    <nav className='navBar'>
      {children}
      <ul style={{ listStyleType: listStyleType, padding: padding, display: display, flexDirection: flexDirection, gap: gap }}>
      {Tabs.map((tab, index) => (
          <li key={tab}>
            <Link style={{ textDecoration: textDecoration, color: color }} className={hover} to={tab}>
              {tab}
            </Link>
          </li>
      ))}
      </ul>
    </nav>
  );
};

export default NavBar;

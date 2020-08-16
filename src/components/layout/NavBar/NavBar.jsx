import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavBar({ icon, title }) {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

NavBar.defaultProps = {
  icon: 'fab fa-github',
  title: 'Github Finder',
};

export default NavBar;

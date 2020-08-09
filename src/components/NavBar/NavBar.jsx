import React from 'react';
import PropTypes from 'prop-types';

function NavBar({ icon, title }) {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
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

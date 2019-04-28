import React from 'react';
import PropTypes from 'prop-types';

const Nav = props => {
  const { branding } = props;
  return (
    <nav className='navbar navbar-inverse navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <a className='navbar-brand' href='/'>
            {branding}
          </a>
        </div>
      </div>
    </nav>
  );
};

Nav.defaultProps = {
  branding: 'My App'
};

Nav.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Nav;

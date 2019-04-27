import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { branding } = props;
  return (
    <div>
      <h2>{branding}</h2>
    </div>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;

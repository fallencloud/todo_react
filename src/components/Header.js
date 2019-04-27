import React from 'react';

const Header = props => {
  const { branding } = props;
  return (
    <div>
      <h2>{branding}</h2>
    </div>
  );
};

export default Header;

import React from 'react'
import logo from '../assets/logo.png'

function Logo({width = '100px'}) {
  return (
    <div>
      <img
        src={logo}
        alt="logo"
        width="100px"
      />
    </div>
  );
}

export default Logo

import React, { memo } from 'react'

function Navbar({adjective, getAdjective}) {
    console.log("Navbar component rendered");
    
  return (
    <div>
      I am a {adjective} Navbar
      <button
        onClick={() => getAdjective()}
        className="ml-4 bg-purple-900 rounded-full p-2 px-4"
      >
        Change me: {getAdjective()}
      </button>
    </div>
  );
}

export default memo(Navbar)

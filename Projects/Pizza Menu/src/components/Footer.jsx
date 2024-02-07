import React from 'react'

function Footer() {
  return (
    <div>
      <footer>
        {new Date().toLocaleTimeString()}. We're currently open
      </footer>
    </div>
  )
}

export default Footer

import React, { useState } from "react";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 14H5v-2h14v2zM19 8H5V6h14v2z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm0 7h16v2H4v-2zm0 5h16v2H4v-2z"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="md:hidden">
          {/* Your mobile menu content goes here */}
          <ul className="bg-gray-800">
            <li className="p-2">
              <a className="text-white hover:bg-gray-700" href="#">
                Menu Item 1
              </a>
            </li>
            <li className="p-2">
              <a className="text-white hover:bg-gray-700" href="#">
                Menu Item 2
              </a>
            </li>
            <li className="p-2">
              <a className="text-white hover:bg-gray-700" href="#">
                Menu Item 3
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hamburger;

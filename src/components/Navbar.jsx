import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="h-10 w-10 flex justify-center items-center bg-white rounded-lg shadow-md font-bold"
      >
        <p className="blue-gradient_text">BK</p>
      </NavLink>
      <nav className="flex gap-7 text-lg font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
        {/* <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Contact
        </NavLink> */}
      </nav>
    </header>
  );
};

export default Navbar;

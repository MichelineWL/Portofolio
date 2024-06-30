import React from "react";
import { Link } from "react-router-dom";
import logo from "./../images/logo.png";

export default function Navbar({ scrollToSection }) { // Accept scrollToSection as prop
  return (
    <nav className="bg-primary-1 w-full h-20 flex items-center justify-between px-10 sticky top-0 py-5">
      <img src={logo} className="w-12"/>
      <ul className="flex space-x-20">
        <li>
          <Link to="/" className="text-white hover:underline cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white hover:underline px-4 py-2 rounded border border-white cursor-pointer"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

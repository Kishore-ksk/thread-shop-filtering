import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import LOGO from "../images/LOGO.svg";
import { FaRegHeart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";

export default function Header({ query, handleInputChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(true);
  };


  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header id="container">
      {/* Left Side - Logo */}
      <div className="brand">
        <img src={LOGO} alt="Brand Logo" className="logo" />
        <p className="brand-name">THREAD</p>
      </div>

      {/* Center Nav (Visible on Large Screens Only) */}
      <nav className="desktop-nav">
        <ul className="nav">
          <li><a href="#">Collections</a></li>
          <li><a href="#" className="selected">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="menu-search-container">
        <div className="search-container" ref={searchRef}>
          <button className={`search-btn ${searchOpen ? "rotate" : ""}`} onClick={toggleSearch}>
            <FaSearch />
          </button>
          <input
            type="text"
            className={`search-input ${searchOpen ? "active" : ""}`}
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
          />
        </div>

        {/* Hamburger Menu Button (Visible on Small Screens) */}
        <button className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Right Side - Icons (Visible on Large Screens) */}
      <ul className="desktop-profile">
        <li><button><FaRegHeart /></button></li>
        <li><button><GrCart /></button></li>
        <li><button><VscAccount /></button></li>
      </ul>

      {/* Mobile Menu (Nav & Icons for Small Screens) */}
      <nav id="mobileMenu" className={menuOpen ? "active" : ""}>
        <ul className="nav">
          <li><a href="#" onClick={closeMenu}>Collections</a></li>
          <li><a href="#" className="selected" onClick={closeMenu}>Men</a></li>
          <li><a href="#" onClick={closeMenu}>Women</a></li>
          <li><a href="#" onClick={closeMenu}>About</a></li>
          <li><a href="#" onClick={closeMenu}>Contact</a></li>
        </ul>

        {/* Icons inside menu for Small Screens */}
        <ul className="profile">
          <li><button onClick={closeMenu}><FaRegHeart /></button></li>
          <li><button onClick={closeMenu}><GrCart /></button></li>
          <li><button onClick={closeMenu}><VscAccount /></button></li>
        </ul>
      </nav>
    </header>
  );
}

import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import Pattern from "./pattern/Pattern";
import Price from "./price/Price";
import Style from "./style/Style";
import Color from "./color/Color";
import { FaFilter, FaTimes } from "react-icons/fa";

export default function Sidebar({ handleFilterChange, filters }) {
    const [menuOpen, setMenuOpen] = useState(false);



    return (
        <>
            {/* Toggle Button for Mobile */}
            <button className="sidebarToggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaFilter />}
            </button>

            {/* Sidebar for Large Screens */}
            <div
                id="sideContainer"
                className='desktop-sidebar'
            >
                <h2 className="sideHead">Filters</h2>
                <Style handleFilterChange={handleFilterChange} filters={filters} />
                <Pattern handleFilterChange={handleFilterChange} filters={filters} />
                <Color handleFilterChange={handleFilterChange} filters={filters} />
                <Price handleFilterChange={handleFilterChange} filters={filters} />
            </div>

            {/* Sidebar for Mobile */}
            <div className={`mobile-sidebar ${menuOpen ? "active" : ""}`}>
                <h2 className="sideHead">Filters</h2>
                <Style handleFilterChange={handleFilterChange} filters={filters} />
                <Pattern handleFilterChange={handleFilterChange} filters={filters} />
                <Color handleFilterChange={handleFilterChange} filters={filters} />
                <Price handleFilterChange={handleFilterChange} filters={filters} />
            </div>
        </>
    );
}

import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import Pattern from './pattern/Pattern';
import Price from './price/Price';
import Style from './style/Style';
import Color from './color/Color';

export default function Sidebar({ handleFilterChange, filters }) {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div id='sideContainer' className={isSticky ? 'stickySidebar' : ''}>
            <h2 className="sideHead">Filters</h2>


            <Style handleFilterChange={handleFilterChange} filters={filters} />
            <Pattern handleFilterChange={handleFilterChange} filters={filters} />
            <Color handleFilterChange={handleFilterChange} filters={filters} />
            <Price handleFilterChange={handleFilterChange} filters={filters} />

        </div>
    );
}

import React from 'react';
import './Color.css';

export default function Color({ handleFilterChange, filters }) {
    return (
        <div id='colorContainer'>
            <section className='colorHead'>Color</section>
            <ul>
                <li>
                    <input type="radio" name='color' value=''
                        checked={filters.color === ''}
                        onChange={() => handleFilterChange('color', '')}
                    /> None
                </li>
                {['Gray', 'Black', 'Blue', 'Brown', 'Red', 'Burgundy', 'Green', 'Cream'].map(color => (
                    <li key={color}>
                        <input type="radio" name='color' value={color}
                            checked={filters.color === color}
                            onChange={() => handleFilterChange('color', color)}
                        /> {color}
                    </li>
                ))}
            </ul>
        </div>
    );
}

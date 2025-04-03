import React from 'react';
import './Style.css';

export default function Style({ handleFilterChange, filters }) {
    return (
        <div id='styleContainer'>
            <section className='styleHead'>Style</section>
            <ul>
                <li>
                    <input type="radio" name='style' value=''
                        checked={filters.category === ''}
                        onChange={() => handleFilterChange('category', '')}
                    /> None
                </li>
                <li>
                    <input type="radio" name='style' value='suit'
                        checked={filters.category === 'suit'}
                        onChange={() => handleFilterChange('category', 'suit')}
                    /> Suits
                </li>
                <li>
                    <input type="radio" name='style' value='blazer'
                        checked={filters.category === 'blazer'}
                        onChange={() => handleFilterChange('category', 'blazer')}
                    /> Blazers
                </li>
            </ul>
        </div>
    );
}

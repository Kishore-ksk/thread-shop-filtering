import React from 'react';
import './Pattern.css';

export default function Pattern({ handleFilterChange, filters }) {
    return (
        <div id='patternContainer'>
            <section className='patternHead'>Pattern</section>
            <ul>
                <li>
                    <input type="radio" name='pattern' value=''
                        checked={filters.pattern === ''}
                        onChange={() => handleFilterChange('pattern', '')}
                    /> None
                </li>
                {['Solid', 'Checked', 'Striped'].map(pattern => (
                    <li key={pattern}>
                        <input type="radio" name='pattern' value={pattern}
                            checked={filters.pattern === pattern}
                            onChange={() => handleFilterChange('pattern', pattern)}
                        /> {pattern}
                    </li>
                ))}
            </ul>
        </div>
    );
}

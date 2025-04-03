import React from 'react';
import './Price.css';

export default function Price({ handleFilterChange, filters }) {
    return (
        <div id='priceContainer'>
            <section className='priceHead'>Price</section>
            <ul>
                <li>
                    <input type="radio" name='price' value=''
                        checked={filters.price === ''}
                        onChange={() => handleFilterChange('price', '')}
                    /> None
                </li>
                <li>
                    <input type="radio" name='price' value='4000-8000'
                        checked={filters.price === '4000-8000'}
                        onChange={() => handleFilterChange('price', '4000-8000')}
                    /> 4000-8000
                </li>
                <li>
                    <input type="radio" name='price' value='8000-12000'
                        checked={filters.price === '8000-12000'}
                        onChange={() => handleFilterChange('price', '8000-12000')}
                    /> 8000-12000
                </li>
                <li>
                    <input type="radio" name='price' value='12000-18000'
                        checked={filters.price === '12000-18000'}
                        onChange={() => handleFilterChange('price', '12000-18000')}
                    /> 12000-18000
                </li>
                <li>
                    <input type="radio" name='price' value='18000-24000'
                        checked={filters.price === '18000-24000'}
                        onChange={() => handleFilterChange('price', '18000-24000')}
                    /> 18000-24000
                </li>
                <li>
                    <input type="radio" name='price' value='24000-30000'
                        checked={filters.price === '24000-30000'}
                        onChange={() => handleFilterChange('price', '24000-30000')}
                    /> 24000-30000
                </li>
            </ul>
        </div>
    );
}

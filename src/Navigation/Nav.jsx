import React from 'react'
export default function Nav({ handleInputChange, query }) {
    return (
        <div id='search'>
            <input type="text" placeholder='Search for your ideal suit'
                autoComplete='off' onChange={handleInputChange} value={query} />
        </div>
    )
}

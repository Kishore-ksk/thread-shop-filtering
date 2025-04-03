import React from 'react'
export default function Card({ id, image, name, style, color, pattern, oldPrice, newPrice }) {
    return (
        <div id="productContainer">
            <div id='prodImage'>
                <img src={image} alt="" className='image' />

            </div>
            <div id='btnContainer'>
                <button className='prodBtn'>Add to Cart</button>
            </div>
            <p>{name}<br />
                <del>{oldPrice}</del>
                <span>{newPrice}</span></p>
        </div>
    )
}

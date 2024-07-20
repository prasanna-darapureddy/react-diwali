import React from 'react'
import './ProductItem.css'
import { RiStarSFill, RiStarSLine } from 'react-icons/ri'

interface ProductProps {
    eachProduct: {
        id: number,
        imageUrl: string,
        name: string,
        actuallPrice: string,
        offerPrice: string,
    }
}

const ProductItem = (props: ProductProps) => {
    return (

        <li className='list-item'>
            <img src={props.eachProduct.imageUrl} alt="Watch" className='watch-img' />
            <h2 className='product-name'>{props.eachProduct.name}</h2>
            <div className='prices-container'>
                <span className='striked-price'>{props.eachProduct.actuallPrice}</span><span className='offer-price'>{props.eachProduct.offerPrice}</span>
            </div>
            <div className='rating-container'><RiStarSFill className='stars' /><RiStarSFill className='stars' /><RiStarSFill className='stars' /><RiStarSFill className='stars' /><RiStarSLine className='empty-star' /></div>

            <button type="button" className='view-button'>View More</button>
        </li>

    )
}

export default ProductItem
import React, { useState } from 'react'
import watch1 from '../../assets/watch_screen_01.png';
import watch2 from '../../assets/watch_screen_02.png';
import watch3 from '../../assets/watch_screen_03.png';
import watch4 from '../../assets/watch_screen_04.png';
import watch5 from '../../assets/watch_screen_05.png';
import watch6 from '../../assets/watch_screen_06.png';
import ProductItem from '../ProductItem/ProductItem';
import { FiCircle } from 'react-icons/fi'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


import './OfferProducts.css'

const initialProductsList = [
    {
        id: 1,
        imageUrl: `${watch1}`,
        name: 'Product name',
        actuallPrice: '$100.00',
        offerPrice: '$169.00',
    },
    {
        id: 2,
        imageUrl: `${watch2}`,
        name: 'Product name',
        actuallPrice: '$25.00',
        offerPrice: '$23.00',
    },
    {
        id: 3,
        imageUrl: `${watch3}`,
        name: 'Product name',
        actuallPrice: '$899.00',
        offerPrice: '$649.00',
    },
    {
        id: 4,
        imageUrl: `${watch4}`,
        name: 'Product name',
        actuallPrice: '$315.00',
        offerPrice: '$250.00',
    },
    {
        id: 5,
        imageUrl: `${watch5}`,
        name: 'Product name',
        actuallPrice: '$289.00',
        offerPrice: '$269.00',
    },
    {
        id: 6,
        imageUrl: `${watch6}`,
        name: 'Product name',
        actuallPrice: '$1099.00',
        offerPrice: '$869.00',
    },

    {
        id: 7,
        imageUrl: `${watch1}`,
        name: 'Product name',
        actuallPrice: '$109.00',
        offerPrice: '$99.00',
    },
    {
        id: 8,
        imageUrl: `${watch2}`,
        name: 'Product name',
        actuallPrice: '$599.00',
        offerPrice: '$569.00',
    },
    {
        id: 9,
        imageUrl: `${watch3}`,
        name: 'Product name',
        actuallPrice: '$369.00',
        offerPrice: '$349.00',
    },
    {
        id: 10,
        imageUrl: `${watch4}`,
        name: 'Product name',
        actuallPrice: '$315.00',
        offerPrice: '$250.00',
    },
    {
        id: 11,
        imageUrl: `${watch5}`,
        name: 'Product name',
        actuallPrice: '$450.00',
        offerPrice: '$418.00',
    },
    {
        id: 12,
        imageUrl: `${watch6}`,
        name: 'Product name',
        actuallPrice: '$350.00',
        offerPrice: '$330.00',
    }
]

interface IState {
    productsList: {
        id: number,
        name: string,
        imageUrl: string,
        actuallPrice: string,
        offerPrice: string,
    }[],
    firstButtonClassName: boolean,
    secondButtonClassName: boolean,
    thirdButtonClassName: boolean,
}

function OfferProducts() {
    const [productsList, setProductsList] = useState<IState['productsList']>(initialProductsList.slice(0, 4))
    const [firstButton, setFirstButtonClassName] = useState<IState['firstButtonClassName']>(true)
    const [secondButton, setSecondButtonClassName] = useState<IState['secondButtonClassName']>(false)
    const [thirdButton, setThirdButtonClassName] = useState<IState['thirdButtonClassName']>(false)


    const onFirstButton = () => {
        setProductsList(initialProductsList.slice(0, 4))
        setFirstButtonClassName(true)
        setSecondButtonClassName(false)
        setThirdButtonClassName(false)
    }
    const onSecondButton = () => {
        setProductsList(initialProductsList.slice(4, 8))
        setFirstButtonClassName(false)
        setSecondButtonClassName(true)
        setThirdButtonClassName(false)
    }
    const onThirdButton = () => {
        setProductsList(initialProductsList.slice(8, 12))
        setFirstButtonClassName(false)
        setSecondButtonClassName(false)
        setThirdButtonClassName(true)
    }

    return (
        <>
            <div className='offers-container' id='Best Deals'>
                <h1 className='offers-heading'>Diwali Offers products</h1>

                <ul className='products-list-container'>
                    {productsList.map(eachProduct => (
                        <ProductItem key={eachProduct.id} eachProduct={eachProduct} />
                    ))}
                </ul>
                <div className='buttons-container'>
                    <button className='circle-button' type="button" onClick={onFirstButton}>
                        <FiCircle fontSize={20} className={firstButton ? 'active-circle-icon' : 'circle-icon'} />
                    </button>
                    <button className='circle-button' type="button" onClick={onSecondButton}>
                        <FiCircle fontSize={20} className={secondButton ? 'active-circle-icon' : 'circle-icon'} />
                    </button>
                    <button className='circle-button' type="button" onClick={onThirdButton}>
                        <FiCircle fontSize={20} className={thirdButton ? 'active-circle-icon' : 'circle-icon'} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default OfferProducts


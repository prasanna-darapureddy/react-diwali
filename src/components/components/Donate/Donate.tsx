import React from 'react'
import donateImg from '../../assets/w3.png'
import { BsFillGiftFill } from 'react-icons/bs'
import { FaShip, FaUndo } from 'react-icons/fa'

import './Donate.css'

function Donate() {
    return (

        <div className='donate-container' id='Donate & Gift'>
            <h1 className='donate-heading'>Donate</h1>
            <div className='img-content-container'>
                <img src={donateImg} alt="crackers" className='crackers-img' />
                <div className='donate-content-container'>

                    <div className='icon-content-container'>
                        <BsFillGiftFill className='donate-icons' />
                        <div className='subtitle-content-container'>
                            <h3 className='subtitle'>Besh Wishes</h3>
                            <p className='text'>The tradition was also embraced by retailers, for whom the weeks and, eventually, the entire month before Christmas..</p>
                        </div>
                    </div>
                    <div className='icon-content-container'>
                        <FaShip className='donate-icons' />
                        <div className='subtitle-content-container'>
                            <h3 className='subtitle'>Free Shipping</h3>
                            <p className='text'>The tradition was also embraced by retailers, for whom the weeks and, eventually, the entire month before Christmas..</p>
                        </div>
                    </div>
                    <div className='icon-content-container'>
                        <FaUndo className='donate-icons' />
                        <div className='subtitle-content-container'>
                            <h3 className='subtitle'>Easy Return</h3>
                            <p className='text'>The tradition was also embraced by retailers, for whom the weeks and, eventually, the entire month before Christmas..</p>
                        </div>
                    </div>
                    <button type="button" className='donate-button'>Donate</button>
                </div>
            </div>
        </div>

    )
}

export default Donate
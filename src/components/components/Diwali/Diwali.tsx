import { useState, useEffect } from 'react'
import MenuBar from '../MenuBar/Menu'
import Banner from '../Banner/Banner'
import CountDown from '../CountDown/CountDown'
import OfferProducts from '../OfferProducts/OfferProducts'
import Donate from '../Donate/Donate'
import ContactUs from '../ContactUs/ContactUs'
import loading from '../../assets/loading_img.gif';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import './Diwali.css'


interface IState {
  isLoading: boolean,
}

function Diwali() {
  const [isLoading, setIsLoading] = useState<IState['isLoading']>(false)

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      setIsLoading(!isLoading);
    });
  }, []);


  return (
    <>
      {isLoading ?
        <div className='loading-container'>
          <img src={loading} alt='loading...' className='loader' />
        </div>
        :
        <>
          <MenuBar />
          <Banner />
          <div className='body-content'>
            <CountDown />
            <OfferProducts />
            <Donate />
            <ContactUs />
            <a href='#Home' className='up-arrow-link'>
              <div className='up-arrow-icon'>
                <KeyboardArrowUpIcon />
              </div>
            </a>
          </div>
        </>
      }
    </>
  )
}

export default Diwali
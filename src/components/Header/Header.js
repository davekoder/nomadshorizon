import React from 'react'
import { Link } from 'react-router-dom'
import classes from './header.module.scss'
import logo from '../../assets/images/logo.png'
import fb from '../../assets/images/fb.gif'
import insta from '../../assets/images/insta.gif'
import aboutIcon from '../../assets/images/about-icon.png'

const Header = () => {
  return (
    <header
      className={`${classes.header} + flex flex-row justify-between items-center pt-2 w-screen h-auto px-10`}>
      <Link to={'/'} className='flex flex-row items-center'>
        <img src={logo} alt='nomads-horizon-logo' class='w-20 h-20 mr-4' />
        <div className='text-4xl'>
          <span className={`${classes.first} + text-yellow-700`}>Nomads </span>
          <span className={`${classes.second} + text-gray-300`}>Horizon</span>
        </div>
      </Link>
      <div className='flex flex-row items-center'>
        <a href='http://www.facebook.com/nomadshorizon'>
          <img
            src={fb}
            alt='fb-logo'
            class='w-12 h-12 mr-4 rounded-full transform delay-100 duration-100 hover:scale-125'
          />
        </a>
        <a href='https://www.instagram.com/nomads_horizon/'>
          <img
            src={insta}
            alt='insta-logo'
            class='w-12 h-12 mr-4 rounded-full transform delay-100 duration-100 hover:scale-125'
          />
        </a>
        <Link
          to={'/about'}
          className='flex flex-col items-center cursor-pointer transform delay-100 duration-100 hover:text-yellow-600'>
          <img
            src={aboutIcon}
            alt='about-icon'
            className='w-12 h-12 transform hover:scale-90 delay-75 duration-75'
          />
          <h2 className='text-white'>About</h2>
        </Link>
      </div>
    </header>
  )
}

export default Header

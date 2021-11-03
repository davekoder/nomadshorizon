import React from 'react'
import { Link } from 'react-router-dom'
import classes from './gallery.module.scss'
import landscape from '../../assets/images/landscape-category.jpg'
import street from '../../assets/images/street-category.jpg'
import portraits from '../../assets/images/portraits-category.jpg'
import macro from '../../assets/images/macro-category.jpg'
import bw from '../../assets/images/bw-category.jpg'

const Gallery = () => {
  return (
    <div
      className={`${classes.gallery} flex flex-col w-screen h-screen overflow-x-hidden`}>
      <div className='relative flex flex-row justify-evenly items-center w-full z-50 mt-80 transform -rotate-3'>
        <Link
          to={'/blog'}
          className='flex flex-col justify-center items-center text-center cursor-pointer transform delay-100 duration-100'>
          <img
            src={landscape}
            alt='landscape-pic'
            className='w-36 h-26 transform hover:scale-150 delay-100 duration-100 border-2 border-white rounded-xl shadow-xl'
          />
          <h1 className='pt-1 w-full text-center'>Landscape</h1>
        </Link>
        <Link
          to={'/gallery'}
          className='flex flex-col justify-center items-center text-center cursor-pointer transform delay-100 duration-100'>
          <h1 className='w-full text-center'>Street</h1>
          <img
            src={street}
            alt='street-pic'
            className='w-36 h-26 mt-1 transform hover:scale-150 delay-100 duration-100 border-2 border-white rounded-xl shadow-xl'
          />
        </Link>
        <Link
          to={'/about'}
          className='flex flex-col justify-center items-center text-center cursor-pointer transform delay-100 duration-100'>
          <img
            src={portraits}
            alt='portraits-pic'
            className='w-36 h-26 mt-6 transform hover:scale-150 delay-100 duration-100 border-2 border-white rounded-xl shadow-xl'
          />
          <h1 className='pt-1 w-full text-center'>Portraits</h1>
        </Link>
      </div>
      <div className='relative flex flex-row justify-evenly items-center w-full z-50 mt-16 transform -rotate-3'>
        <Link
          to={'/blog'}
          className='flex flex-col justify-center items-center text-center cursor-pointer transform delay-100 duration-100'>
          <img
            src={macro}
            alt='landscape-pic'
            className='w-36 w- h-26 transform hover:scale-150 delay-100 duration-100 border-2 border-white rounded-xl shadow-xl'
          />
          <h1 className='pt-1 w-full text-center'>Macro</h1>
        </Link>
        <Link
          to={'/gallery'}
          className='flex flex-col justify-center items-center text-center cursor-pointer transform delay-100 duration-100'>
          <img
            src={bw}
            alt='street-pic'
            className='w-36 h-26 mt-1 transform hover:scale-150 delay-100 duration-100 border-2 border-white rounded-xl shadow-xl'
          />
          <h1 className='w-full text-center'>Black & White</h1>
        </Link>
      </div>
      <div
        className={`${classes.splash_banner} absolute flex w-screen h-3/4 justify-evenly items-center bg-opacity-20 mt-24 z-10 shadow-2xl`}></div>
    </div>
  )
}

export default Gallery

import React from 'react'
import { Link } from 'react-router-dom'
import classes from './home.module.scss'
import blogCategory from '../../assets/images/blog-category.jpg'
import galleryCategory from '../../assets/images/gallery-category.jpg'

const Home = () => {
  return (
    <div
      className={`${classes.home} flex w-screen h-screen justify-center items-center`}>
      <div className='absolute flex flex-row justify-center items-center w-full z-50 mt-34'>
        <Link
          to={'/blog'}
          className='flex flex-col justify-center items-center w-1/2 cursor-pointer transform delay-100 duration-100'>
          <img
            src={blogCategory}
            alt='blog-icon'
            className='w-1/2 transform hover:scale-75 delay-100 duration-100 rounded-xl hover:border-2 hover:border-white '
          />
          <h2 className='-mt-6'>Blog</h2>
        </Link>
        <Link
          to={'/gallery'}
          className='flex flex-col justify-center items-center w-1/2 cursor-pointer transform delay-100 duration-100'>
          <h1 className='opacity-0 hover:opacity-100'>Gallery</h1>
          <img
            src={galleryCategory}
            alt='gallery-icon'
            className='w-1/2 transform hover:scale-75 delay-100 duration-100 rounded-xl'
          />
          <h2 className='-mt-6'>Gallery</h2>
        </Link>
      </div>
      <div className='flex w-full h-1/2 justify-evenly items-center bg-white opacity-50 mt-34 z-10 shadow-2xl'></div>
    </div>
  )
}

export default Home

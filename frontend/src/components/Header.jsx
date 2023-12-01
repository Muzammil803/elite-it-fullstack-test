import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='w-full bg_theme text-white'>
     <div className='w-4/5 mx-auto flex justify-between py-4'>
        <div className=''>
        <Link className='font-bold text-lg' to={"/"}>ELITE IT</Link>
        </div>
        <div className=''>
        <Link className='mx-2' to={"/"}>Home</Link>
        <Link to={"/list"}> Products Listing</Link>
        </div>
        </div>  
    </nav>
  )
}

export default Header
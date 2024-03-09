import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav className =" flex items-center justify-between h-20 max-w mx-auto bg-black">
   
    <div className='ml-5'>
    <Link to ={'/'}>
        <h1 className='text-white font-bold text-transparent text-xl sm:text-2xl md:text-3xl cursor-pointer'>
            Shopping Cart
        </h1>
    </Link>
    
    </div>
    <ul className='flex list-none items-center space-x-6 text-white font-semibold text-2xl mr-10'>
        <Link to={'/'}>
            <li className='cursor-pointer list-none'> Home </li>
        </Link>
        <Link to={'/cart'}>
            <li className='cursor-pointer list-none'> Cart </li>
        </Link>
    </ul>
    </nav>
  )
}

export default Header
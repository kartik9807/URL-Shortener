import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='h-15 bg-purple-600 text-white flex justify-between items-center p-6'>
        <div className='font-extrabold text-2xl tracking-wider'>
            <Link href="/">BitLinks</Link>
        </div>
        <ul className='flex gap-2 items-center font-medium '>
            <Link href="/" className='hover:text-gray-400 transition-text duration-300'>Home</Link>
            <Link href="/about" className='hover:text-gray-400 transition-text duration-300'>About</Link>
            <Link href="/shorten" className='hover:text-gray-400 transition-text duration-300'>Shorten</Link>
            <Link href="/contact" className='hover:text-gray-400 transition-text duration-300'>Contact Us</Link>
            <li className='flex gap-2'>
                <Link href="/shorten"><button className='rounded-xl cursor-pointer bg-purple-500 shadow-lg p-3 hover:bg-purple-400 transition-bg duration-700'>Try Now</button></Link>
                <Link href="/github"><button className='rounded-xl cursor-pointer bg-purple-500 shadow-lg p-3 hover:bg-purple-400 transition-bg duration-700'>GitHub</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar

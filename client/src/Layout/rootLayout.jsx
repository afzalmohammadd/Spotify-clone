import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
    <header className='bg-black h-14 flex flex-row justify-between items-center px-8' >
      <img className='h-8' src="/images/logo.jpg" alt="" />
      <nav>
        <ul className='text-white flex flex-row gap-4 items-center'>
          <Link className='hover:text-green-400'>Premium</Link>
          <Link className='hover:text-green-400'>Support</Link>
          <Link className='hover:text-green-400'>Download</Link>
          <span className='border-l-2 '>&nbsp;</span>
          <Link className='hover:text-green-400'>Signup</Link>
          <Link className='hover:text-green-400'>Login</Link>
        </ul>
      </nav>
    </header >
    <Outlet />
    <footer>

    </footer>
    </>
  )
}

export default RootLayout

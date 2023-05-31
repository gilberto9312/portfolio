'use client'
import { useState } from 'react';

import Link from 'next/link'
import {scroll} from '../Helpers/ToTop'
const NavBar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };

    return (
    <nav className= 'bg-gradient-to-b from-blue-100 to-blue-200  dark:from-gray-800 dark:to-gray-900 '>
    <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
      <Link href="#home" className='flex items-center'> <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Gilberto Asuaje</span> </Link>
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={handleClick}>
        <span className="sr-only">menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <div className = {`${active ? '' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
        <ul className="bg-gradient-to-b from-blue-100 to-blue-200 font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0   dark:from-gray-800 dark:to-gray-900  ">
          <li><Link href = "#home" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link></li>
          <li><Link onClick={()=> scroll(700)}href = "#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</Link></li>
          <li><Link onClick={()=> scroll(2000)} href = "#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About me</Link></li>
          <li><Link href = "https://www.linkedin.com/in/gilberto-asuaje/" target="_blank" className="block py-2 pl-3 pr-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">Contact Me</Link></li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
export default NavBar
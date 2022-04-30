import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { FaFacebookSquare, FaYoutube, FaInstagram } from 'react-icons/fa'
import Logo from '../logo.svg'

function Header() {
  return (
      <nav className="navbar fixed bg-base-100 rounded-box mt-4 mx-4 z-10 shadow w-[calc(100vw-2rem)]">
        <div className="navbar-start pl-4">
          <label htmlFor="side-drawer">
            <div className="lg:hidden cursor-pointer hover:opacity-75 active:text-primary">
              <FiMenu size="1.5em" className="mr-3" />
            </div>
          </label>
          <div className="text-xl items-center hidden md:flex">
            <img src={Logo} alt="logo" className="h-[28px] w-[28px] mr-3" />
            <span> The Movement Church</span>
          </div>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal p-0  lg:flex hidden">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>What We Believe</a>
            </li>
            <li>
              <a>Come Visit</a>
            </li>
            <li>
              <a>Connect</a>
            </li>
          </ul>
          <div className="text-xl items-center flex md:hidden">
            <img src={Logo} alt="logo" className="h-[28px] w-[28px] mr-3 hidden sm:flex" />
            <span className=""> The Movement Church</span>
          </div>
        </div>
        <div className="navbar-end">
          <div className=" pr-4 md:flex hidden">
            <FaFacebookSquare size="1.5em" className="mx-2" />
            <FaYoutube size="1.5em" className="mx-2" />
            <FaInstagram size="1.5em" className="mx-2" />
          </div>
        </div>
      </nav>
  )
}

export default Header

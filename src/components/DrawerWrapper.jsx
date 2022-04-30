import React from 'react'
import { FiX } from 'react-icons/fi'
import { FaFacebookSquare, FaYoutube, FaInstagram } from 'react-icons/fa'

function DrawerWrapper(props) {
  return (
    
    <div className="drawer fixed z-10">
      <input id="side-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        
        {props.children}
        
      </div>
      <div className="drawer-side">
        <label htmlFor="side-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 ">
          <label htmlFor="side-drawer">
            <div className="flex flex-row align-center flex-nowrap justify-end mb-4 cursor-pointer hover:opacity-75 active:text-primary">
              <FiX size="1.5em" />
            </div>
          </label>
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
          <li className="flex flex-row align-center flex-nowrap justify-center">
            <a>
              <FaFacebookSquare size="1.5em" className="" />
            </a>
            <a>
              <FaYoutube size="1.5em" className="" />
            </a>
            <a>
              <FaInstagram size="1.5em" className="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DrawerWrapper
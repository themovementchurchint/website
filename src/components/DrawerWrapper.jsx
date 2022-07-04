import React from 'react'
import { HashLink } from 'react-router-hash-link'
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
            <HashLink smooth to={'#home'}>Home</HashLink>
          </li>
          <li>
            <HashLink smooth to={'#what-we-believe'}>What We Believe</HashLink>
          </li>
          <li>
            <HashLink smooth to={'#come-visit'}>Come Visit</HashLink>
          </li>
          <li>
            <HashLink smooth to={'#connect'}>Connect</HashLink>
          </li>
          <li className="flex flex-row align-center flex-nowrap justify-center">
            <a href={process.env.REACT_APP_FACEBOOK_LINK}>
              <FaFacebookSquare size="1.5em" className="" />
            </a>
            <a href={process.env.REACT_APP_YOUTUBE_LINK}>
              <FaYoutube size="1.5em" className="" />
            </a>
            <a href={process.env.REACT_APP_INSTAGRAM_LINK}>
              <FaInstagram size="1.5em" className="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DrawerWrapper
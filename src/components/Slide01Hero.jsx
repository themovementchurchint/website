import React from 'react'
import logo from '../logo.svg'

function Slide01Hero() {
  return (
    <div className="flex justify-center hero-overlay bg-secondary bg-opacity-5">
      {/* <div className="hero-content text-center text-neutral-content min-h-screen">
            <div className="flex flex-col md:flex-row items-center my-12 md:my-24 bg-white bg-opacity-5 rounded-2xl">
              <div className="flex flex-col w-full lg:w-1/2 justify-end items-center pt-12 lg:pb-24 pb-12 px-6">
                <h1 class="font-bold text-neutral lg:text-6xl text-4xl my-4 md:text-right text-center">The<br />Movement<br />Church</h1>
              </div> 
              <div class="divider md:divider-horizontal"></div>
              <div className="lg:justify-start flex justify-center w-full lg:w-1/2 lg:pl-6 text-center p-6">
                <img src={logo} className="w-2/3  lg:min-w-[240px] min-w-[160px] max-w-[240px]"/>
              </div>
            </div>
          </div> */}

      <div className="hero-content text-center text-neutral-content min-h-screen">
        <div className="flex flex-col items-center lg:pb-24">
          <img src={logo} alt="Logo" className="w-2/3 min-w-[160px] max-w-[180px]" />
          <div className="font-semibold text-5xl mt-6 text-neutral">
            The Movement Church
          </div>
          <div className="font-semibold text-2xl mb-6 text-neutral">
            Join the Movement!
          </div>
          <button className="btn btn-accent">Watch Online</button>
        </div>
      </div>
    </div>
  )
}

export default Slide01Hero

import React from 'react'
import YoutubeLogo from '../images/YoutubeLogo.svg'
import FacebookLogo from '../images/FacebookLogo.svg'
import InstagramLogo from '../images/InstagramLogo.svg'

function Slide04() {
  return (
    <div
      id="connect"
      className="relative hero min-h-screen"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/background4.jpg'})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex">
        <div className="card m-2 bg-base-100 shadow-xl min-h-[300px]">
          <div className="card-title p-4 mt-8 justify-center">
            CONNECT WITH US
          </div>
          <div className="card-body justify-center">
            Follow us to keep up to date with our upcomming events and special
            ocassions.
          </div>
          <div className="card-body">
            <div className="flex flex-col">
              <div className="flex flex-row justify-center">
                <div className="w-48 h-48 mx-8">
                  <img src={FacebookLogo} alt="Facebook" />
                </div>
                <div className="w-48 h-48 mx-8">
                  <img src={InstagramLogo} alt="Instagram" />
                </div>
              </div>
              <div className="flex justify-center mt-12  mb-8 h-32">
                <img src={YoutubeLogo} alt="Youtube" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide04

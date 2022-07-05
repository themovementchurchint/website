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
        zIndex: 4,
        backgroundImage: `url(${process.env.PUBLIC_URL + '/background4.jpg'})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          zIndex: 5,
          height: '100vh',
          width: '100%',
          backgroundColor: '#00000033',
        }}
      ></div>
      <div className="flex" style={{zIndex: 6}}>
        <div className="card mx-2  my-8 bg-base-100 shadow-xl min-h-[300px]">
          <div className="card-title p-4 mt-8 justify-center">
            CONNECT WITH US
          </div>
          <div className="card-body justify-center">
            Follow us to keep up to date with our upcomming events and special
            ocassions.
          </div>
          <div className="card-body">
            <div className="flex flex-col">
              <div className="flex flex-col lg:flex-row justify-center">
                <div className="w-40 h-40 lg:w-48 lg:h-48 lg:mx-8 mx-auto my-4">
                  <a href={process.env.REACT_APP_FACEBOOK_LINK}><img src={FacebookLogo} alt="Facebook" /></a>
                </div>
                <div className="w-40 h-40 lg:w-48 lg:h-48 lg:mx-8 mx-auto my-4">
                  <a href={process.env.REACT_APP_INSTAGRAM_LINK} ><img src={InstagramLogo} alt="Instagram" /></a>
                </div>
              </div>
              <div className="flex justify-center mt-12  mb-8 mx-auto h-32">
                <a href={process.env.REACT_APP_YOUTUBE_LINK}><img src={YoutubeLogo} alt="Youtube" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide04

import React from 'react'
import Pic1 from '../images/Pic1.jpg'
import Pic2 from '../images/Pic2.jpg'

function Slide02() {
  return (
    <div
      id="what-we-believe"
      className="relative hero min-h-[870px]"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/background2.jpg'})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex justify-center hero-overlay bg-secondary bg-opacity-5">
        <div className="hero-content text-center my-20">
          <div className="flex flex-col">
            <div className="flex flex-row items-stretch">
              <div className="w-1/2 min-w-[300px]">
                <div className="card m-2 bg-base-100 shadow-xl min-h-[300px]">
                  <div className="card-title p-4 justify-center pt-8">
                    OUR VISION
                  </div>
                  <div className="card-body text-left py-4">
                    The Movement Church is a multicuktural, multi-ethnic, multi
                    generational kingdom model that demonstrates wholeness,
                    welth, abundant living free from religious barricades.
                  </div>
                  <div className="card-title p-4 justify-center">
                    OUR MISSION
                  </div>
                  <div className="card-body text-left py-4">
                    To empower individuals to achieve their highest potential by
                    utilizing their own divine nature.
                  </div>
                  <div className="card-title p-4 justify-center">OUR STORY</div>
                  <div className="card-body text-left py-4">
                    After relocating from Dallas, TX to Orlando, From the very
                    beginning our prayer has always been that this house would
                    be a God-Honoring, multicultural, multi-ethnic,
                    multigenerational church that promotes the Kingdom of heaven
                    right here on the earth.
                  </div>
                  <div className="card-title p-4 justify-center">
                    WHAT WE BELIEVE
                  </div>
                  <div className="card-body text-left py-4">
                    <div>
                      "Christ was sacrificed once to take away the sins of many
                      people; and will appear a second time, not to bear sin,
                      but to bring salvation to those who are waiting for him."
                    </div>
                    <div className="card-actions justify-end text-right">
                      HEBREWS 9:28
                    </div>
                  </div>
                  <div className="card-body text-left pt-4 pb-8">
                    We believe that Jesus Christ is the very presence of God
                    manifested in those who would recieve this Christ
                    conscienceness that leads to a transformed life based on a
                    committed relationship with him!
                  </div>
                </div>
              </div>
              <div className="w-1/2 min-w-[300px]">
                <div className="card m-2 bg-base-100 shadow-xl overflow-hidden h-[98.5%]">
                  <div
                    className="h-full overflow-hidden"
                    style={{
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundImage: `url(${Pic2})`,
                    }}
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full"></div>
            <div className="flex">
              <div className="w-1/2 min-w-[300px]">
                <div className="card m-2 bg-base-100 shadow-xl overflow-hidden h-full">
                  <div
                    className="h-full overflow-hidden"
                    style={{
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundImage: `url(${Pic1})`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="w-1/2 min-w-[300px]">
                <div className="card m-2 bg-base-100 shadow-xl h-full">
                  <div className="card-title p-4 justify-center pt-8 font-bold text-primary-content text-2xl">
                    PASTORS MICHAEL AND FRANCINA NORMAN
                  </div>
                  <div className="card-title p-4 justify-center">
                    OUR STORY
                  </div>
                  <div className="card-body text-left py-4">
                    After relocating from Dallas, TX to Orlando, From the very
                    beginning our prayer has always been that this house would
                    be a God-Honoring, multicultural, multi-ethnic,
                    multigenerational church that promotes the Kingdom of heaven
                    right here on the earth.
                  </div>
                  <div className="card-title p-4 justify-center">
                    OUR VALUES
                  </div>
                  <div className="card-body text-left py-4">
                    <strong className="text-center">FAMILY</strong>
                    We believe that Families are the DNA of a healthy thriving
                    community That impacts cities, States, nations, and
                    ultimately the world.
                    <strong className="text-center">EMPOWERMENT</strong>
                    We believe that Jesus came that we might have life and that
                    more abundantly Through the divine nature that he brings to
                    everyone that receives him.
                    <strong className="text-center">SERVICE</strong>
                    We believe that the highest form of leadership is service to
                    our fellow man
                    <strong className="text-center">TEACHING</strong>
                    We help people by representing the scriptures in a way that
                    empowers them to reach their highest potential and their God
                    given destiny.
                    <strong className="text-center">LOVING</strong>
                    We believe that love is the epitome of God and as we
                    discipline ourselves to walk in love we begin to demonstrate
                    all of the attributes of God.
                    <strong className="text-center">JUDGEMENT</strong>
                    We believe that Jesus Christ was not sent to the world to
                    condemn it but to save it.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide02

import React from 'react'

function Slide01Bottom() {
  return (
    <div className="lg:absolute lg:bottom-4 hidden lg:flex lg:flex-row lg:justify-center">
      <div className="card w-1/3 mx-10 bg-neutral text-neutral-content">
        <div className="card-body">
          <h4 className="card-title text-base">We Believe</h4>
          <p className="text-sm font-light">
            We believe that Jesus Christ is the very presence of God manifested
            in those who would recieve this Christ conscienceness that leads to
            a transformed life based on a committed relationship with him!
          </p>
          <div className="w-100 flex justify-end">
            <button className="btn btn-primary w-1/2">Read More</button>
          </div>
        </div>
      </div>
      <div className="card w-1/3 mx-10 bg-neutral text-neutral-content">
        <div className="card-body">
          <h2 className="card-title text-base">Come and Visit Us!</h2>
          <p className="text-sm font-light">
            No matter where you join us from, we want you to be part of the
            family and we look forward to connecting with you! Join us live for
            Sunday Services Online at 1pm EST.
          </p>
          <div className="w-100 flex justify-end">
            <button className="btn btn-primary w-1/2">Get Directions</button>
          </div>
        </div>
      </div>
      <div className="card w-1/3 mx-10 bg-neutral text-neutral-content">
        <div className="card-body">
          <h2 className="card-title text-base">Stay Connected</h2>
          <p className="text-sm font-light">
            The Movement Church is a multicuktural, multi-ethnic, multi
            generational kingdom model that demonstrates wholeness, welth,
            abundant living free from religious barricades.
          </p>
          <div className="w-100 flex justify-end">
            <button className="btn btn-primary w-1/2">Connect with Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide01Bottom

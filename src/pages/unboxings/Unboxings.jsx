import React from 'react'
import './unboxings.css'

function Unboxings() {
  return (
    <>
        <div className="container">
            <div className="text-center py-5">
                <h1 className='text-white fs-4 fw-bold'>Unboxings from our customers</h1>
                <em className='fs-6 text-white'>Looking for evidence to open the box 📦?
                      On this page, Drakemall users can find the photos and videos they have shared with us on Facebook, Instagram, YouTube, Discord 😻 We are updating the list to help you guys decide whether or not 🐲</em>
                  <p className='fs-6 text-white pt-4'>If you’ve already received the prizes you can return money for delivery ($10 for picture and $30 for video)!</p>
                  <h1 className='text-white fs-4 fw-bold'>Here below is a list of unxings from our customers👇</h1>
            </div>

            <div className="row text-center py-5">
            <h1 className='text-danger fs-5 fw-bold'>There are no boxings yet!</h1>
            </div>
        </div>
    </>
  )
}

export default Unboxings
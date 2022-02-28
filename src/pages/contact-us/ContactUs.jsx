import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa';
import './contact.css'

function ContactUs() {
  return (
    <>
        <div className="container">
        <div className="text-center py-5">
          <h1 className='fs-4 text-white fw-bold'>Contact us</h1>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="contact-content bg-contact">
              <p className='contact-text'>If you have any troubles viewing, using Drakemall.com or if you have suggestions on how to improve our service, please contact our support team: support@boxx.com</p>
              <h1 className='contact-h1'>You can also contact us via social networks, such us:</h1>
              <div className="my-3">
              <Link to="" className='facebook'> <FaFacebook/> Facebook</Link>
              </div>
              <p className='contact-text'>To get help as quickly as possible, you should provide us detailed information regarding the case. It is also desirable if you could provide screenshots and log files for us to understand the problem better.</p>
              <h1 className='contact-h1'>Remember, our support is here to help our customers any time!</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
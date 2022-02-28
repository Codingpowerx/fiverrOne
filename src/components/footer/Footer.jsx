import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
  return (
    <>
        <footer className='bg-footer py-5 mt-5'>
            <div className="container">
                <div className="row pb-4">
                    <div className="col-md">
                        <Link to="terms-and-condition" className='footer-link'>TERMS AND CONDITIONS</Link> <br />
                        <Link to="security-and-privacy" className='footer-link'>SECURITY AND PRIVACY</Link> <br />
                    </div>
                    <div className="col-md">
                        <Link to="contact-us" className='footer-link'>CONTACT US</Link> <br />
                    </div>
                </div>
                <div className="row">
                    <p className='fs-footer text-secondary'>About Boxx</p>
                    <p className='fs-footer text-secondary'>Here you can open mystery boxes to get good offers for real items. Open boxes and get electronics, gaming gadgets, items for geeks, sports equipment, toys, video games, and other trendy products with a discount much cheaper than on retail! On Drakemall you can always see what's inside our mystery boxes before you open them, and be certain that we’ll deliver any item in time anywhere in the world. To provide our customers with a thrilling experience, we regularly update our list of goods and boxes and use stable payment systems and accept credit cards. You can also purchase our gift cards using PayPal on Gamivo to top-up your balance anytime. Just click on highlighted boxes and get presented items right now! But before you enter our ranks, you have to sign up, add funds to your account and accept our terms and conditions . Be advised that only persons over 18 years of age are permitted to use our service.</p>
                    <p className='fs-footer text-secondary'>Mystery Boxx operated by Esports Kingdom LP2footerfooter4 (Office 29, Clifton house, Fitzwilliam Street lower, Dublin 2, D02 XT91, Republic of Ireland).</p>
                    <p className='fs-footer text-secondary'>© 2022 Mystery Boxx. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
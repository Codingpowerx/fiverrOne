import React from 'react'
import "./header.css"; 
import { motion } from 'framer-motion';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css'
import { Link } from 'react-router-dom';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

function Header() {

  const variants = {
    initial: {
      opacity: 0,
      y:50
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    }
  }

  return (
    <>
    <Swiper
        className="conrol-slider"
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        >
        <SwiperSlide className='slide1'>
            <motion.div variants={variants} initial="initial" animate="animate" className="slideTextDiv container">
                <p className="p-header text-white">MYSTERY GAMES</p>
                <h1 className='text-white font-header pb-3 text-uppercase'>Open Mystery <br />Boxes & Receive <br /> awesome Items</h1>
                <p className="desc">Start unboxing authentic products from Supreme, Gucci,<br /> Apple and more for up to 85% off. Open pre-made mystery boxes or make your own.</p>
                <Link to="mystery-box" className='btn text-white vs-btn'>START UNBOXING</Link>
            </motion.div>
        </SwiperSlide>
        <SwiperSlide className='slide3'>
                <div className="slideTextDiv container">
                    <p className="p-header text-white">PROFESSIONAL SERVICE</p>
                    <h1 className='text-white font-header pb-3'>YOU'VE GOT QUESTIONS? <br /> WE'RE HAPPY TO HELP</h1>
                    <p className="desc">Let us know if you've got any questions and will get back to you as soon as possible .</p>
                    <Link to="contact-us" className='btn text-white vs-btn'>CONTACT US</Link>
                </div>
        </SwiperSlide>
        <SwiperSlide className='slide2'>
                <div className="slideTextDiv container">
                    <p className="p-header text-white">UNBOXINGS</p>
                    <h1 className='text-white font-header pb-3'>SEE ITEMS <br /> UNBOXED FROM OUR CUSTOMERS</h1>
                    <p className="desc">Exclusive items won by our prev customers, good content and exciting offers.</p>
                    <Link to="unboxings-from-customers" className='btn text-white vs-btn'>EXPLORE ITEMS</Link>
                </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Header
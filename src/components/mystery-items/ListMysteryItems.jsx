import React from 'react'
import { Link } from 'react-router-dom'
import './listMysteryItems.css'
import { FaGifts } from 'react-icons/fa';
import gift from '../../assets/items/iphones.png'
import newIcon from '../../assets/items/new.webp'
import { motion } from 'framer-motion';

function ListMysteryItems() {
  return (
    <>
        <div className="container pb-5">
            <div className="text-center py-5">
                <h1 className='text-white fw-bold fs-2'>List of Mystery Boxes</h1>
                <Link to="unboxings-from-customers" className='custom-yellow fw-bold'> Unboxings from our customers <FaGifts/> </Link>
            </div>

            <div className="row py-5 g-4">
                <div className="col-lg-3">
                  <motion.div whileHover={{ scale: 1.1 }} className="text-center card-bg border-none">
                    <Link to="" className='text-decoration-none'>
                      <div className="pb-5">
                        <img src={gift} alt="" className='gift-item pb-1'/>
                        <p className="card-text pt-2 fw-bold fs-4 text-white">Iphone Box.</p>
                        <p className="price text-white fw-bold fs-4">$5.99</p>
                        <Link to="mystery-box" className="btn card-btn mb-5 text-white">open now</Link>
                      </div>
                    </Link>
                  </motion.div>
                </div>
                <div className="col-lg-3">
                  <motion.div whileHover={{ scale: 1.1 }} className="text-center card-bg border-none">
                    <Link to="" className='text-decoration-none'>
                      <div className="pb-5">
                        <img src={gift} alt="" className='gift-item pb-1'/>
                        <p className="card-text pt-2 fw-bold fs-4 text-white">Iphone Box.</p>
                        <p className="price text-white fw-bold fs-4">$5.99</p>
                        <Link to="mystery-box" className="btn card-btn mb-5 text-white">open now</Link>
                      </div>
                    </Link>
                  </motion.div>
                </div>
                <div className="col-lg-3">
                  <motion.div whileHover={{ scale: 1.1 }} className="text-center card-bg border-none">
                    <Link to="" className='text-decoration-none'>
                      <div className="pb-5">
                        <img src={gift} alt="" className='gift-item pb-1'/>
                        <p className="card-text pt-2 fw-bold fs-4 text-white">Iphone Box.</p>
                        <p className="price text-white fw-bold fs-4">$5.99</p>
                        <Link to="mystery-box" className="btn card-btn mb-5 text-white">open now</Link>
                      </div>
                    </Link>
                  </motion.div>
                </div>
                <div className="col-lg-3">
                  <motion.div whileHover={{ scale: 1.1 }} className="text-center card-bg border-none">
                    <Link to="" className='text-decoration-none'>
                      <div className="pb-5">
                        <img src={gift} alt="" className='gift-item pb-1'/>
                        <p className="card-text pt-2 fw-bold fs-4 text-white">Iphone Box.</p>
                        <p className="price text-white fw-bold fs-4">$5.99</p>
                        <Link to="mystery-box" className="btn card-btn mb-5 text-white">open now</Link>
                      </div>
                    </Link>
                  </motion.div>
                </div>
                <div className="col-lg-3">
                  <motion.div whileHover={{ scale: 1.1 }} className="text-center card-bg border-none">
                    <Link to="" className='text-decoration-none'>
                      <div className="pb-5">
                        <img src={gift} alt="" className='gift-item pb-1'/>
                        <p className="card-text pt-2 fw-bold fs-4 text-white">Iphone Box.</p>
                        <p className="price text-white fw-bold fs-4">$5.99</p>
                        <Link to="mystery-box" className="btn card-btn mb-5 text-white">open now</Link>
                      </div>
                    </Link>
                  </motion.div>
                </div>
                <div className="col-lg-3">
                  <motion.div whileHover={{ scale: 1.1 }} className="text-center card-bg border-none">
                    <Link to="" className='text-decoration-none'>
                      <div className="pb-5">
                        <img src={gift} alt="" className='gift-item pb-1'/>
                        <p className="card-text pt-2 fw-bold fs-4 text-white">Iphone Box.</p>
                        <p className="price text-white fw-bold fs-4">$5.99</p>
                        <Link to="mystery-box" className="btn card-btn mb-5 text-white">open now</Link>
                      </div>
                    </Link>
                  </motion.div>
                </div>
                <div className="col-lg-3">
                  <motion.div whileHover={{ scale: 1.1 }} className="text-center card-bg border-none">
                    <Link to="" className='text-decoration-none'>
                      <div className="pb-5">
                        <img src={gift} alt="" className='gift-item pb-1'/>
                        <p className="card-text pt-2 fw-bold fs-4 text-white">Iphone Box.</p>
                        <p className="price text-white fw-bold fs-4">$5.99</p>
                        <Link to="mystery-box" className="btn card-btn mb-5 text-white">open now</Link>
                      </div>
                    </Link>
                  </motion.div>
                </div>
                <div className="col-lg-3">
                  <motion.div whileHover={{ scale: 1.1 }} className="text-center card-bg border-none">
                    <Link to="" className='text-decoration-none'>
                      <div className="pb-5">
                        <img src={gift} alt="" className='gift-item pb-1'/>
                        <p className="card-text pt-2 fw-bold fs-4 text-white">Iphone Box.</p>
                        <p className="price text-white fw-bold fs-4">$5.99</p>
                        <Link to="mystery-box" className="btn card-btn mb-5 text-white">open now</Link>
                      </div>
                    </Link>
                  </motion.div>
                </div>
                <div className="col-lg-3">
                  <motion.div whileHover={{ scale: 1.1 }} className="text-center card-bg border-none">
                    <Link to="" className='text-decoration-none'>
                      <div className="pb-5">
                        <img src={gift} alt="" className='gift-item pb-1'/>
                        <p className="card-text pt-2 fw-bold fs-4 text-white">Iphone Box.</p>
                        <p className="price text-white fw-bold fs-4">$5.99</p>
                        <Link to="mystery-box" className="btn card-btn mb-5 text-white">open now</Link>
                      </div>
                    </Link>
                  </motion.div>
                </div>
                <div className="col-lg-3">
                  <motion.div whileHover={{ scale: 1.1 }} className="text-center card-bg border-none">
                    <Link to="" className='text-decoration-none'>
                      <div className="pb-5">
                        <img src={gift} alt="" className='gift-item pb-1'/>
                        <p className="card-text pt-2 fw-bold fs-4 text-white">Iphone Box.</p>
                        <p className="price text-white fw-bold fs-4">$5.99</p>
                        <Link to="mystery-box" className="btn card-btn mb-5 text-white">open now</Link>
                      </div>
                    </Link>
                  </motion.div>
                </div>
                <div className="col-lg-3">
                  <motion.div whileHover={{ scale: 1.1 }} className="text-center card-bg border-none">
                    <Link to="" className='text-decoration-none'>
                      <div className="pb-5">
                        <img src={gift} alt="" className='gift-item pb-1'/>
                        <p className="card-text pt-2 fw-bold fs-4 text-white">Iphone Box.</p>
                        <p className="price text-white fw-bold fs-4">$5.99</p>
                        <Link to="mystery-box" className="btn card-btn mb-5 text-white">open now</Link>
                      </div>
                    </Link>
                  </motion.div>
                </div>
                <div className="col-lg-3">
                  <motion.div whileHover={{ scale: 1.1 }} className="text-center card-bg border-none">
                    <Link to="" className='text-decoration-none'>
                      <div className="pb-5">
                        <img src={gift} alt="" className='gift-item pb-1'/>
                        <p className="card-text pt-2 fw-bold fs-4 text-white">Iphone Box.</p>
                        <p className="price text-white fw-bold fs-4">$5.99</p>
                        <Link to="mystery-box" className="btn card-btn mb-5 text-white">open now</Link>
                      </div>
                    </Link>
                  </motion.div>
                </div>
            </div>
            
            <div className="text-center py-5">
                <h1 className='text-white fw-bold fs-2'>New to the website?</h1>
                <h2 className='text-secondary fw-bold fs-5'>Here’s a short instruction:</h2>
            </div>
            <div className="row g-3 pb-5">
              <div className="col-md-4">
                <motion.div className="new text-center cursor-pointer" whileHover={{ scale: 1.1 }}>
                  <img src={newIcon} className="newIcon" alt="" />
                  <h1 className='fs-5 text-white pt-3'>Register via e-mail or social networks</h1>
                  <p className="text-secondary">After logging in to your Lootie account, you’ll see your profile icon and balance in the top right corner of the website. Click on the yellow plus icon that’s next to your balance. This will direct you to the top-up page. It’s that simple!</p>
                </motion.div>
              </div>
              <div className="col-md-4">
                <motion.div className="new text-center cursor-pointer" whileHover={{ scale: 1.1 }}>
                  <img src={newIcon} className="newIcon" alt="" />
                  <h1 className='fs-5 text-white pt-3'>BROWSE OUR MYSTERY BOXES</h1>
                  <p className='text-secondary'>Lootie features a myriad of mystery boxes containing luxurious products from exclusive brands such as Nike, Supreme, and more. To view all of the mystery boxes the site offers, head over to the box listing page. You’re sure to be impressed</p>
                </motion.div>
              </div>
              <div className="col-md-4">
                <motion.div className="new text-center cursor-pointer" whileHover={{ scale: 1.1 }}>
                  <img src={newIcon} className="newIcon" alt="" />
                  <h1 className='fs-5 text-white pt-3'>CHOOSE AND OPEN YOUR MYSTERY BOX</h1>
                  <p className='text-secondary'>With our spin unboxing process, shopping for your favorite products is fun, easy, and instant. Lootie’s product guarantee ensures that each item you see on the site has a real-world analogue and will be 100% authentic. </p>
                </motion.div>
              </div>
            </div>
        </div>
    </>
  )
}

export default ListMysteryItems
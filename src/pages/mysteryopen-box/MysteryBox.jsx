import { motion } from 'framer-motion';
import React, { useState } from  'react';
import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';
import gift from '../../assets/items/iphones.png'
import { Link } from 'react-router-dom';
import './mystery.css'

const prizes = [
    {
      id: '7d24b681-82d9-4fc0-b034-c82f9db11a59',
      image: 'https://i.ibb.co/6Z6Xm9d/good-1.png',
    },
    {
      id: '9da9a287-952f-41bd-8c7a-b488938d7c7a',
      image: 'https://i.ibb.co/T1M05LR/good-2.png',
    },
    {
      id: '04106f3f-f99f-47e4-a62e-3c81fc8cf794',
      image: 'https://i.ibb.co/Qbm8cNL/good-3.png',
    },
    {
      id: '23c551bf-8425-4ffd-b7c2-77c87844f89d',
      image: 'https://i.ibb.co/5Tpfs6W/good-4.png',
    },
    {
      id: 'e4060930-538f-4bf7-ab8e-8d2aa05fba43',
      image: 'https://i.ibb.co/64k8D1c/good-5.png',
    },
];
  
const reproductionArray = (array = [], length = 0) => [
  ...Array(length)
    .fill('_')
    .map(() => array[Math.floor(Math.random() * array.length)]),
];

const prizeList = [
    ...prizes,
    ...reproductionArray(prizes, prizes.length * 3),
    ...prizes,
    ...reproductionArray(prizes, prizes.length),
];  

function MysteryBox() {

  const [start, setStart] = useState(false);

  const prizeIndex = prizes.length * 4 + 2;

  const handleStart = () => {
    setStart((prevState) => !prevState);
  };

  const handlePrizeDefined = () => {
    console.log('🥳 Prize defined! 🥳');
  };

  return (
    <>
        <div className="container py-5">
            
        <div className="row align-items-center pb-3">
          <div className="col-md-6">
            <div className="spin-banner">
              <div className="text-center border-none">
                <div className="d-flex align-items-center">
                  <img src={gift} alt="" className='selected-item'/>
                  <div className="onebody">
                    <h3 className="card-text fw-bold fs-4 text-white">Iphone Box.</h3>
                    <p className="price text-white fw-bold fs-4">$5.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="spin-banner">
              <div className="text-center border-none">
                <h1 className='fs-5 text-white selected-text fw-bold'>Chosen box! Now try a spin to see what you can get</h1>
              </div>
            </div>
          </div>
        </div>
              
        <RoulettePro
            prizes={prizeList}
            prizeIndex={prizeIndex}
            start={start}
            onPrizeDefined={handlePrizeDefined}
        />

        <div className="text-center pt-3">
          <button className='btn text-white vs-btn' onClick={handleStart}>TEST SPIN</button>
        </div>

        <div className="row py-5">
          <div className="text-center py-5">
            <h1 className='fs-5 text-white fw-bold'>Items in the box that you can get</h1>
          </div>
        </div>

        <div className="row gy-5">
          <div className="col-md-3">
            <motion.div class="card luck-card" whileHover={{ scale: 1.1 }}>
              <img src={prizes[0].image} class="card-img-top luck-img" alt="..."/>
              <div className="px-5 text-center">
              <h1 className='fs-6 text-white'> Apple 13</h1>
              <h1 className='fs-6 text-white'>$900</h1>
              </div>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div class="card luck-card" whileHover={{ scale: 1.1 }}>
              <img src={prizes[1].image} class="card-img-top luck-img" alt="..."/>
              <div className="px-5 text-center">
              <h1 className='fs-6 text-white'> Apple 13</h1>
              <h1 className='fs-6 text-white'>$900</h1>
              </div>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div class="card luck-card" whileHover={{ scale: 1.1 }}>
              <img src={prizes[2].image} class="card-img-top luck-img" alt="..."/>
              <div className="px-5 text-center">
              <h1 className='fs-6 text-white'> Apple 13</h1>
              <h1 className='fs-6 text-white'>$900</h1>
              </div>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div class="card luck-card" whileHover={{ scale: 1.1 }}>
              <img src={prizes[3].image} class="card-img-top luck-img" alt="..."/>
              <div className="px-5 text-center">
              <h1 className='fs-6 text-white'> Apple 13</h1>
              <h1 className='fs-6 text-white'>$900</h1>
              </div>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div class="card luck-card" whileHover={{ scale: 1.1 }}>
              <img src={prizes[4].image} class="card-img-top luck-img" alt="..."/>
              <div className="px-5 text-center">
              <h1 className='fs-6 text-white'> Apple 13</h1>
              <h1 className='fs-6 text-white'>$900</h1>
              </div>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div class="card luck-card" whileHover={{ scale: 1.1 }}>
              <img src={prizes[0].image} class="card-img-top luck-img" alt="..."/>
              <div className="px-5 text-center">
              <h1 className='fs-6 text-white'> Apple 13</h1>
              <h1 className='fs-6 text-white'>$900</h1>
              </div>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div class="card luck-card" whileHover={{ scale: 1.1 }}>
              <img src={prizes[1].image} class="card-img-top luck-img" alt="..."/>
              <div className="px-5 text-center">
              <h1 className='fs-6 text-white'> Apple 13</h1>
              <h1 className='fs-6 text-white'>$900</h1>
              </div>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div class="card luck-card" whileHover={{ scale: 1.1 }}>
              <img src={prizes[2].image} class="card-img-top luck-img" alt="..."/>
              <div className="px-5 text-center">
              <h1 className='fs-6 text-white'> Apple 13</h1>
              <h1 className='fs-6 text-white'>$900</h1>
              </div>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div class="card luck-card" whileHover={{ scale: 1.1 }}>
              <img src={prizes[3].image} class="card-img-top luck-img" alt="..."/>
              <div className="px-5 text-center">
              <h1 className='fs-6 text-white'> Apple 13</h1>
              <h1 className='fs-6 text-white'>$900</h1>
              </div>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div class="card luck-card" whileHover={{ scale: 1.1 }}>
              <img src={prizes[4].image} class="card-img-top luck-img" alt="..."/>
              <div className="px-5 text-center">
              <h1 className='fs-6 text-white'> Apple 13</h1>
              <h1 className='fs-6 text-white'>$900</h1>
              </div>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div class="card luck-card" whileHover={{ scale: 1.1 }}>
              <img src={prizes[0].image} class="card-img-top luck-img" alt="..."/>
              <div className="px-5 text-center">
              <h1 className='fs-6 text-white'> Apple 13</h1>
              <h1 className='fs-6 text-white'>$900</h1>
              </div>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div class="card luck-card" whileHover={{ scale: 1.1 }}>
              <img src={prizes[1].image} class="card-img-top luck-img" alt="..."/>
              <div className="px-5 text-center">
              <h1 className='fs-6 text-white'> Apple 13</h1>
              <h1 className='fs-6 text-white'>$900</h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default MysteryBox
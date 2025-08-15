import React from 'react';
import { motion } from 'framer-motion';
import Icons from '../../assets/icons';
import { fadeIn, staggerContainer } from '../../virains';

const Hero = () => {
  const cities = [
    { name: 'Phnom Penh', country: 'Cambodia' },
    { name: 'Siem Reap', country: 'Cambodia' },
    { name: 'Konh rong', country: 'Cambodia' },
    { name: 'Sihanoukville', country: 'Cambodia' },
    { name: 'Battambang', country: 'Cambodia' },
    { name: 'Kampot', country: 'Cambodia' },
    { name: 'Kep', country: 'Cambodia' },
    { name: 'Kampong Cham', country: 'Cambodia' },
    { name: 'Kratie', country: 'Cambodia' },
    { name: 'Stung Treng', country: 'Cambodia' },
    { name: 'Ratanakiri', country: 'Cambodia' },
    { name: 'Mondulkiri', country: 'Cambodia' },
  ];

  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="relative"
    >
      {/* Hero Content */}
      <motion.div
        variants={staggerContainer()}
        className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/Images/HeroImage.jpeg")] bg-no-repeat bg-cover bg-center h-screen'
      >
        {/* Title - Coming from left */}
        <motion.p 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ 
            type: 'tween',
            duration: 0.8,
            ease: [0.25, 0.25, 0.25, 0.75]
          }}
          className="px-3.5 bg-[#49B9FF]/50 py-1 rounded-full mt-20"
        >
          The Ultimate Booking Experience
        </motion.p>
        
        {/* Headline - Coming from left with delay */}
        <motion.h1 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ 
            delay: 0.2,
            type: 'tween',
            duration: 0.8,
            ease: [0.25, 0.25, 0.25, 0.75]
          }}
          className="text-2xl font-playfair md:text-5xl md:leading-[56px] md:font-extrabold max-w-xl mt-4 lg:text-5xl xl:text-6xl font-bold"
        >
          Discover Your Perfect Stay with KhmerStay
        </motion.h1>
        
        {/* Description - Coming from left with more delay */}
        <motion.p 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ 
            delay: 0.4,
            type: 'tween',
            duration: 0.8,
            ease: [0.25, 0.25, 0.25, 0.75]
          }}
          className="mt-4 mb-2 text-sm md:text-base leading-relaxed max-w-[500px]"
        >
          Experience the best of Cambodia with our curated selection of accommodations, from luxury hotels to cozy guesthouses. Book your dream stay today!
        </motion.p>
        
        {/* Form - Coming from left with most delay */}
        <motion.form 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ 
            delay: 0.6,
            type: 'tween',
            duration: 0.8,
            ease: [0.25, 0.25, 0.25, 0.75]
          }}
          className='bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row max-md:items-start gap-4 shadow-lg'
        >
          {/* Form content remains the same */}
          <div>
            <div className='flex items-center gap-2'>
              <img src={Icons.location} alt="" className='h-4' />
              <label htmlFor="destinationInput">Destination</label>
            </div>
            <input 
              list='destinations' 
              id="destinationInput" 
              type="text" 
              className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full" 
              placeholder="Type here" 
              required 
            />
            <datalist id='destinations'>
              {cities.map((city, index) => (
                <option key={index} value={city.name}>
                  {city.name} - {city.country}
                </option>
              ))}
            </datalist>
          </div>

          <div>
            <div className='flex items-center gap-2'>
              <img src={Icons.calendar} alt="" className='h-4' />
              <label htmlFor="checkIn">Check in</label>
            </div>
            <input id="checkIn" type="date" className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full" />
          </div>

          <div>
            <div className='flex items-center gap-2'>
              <img src={Icons.calendar} alt="" className='h-4' />
              <label htmlFor="checkOut">Check out</label>
            </div>
            <input id="checkOut" type="date" className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full" />
          </div>

          <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
            <label htmlFor="guests">Guests</label>
            <input min={1} max={4} id="guests" type="number" className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16" placeholder="0" />
          </div>

          <motion.button 
            className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 my-auto max-md:w-full max-md:py-1 transition-colors cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[""] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[15px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={Icons.search} alt="SearchIcon" className='h-7 filter brightness-0 invert' />
            <span>Search</span>
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  )
}

export default Hero;
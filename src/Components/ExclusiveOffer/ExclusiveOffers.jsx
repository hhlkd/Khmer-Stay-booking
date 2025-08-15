import React from 'react';
import { motion } from 'framer-motion';
import Title from '../../Models/Title/title';
import Icons from '../../assets/icons';
import { exclusiveOffers } from '../../Data/hotelsData';
import { fadeIn, staggerContainer } from '../../virains';

const ExclusiveOffers = () => {
  const displayedOffers = exclusiveOffers.slice(0, 3);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      variants={staggerContainer()}
      className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-20'
    >
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <motion.div variants={fadeIn("left", 0.2)}>
          <Title 
            align='left' 
            title='Exclusive Offers' 
            subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.' 
          />
        </motion.div>
        
        <motion.button 
          variants={fadeIn("left", 0.3)}
          className='group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12'
          whileHover={{ x: 5 }}
        >
          View All offers
          <motion.img 
            src={Icons.arrow} 
            alt="" 
            className='transition-all'
            whileHover={{ x: 5 }}
          />
        </motion.button>
      </div>
      
      <motion.div 
        variants={staggerContainer(0.1)}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full'
      >
        {displayedOffers.map((item, index) => (
          <motion.div
            key={item._id}
            variants={fadeIn("up", 0.2 + index * 0.1)}
            whileHover={{ y: -10 }}
            className='group relative flex flex-col items-start justify-between gap-6 pt-16 pb-6 px-6 text-white bg-no-repeat bg-cover bg-center rounded-xl overflow-hidden min-h-[250px] cursor-pointer'
            style={{ 
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${item.image})`
            }}
          >
            {/* Badge */}
            {item.badge && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="px-3 py-1 absolute top-4 left-4 text-sm bg-white text-gray-800 font-medium rounded-full"
              >
                {item.badge}
              </motion.span>
            )}
            
            {/* Discount Percentage */}
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="px-3 py-1 absolute top-4 right-4 text-sm bg-red-500 text-white font-medium rounded-full"
            >
              {item.priceOff}% Off
            </motion.span>
            
            {/* Content */}
            <div className="flex-grow flex flex-col justify-end w-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="mb-4"
              >
                <h3 className="text-2xl font-medium font-playfair mb-2">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm">{item.description}</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex justify-between items-end w-full"
              >
                <span className="text-xs text-white/70">
                  Valid until: {item.expiryDate}
                </span>
                <button className='flex items-center gap-2 font-medium cursor-pointer hover:text-blue-200 transition-colors'>
                  View offer
                  <motion.img 
                    src={Icons.arrow} 
                    alt="" 
                    className="invert brightness-0"
                    whileHover={{ x: 5 }}
                  />
                </button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ExclusiveOffers;
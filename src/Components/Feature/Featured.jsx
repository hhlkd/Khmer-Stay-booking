import React from 'react';
import { useNavigate } from 'react-router-dom';
import { hotelsData } from '../../Data/hotelsData';
import HotelCard from '../HotelCard/HotelCard';
import { motion } from "framer-motion";

export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  }
}

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerChildren,
      delayChildren: delayChildren,
    },
  },
});

const Featured = () => {
  const navigate = useNavigate();

  const handleHotelClick = (hotelId) => {
    const hotel = hotelsData.find(h => h._id === hotelId);
    if (hotel?.rooms?.length > 0) {
      navigate(`/rooms/${hotel.rooms[0]._id}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div 
          variants={fadeIn("up", 0.2)}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Hotels</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our top-rated accommodations in Cambodia's most popular destinations
          </p>
        </motion.div>

        {/* Hotel Cards Grid */}
        <motion.div
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {hotelsData.slice(0, 4).map((hotel, index) => (
            <motion.div
              key={hotel._id}
              variants={fadeIn("up", 0.2 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              onClick={() => handleHotelClick(hotel._id)}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="cursor-pointer"
            >
              <HotelCard hotel={hotel} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          className="text-center mt-10"
        >
          <motion.button
            onClick={() => {
              navigate('/rooms');
              window.scrollTo(0, 0);
            }}
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#EFF6FF",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            View All Hotels
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Featured;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getHotelById } from '../../../Data/hotelsData';
import { fadeIn, staggerContainer } from '../../../virains';

const HotelDetail = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const foundHotel = getHotelById(Number(id));
    setHotel(foundHotel);
  }, [id]);

  if (!hotel) return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto py-8 px-4 mt-10 text-center"
    >
      Loading room details...
    </motion.div>
  );

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer()}
      className="container mx-auto py-8 px-4 mt-10"
    >
      {/* Hotel Header */}
      <motion.div variants={fadeIn("up", 0.2)}>
        <h1 className="text-3xl font-bold mb-6">{hotel.name}</h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hotel images gallery */}
        <motion.div variants={fadeIn("right", 0.3)}>
          <motion.img 
            src={hotel.images[0]} 
            alt={hotel.name}
            className="w-full rounded-lg mb-4"
            whileHover={{ scale: 1.02 }}
          />
          <motion.div 
            className="grid grid-cols-2 gap-4"
            variants={staggerContainer(0.1)}
          >
            {hotel.images.slice(1).map((img, index) => (
              <motion.img 
                key={index}
                variants={fadeIn("up", 0.2 + index * 0.1)}
                src={img}
                alt={`${hotel.name} ${index + 1}`}
                className="w-full rounded-lg"
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </motion.div>
        </motion.div>
        
        {/* Hotel details */}
        <motion.div variants={fadeIn("left", 0.4)}>
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="flex items-center mb-4"
              variants={fadeIn("up", 0.3)}
            >
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {hotel.stars}★ Hotel
              </span>
              <span className="ml-4 text-yellow-500">★ {hotel.rating}</span>
              <span className="text-gray-500 text-sm ml-1">({hotel.reviews} reviews)</span>
            </motion.div>
            
            <motion.p 
              className="text-gray-700 mb-6"
              variants={fadeIn("up", 0.4)}
            >
              {hotel.description}
            </motion.p>
            
            <motion.div 
              className="mb-6"
              variants={fadeIn("up", 0.5)}
            >
              <h3 className="font-semibold mb-2">Address:</h3>
              <p>{hotel.address}</p>
            </motion.div>
            
            <motion.div 
              className="mb-6"
              variants={fadeIn("up", 0.6)}
            >
              <h3 className="font-semibold mb-2">Amenities:</h3>
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={staggerContainer(0.1)}
              >
                {hotel.amenities.map((amenity, index) => (
                  <motion.span 
                    key={index}
                    variants={fadeIn("up", 0.2 + index * 0.1)}
                    whileHover={{ scale: 1.1 }}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {amenity}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.button 
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={fadeIn("up", 0.7)}
            >
              Book Now (From ${hotel.priceRange.min})
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Rooms section */}
      <motion.div 
        className="mt-12"
        variants={fadeIn("up", 0.8)}
      >
        <h2 className="text-2xl font-bold mb-6">Available Rooms</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer(0.1)}
        >
          {hotel.rooms.map((room, index) => (
            <motion.div 
              key={room._id}
              variants={fadeIn("up", 0.2 + index * 0.1)}
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
              <h3 className="text-xl font-semibold mb-2">{room.type}</h3>
              <p className="text-gray-600 mb-4">{room.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold">${room.price} / night</span>
                <motion.button 
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Select Room
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HotelDetail;
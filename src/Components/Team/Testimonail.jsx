import React from 'react';
import { motion } from 'framer-motion';
import Title from '../../Models/Title/title';
import { fadeIn, staggerContainer } from '../../virains';

const Star = ({ filled }) => (
  <motion.svg 
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    whileHover={{ scale: 1.2 }}
    transition={{ type: 'spring', stiffness: 400 }}
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </motion.svg>
);

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      rating: 5,
      review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides."
    },
    {
      id: 2,
      name: "Liam Johnson",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      rating: 5,
      review: "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!"
    },
    {
      id: 3,
      name: "Sophia Lee",
      location: "Seoul, South Korea",
      image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
      rating: 5,
      review: "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!"
    }
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      variants={staggerContainer()}
      className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-20'
    >
      <motion.div 
        variants={fadeIn("up", 0.2)}
        className="w-full"
      >
        <Title 
          align='center' 
          title='What Our Guests Say' 
          subTitle='Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world.' 
        />
      </motion.div>
      
      <motion.div 
        variants={staggerContainer(0.1)}
        className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full'
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            variants={fadeIn("up", 0.2 + index * 0.1)}
            whileHover={{ 
              y: -5, 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 }
            }}
            className='bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col'
          >
            {/* User Info at Top */}
            <motion.div 
              className='flex items-center gap-4 mb-4'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <motion.img 
                src={testimonial.image} 
                alt={testimonial.name}
                className='w-12 h-12 rounded-full object-cover'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring' }}
              />
              <div>
                <h4 className='text-lg font-semibold text-gray-900'>{testimonial.name}</h4>
                <p className='text-gray-500 text-sm'>{testimonial.location}</p>
              </div>
            </motion.div>
            
            {/* Stars Below User Info */}
            <motion.div 
              className='flex gap-1 mb-6'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} filled={testimonial.rating > i} />
              ))}
            </motion.div>
            
            {/* Review at Bottom */}
            <motion.div 
              className='mt-auto'
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className='text-gray-600 italic'>"{testimonial.review}"</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
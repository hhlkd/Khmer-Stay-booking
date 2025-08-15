import React from 'react';
import { motion } from 'framer-motion';
import Icons from '../../assets/icons';
import { fadeIn, staggerContainer } from '../../virains';

const NewsLetter = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      variants={staggerContainer()}
      className="w-full py-20 px-4 text-white"
    >
      <motion.div 
        variants={fadeIn("up", 0.2)}
        className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 p-8 md:p-12 shadow-2xl border border-gray-700"
      >
        <motion.div 
          className="text-center mb-8"
          variants={fadeIn("up", 0.3)}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-2"
            variants={fadeIn("up", 0.3)}
          >
            Stay Inspired
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            variants={fadeIn("up", 0.4)}
          >
            Join our community and get exclusive travel inspiration delivered to your inbox
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
          variants={fadeIn("up", 0.5)}
        >
          <motion.input 
            type="email" 
            className="flex-grow bg-white/5 px-6 py-3.5 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
            placeholder="Your email address"
            whileFocus={{ 
              scale: 1.02,
              borderColor: "#3B82F6"
            }}
            transition={{ type: 'tween', duration: 0.2 }}
          />
          <motion.button 
            className="flex-shrink-0 flex items-center justify-center gap-2 group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 px-6 py-3.5 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Subscribe
            <motion.img 
              src={Icons.arrow} 
              alt="" 
              className="w-4 invert"
              whileHover={{ x: 5 }}
            />
          </motion.button>
        </motion.div>
        
        <motion.p 
          className="text-gray-400 mt-6 text-sm text-center max-w-2xl mx-auto"
          variants={fadeIn("up", 0.6)}
        >
          By subscribing, you agree to our <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a> and consent to receive updates.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default NewsLetter;
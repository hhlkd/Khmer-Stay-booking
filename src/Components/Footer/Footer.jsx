import React from 'react';
import { motion } from 'framer-motion';
import Icons from '../../assets/icons';
import { fadeIn, staggerContainer } from '../../virains';

const Footer = () => {
    return (
        <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer()}
            className='text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'
        >
            <motion.div 
                variants={staggerContainer(0.1)}
                className='flex flex-wrap justify-between gap-12 md:gap-6'
            >
                {/* Logo and Social Media */}
                <motion.div 
                    variants={fadeIn("up", 0.2)}
                    className='max-w-80'
                >
                    <motion.img 
                        src={Icons.logo} 
                        alt="logo" 
                        className='mb-4 h-8 md:h-9 invert opacity-80'
                        whileHover={{ opacity: 1 }}
                    />
                    <motion.p 
                        className='text-sm'
                        variants={fadeIn("up", 0.3)}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </motion.p>
                    <motion.div 
                        className='flex items-center gap-3 mt-4'
                        variants={fadeIn("up", 0.4)}
                    >
                        {/* Instagram */}
                        <motion.div 
                            className="relative group"
                            whileHover={{ y: -3 }}
                        >
                            <div className="
                                relative bg-white rounded-full w-12 h-12 flex items-center justify-center
                                shadow-lg cursor-pointer overflow-hidden transition-all duration-200
                                hover:text-white
                                before:content-[''] before:absolute before:inset-0 before:bg-[#E4405F] 
                                before:rounded-full before:translate-y-full before:transition-all before:duration-300
                                group-hover:before:translate-y-0
                            ">
                                <img src={Icons.instagram} className='w-6 z-10 transition-colors duration-500 group-hover:filter group-hover:brightness-0 group-hover:invert' alt="Instagram" />
                            </div>
                            <span className="
                                absolute -top-11 left-1/2 -translate-x-1/2 bg-[#E4405F] text-white
                                px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 pointer-events-none
                                transition-all duration-300 group-hover:opacity-100 group-hover:-top-12
                                after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2
                                after:border-4 after:border-transparent after:border-t-[#E4405F]
                            ">
                                Instagram
                            </span>
                        </motion.div>
                        
                        {/* Facebook */}
                        <motion.div 
                            className="relative group"
                            whileHover={{ y: -3 }}
                        >
                            <div className="
                                relative bg-white rounded-full w-12 h-12 flex items-center justify-center
                                shadow-lg cursor-pointer overflow-hidden transition-all duration-200
                                hover:text-white
                                before:content-[''] before:absolute before:inset-0 before:bg-[#1877F2] 
                                before:rounded-full before:translate-y-full before:transition-all before:duration-300
                                group-hover:before:translate-y-0
                            ">
                                <img src={Icons.facebook} className='w-6 z-10 transition-colors duration-500 group-hover:filter group-hover:brightness-0 group-hover:invert' alt="Facebook" />
                            </div>
                            <span className="
                                absolute -top-11 left-1/2 -translate-x-1/2 bg-[#1877F2] text-white
                                px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 pointer-events-none
                                transition-all duration-300 group-hover:opacity-100 group-hover:-top-12
                                after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2
                                after:border-4 after:border-transparent after:border-t-[#1877F2]
                            ">
                                Facebook
                            </span>
                        </motion.div>
                        
                        {/* Telegram */}
                        <motion.div 
                            className="relative group"
                            whileHover={{ y: -3 }}
                        >
                            <div className="
                                relative bg-white rounded-full w-12 h-12 flex items-center justify-center
                                shadow-lg cursor-pointer overflow-hidden transition-all duration-200
                                hover:text-white
                                before:content-[''] before:absolute before:inset-0 before:bg-[#1DA1F2] 
                                before:rounded-full before:translate-y-full before:transition-all before:duration-300
                                group-hover:before:translate-y-0
                            ">
                                <img src={Icons.telegram} className='w-6 z-10 transition-colors duration-500 group-hover:filter group-hover:brightness-0 group-hover:invert' alt="Telegram" />
                            </div>
                            <span className="
                                absolute -top-11 left-1/2 -translate-x-1/2 bg-[#1DA1F2] text-white
                                px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 pointer-events-none
                                transition-all duration-300 group-hover:opacity-100 group-hover:-top-12
                                after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2
                                after:border-4 after:border-transparent after:border-t-[#1DA1F2]
                            ">
                                Telegram
                            </span>
                        </motion.div>
                        
                        {/* WhatsApp */}
                        <motion.div 
                            className="relative group"
                            whileHover={{ y: -3 }}
                        >
                            <div className="
                                relative bg-white rounded-full w-12 h-12 flex items-center justify-center
                                shadow-lg cursor-pointer overflow-hidden transition-all duration-200
                                hover:text-white
                                before:content-[''] before:absolute before:inset-0 before:bg-[#25D366] 
                                before:rounded-full before:translate-y-full before:transition-all before:duration-300
                                group-hover:before:translate-y-0
                            ">
                                <img src={Icons.whatsapp} className='w-6 z-10 transition-colors duration-500 group-hover:filter group-hover:brightness-0 group-hover:invert' alt="WhatsApp" />
                            </div>
                            <span className="
                                absolute -top-11 left-1/2 -translate-x-1/2 bg-[#25D366] text-white
                                px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 pointer-events-none
                                transition-all duration-300 group-hover:opacity-100 group-hover:-top-12
                                after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2
                                after:border-4 after:border-transparent after:border-t-[#25D366]
                            ">
                                WhatsApp
                            </span>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Company Links */}
                <motion.div
                    variants={fadeIn("up", 0.3)}
                >
                    <motion.p 
                        className='text-lg text-gray-800'
                        whileHover={{ x: 3 }}
                    >COMPANY</motion.p>
                    <motion.ul 
                        className='mt-3 flex flex-col gap-2 text-sm'
                        variants={staggerContainer(0.05)}
                    >
                        {['About', 'Careers', 'Press', 'Blog', 'Partners'].map((item, index) => (
                            <motion.li 
                                key={index}
                                variants={fadeIn("left", 0.1)}
                                whileHover={{ x: 5 }}
                            >
                                <a href="#">{item}</a>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* Support Links */}
                <motion.div
                    variants={fadeIn("up", 0.4)}
                >
                    <motion.p 
                        className='text-lg text-gray-800'
                        whileHover={{ x: 3 }}
                    >SUPPORT</motion.p>
                    <motion.ul 
                        className='mt-3 flex flex-col gap-2 text-sm'
                        variants={staggerContainer(0.05)}
                    >
                        {['Help Center', 'Safety Information', 'Cancellation Options', 'Contact Us', 'Accessibility'].map((item, index) => (
                            <motion.li 
                                key={index}
                                variants={fadeIn("left", 0.1)}
                                whileHover={{ x: 5 }}
                            >
                                <a href="#">{item}</a>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* Newsletter */}
                <motion.div 
                    variants={fadeIn("up", 0.5)}
                    className='max-w-80'
                >
                    <motion.p 
                        className='text-lg text-gray-800'
                        whileHover={{ x: 3 }}
                    >STAY UPDATED</motion.p>
                    <motion.p 
                        className='mt-3 text-sm'
                        variants={fadeIn("up", 0.6)}
                    >
                        Subscribe to our newsletter for inspiration and special offers.
                    </motion.p>
                    <motion.div 
                        className='flex items-center mt-4'
                        variants={fadeIn("up", 0.7)}
                    >
                        <motion.input 
                            type="text" 
                            className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' 
                            placeholder='Your email'
                            whileFocus={{
                                borderColor: "#3B82F6",
                                boxShadow: "0 0 0 1px #3B82F6"
                            }}
                        />
                        <motion.button 
                            className='flex items-center justify-center bg-pink-500 h-9 w-9 aspect-square rounded-r'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.hr 
                className='border-gray-300 mt-8'
                variants={fadeIn("up", 0.8)}
            />
            
            <motion.div 
                className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'
                variants={fadeIn("up", 0.9)}
            >
                <motion.p
                    whileHover={{ scale: 1.02 }}
                >© {new Date().getFullYear()} Brand. All rights reserved.</motion.p>
                <motion.ul 
                    className='flex items-center gap-4'
                    variants={staggerContainer(0.1)}
                >
                    {['Privacy', 'Terms', 'Sitemap'].map((item, index) => (
                        <motion.li 
                            key={index}
                            variants={fadeIn("left", 0.1)}
                            whileHover={{ scale: 1.1 }}
                        >
                            <a href="#">{item}</a>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    )
}

export default Footer;
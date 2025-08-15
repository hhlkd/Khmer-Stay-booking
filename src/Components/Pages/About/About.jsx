import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHotel, 
  FaMapMarkerAlt, 
  FaUsers, 
  FaHeart, 
  FaCheck,
  FaTwitter,
  FaLinkedinIn
} from 'react-icons/fa';
import Angkor from '../../../assets/Images/Bg-01.jpg'; // Adjust the path as necessary
import { teamMembers } from '../../../Data/TeamMember';

// Constants
const STATS = [
  { value: "500+", label: "Properties Worldwide", icon: <FaHotel /> },
  { value: "50+", label: "Countries", icon: <FaMapMarkerAlt /> },
  { value: "10K+", label: "Happy Guests", icon: <FaUsers /> },
  { value: "24/7", label: "Support", icon: <FaHeart /> }
];

const VALUES = [
  {
    title: "Authenticity",
    description: "We showcase real properties with honest reviews and transparent pricing."
  },
  {
    title: "Quality",
    description: "Every property meets our rigorous standards for comfort and service."
  },
  {
    title: "Innovation",
    description: "We continuously improve our platform to enhance your booking experience."
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={Angkor}
            alt="Luxury hotel"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/50" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            Our Story
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 drop-shadow-md"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Connecting travelers with exceptional stays since 2015
          </motion.p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              We believe every traveler deserves a perfect stay. Our platform was born from a simple idea:
              to make finding and booking exceptional accommodations effortless, personal, and rewarding.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              What started as a small team passionate about travel has grown into a global platform
              connecting thousands of guests with unique properties worldwide.
            </p>
            <AnimatedButton text="Book Now!" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96"
          >
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Hotel lobby"
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={STATS} />
      {/* Values Section */}
      <ValuesSection values={VALUES} />
      {/* Team Section */}
      <TeamSection teamMembers={teamMembers} />
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

// Sub-components
const AnimatedButton = ({ text }) => (
  <button className="overflow-hidden w-40 p-2 h-10 bg-white text-gray-700 border-none rounded-lg text-lg font-bold cursor-pointer relative z-10 group">
    {text}
    <span className="absolute w-44 h-32 -top-8 -left-2 text-white bg-pink-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom" />
    <span className="absolute w-44 h-32 -top-8 -left-2 bg-pink-400 text-white rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom" />
    <span className="absolute w-44 h-32 -top-8 -left-2 bg-pink-600 text-white rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom" />
    <span className="group-hover:opacity-100 group-hover:duration-1000 text-white duration-100 opacity-0 absolute top-2 left-8 z-10">
      {text}
    </span>
  </button>
);

const StatsSection = ({ stats }) => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 text-center"
          >
            <div className="flex justify-center mb-6 text-pink-600">
              {React.cloneElement(stat.icon, { className: "text-4xl" })}
            </div>
            <p className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
            <p className="text-lg text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ValuesSection = ({ values }) => (
  <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
    <motion.h2
      className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Our Core Values
    </motion.h2>
    <div className="grid md:grid-cols-3 gap-8">
      {values.map((value, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="text-cyan-600 text-2xl mb-4">
            <FaCheck />
          </div>
          <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
          <p className="text-gray-600">{value.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const TeamSection = ({ teamMembers }) => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Meet The Team
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The passionate people behind your perfect stays
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  </section>
);

const TeamMemberCard = ({ member }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={fadeInUp}
    transition={{ duration: 0.5, delay: member.id * 0.1 }}
    viewport={{ once: true }}
    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
  >
    <div className="h-64 overflow-hidden relative">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
      <p className="text-blue-600 font-medium mb-3">{member.role}</p>
      <p className="text-gray-600 text-sm">{member.bio}</p>
      <div className="flex justify-center space-x-3 mt-4">
        <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
          <FaTwitter className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
          <FaLinkedinIn className="w-5 h-5" />
        </a>
      </div>
    </div>
  </motion.div>
);

const CTASection = () => (
  <section className="py-20 relative">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Luxury hotel lobby"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for better text contrast */}
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Ready to Experience the Difference?
      </motion.h2>
      <motion.p
        className="text-xl mb-8 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Join thousands of travelers who've found their perfect stay through us
      </motion.p>
      <motion.button
        className="overflow-hidden w-48 p-2 h-14 bg-transparent border  border-white text-blue-700 border-none rounded-lg text-lg font-bold cursor-pointer relative z-10 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Your Journey
        <span className="absolute w-48 h-36 -top-8 -left-2 bg-blue-400/30 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left" />
        <span className="absolute w-44 h-36 -top-8 -left-2 bg-blue-300/50 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left" />
      </motion.button>
    </div>
  </section>
);

export default About;
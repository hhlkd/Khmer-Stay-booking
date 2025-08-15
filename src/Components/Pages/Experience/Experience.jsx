import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaRegStar, FaQuoteLeft, FaMapMarkerAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';
import { testimonials } from '../../../Data/hostData';
import { roomsDummyData } from '../../../Data/hotelsData';
import BgCAT from '../../../assets/Images/Bg-01.jpg'; // Background image for CTA section

const Experience = () => {
  const navigate = useNavigate();

  // Combine hotel data with testimonials
  const featuredExperiences = roomsDummyData.slice(0, 3).map((hotel, index) => ({
    ...hotel,
    testimonialData: testimonials[index] || {
      name: "Anonymous Guest",
      review: "Wonderful experience at this property!",
      rating: 5,
      image: null
    }
  }));

  // Render star rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      i < rating ?
        <FaStar key={i} className="text-yellow-400" /> :
        <FaRegStar key={i} className="text-yellow-400" />
    ));
  };

  // Handle navigation to property details
  const handleViewProperty = (hotelId) => {
    // Find the hotel to get its first room
    const hotel = roomsDummyData.find(h => h._id === hotelId);
    if (hotel && hotel.rooms.length > 0) {
      navigate(`/rooms/${hotel.rooms[0]._id}`);
    } else {
      // Fallback if no rooms exist
      navigate(`/hotels/${hotelId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 mt-10 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Guest Experiences
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          Discover authentic reviews from our valued guests
        </p>
      </div>

      {/* Experiences Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredExperiences.map((experience) => (
          <div key={experience._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img
                src={experience.images?.[0] || "https://images.unsplash.com/photo-1566073771259-6a8506099945"}
                alt={experience.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-gray-800">{experience.name}</h2>
                <div className="flex">
                  {renderStars(experience.testimonialData.rating)}
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-3">
                <FaMapMarkerAlt className="mr-2" />
                <span>{experience.address || "Premium Location"}</span>
              </div>

              <div className="flex items-center text-gray-600 mb-4">
                <span className="text-sm">{experience.stars} Star Rating</span>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-3">
                  {experience.testimonialData.image ? (
                    <img
                      src={experience.testimonialData.image}
                      alt={experience.testimonialData.name}
                      className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                      <FaUser className="text-gray-500" />
                    </div>
                  )}
                  <div>
                    <p className="font-medium">{experience.testimonialData.name}</p>
                    <p className="text-sm text-gray-500">{experience.testimonialData.location || "Verified Guest"}</p>
                  </div>
                </div>
                <FaQuoteLeft className="text-gray-400 mb-2" />
                <p className="text-gray-700 italic">{experience.testimonialData.review}</p>
              </div>

              <button
                onClick={() => handleViewProperty(experience._id)}
                className="relative py-2 px-8 w-full text-black text-base font-bold rounded-full overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-purple-600 before:to-purple-400 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
              >
                View Property
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials Carousel */}
      <div className="max-w-7xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Guests Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <FaUser className="text-gray-500 text-xl" />
                  </div>
                )}
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.review}</p>
              <p className="text-sm text-gray-400">{new Date(testimonial.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto mt-16 bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Our Hospitality in Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-5xl font-bold text-teal-600">{roomsDummyData.length}+</p>
            <p className="text-gray-600 mt-2">Premium Properties</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-violet-600">
              {Math.round(testimonials.reduce((acc, curr) => acc + curr.rating, 0) / testimonials.length * 10) / 10 || 5}
            </p>
            <p className="text-gray-600 mt-2">Average Rating</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-pink-600">{testimonials.length * 10}+</p>
            <p className="text-gray-600 mt-2">Satisfied Guests</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="max-w-7xl mx-auto mt-16 rounded-xl shadow-md overflow-hidden relative"
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={BgCAT}
            alt="Angkor wat"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/80 to-violet-400/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Perfect Stay?</h2>
            <p className="text-xl mb-6">Join thousands of happy guests who trusted us with their travels</p>
            <button
              onClick={() => navigate('/rooms')}
              className="overflow-hidden w-32 p-2 h-12 bg-white text-gray-700 border-none rounded-md text-base font-bold cursor-pointer relative z-10 group"
            >
              Book Now
              <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-purple-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
              ></span>
              <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
              ></span>
              <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
              ></span>
              <span
                className="group-hover:opacity-100 text-white group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
              >
                Explore!
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
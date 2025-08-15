import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { roomsDummyData } from '../../../Data/hotelsData';
import { FiFilter, FiStar, FiMapPin } from 'react-icons/fi';
import Icons from '../../../assets/icons';
import { fadeIn, staggerContainer } from '../../../virains';

const Allrooms = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sortBy, setSortBy] = useState('default');
  const [allHotels, setAllHotels] = useState([]);
  const [allRooms, setAllRooms] = useState([]);

  // Load hotels data and update rooms list
  useEffect(() => {
    const loadData = () => {
      const savedData = localStorage.getItem('hotelsData');
      const hotels = savedData ? JSON.parse(savedData) : roomsDummyData;
      setAllHotels(hotels);
      
      // Get all rooms with proper hotel data
      const rooms = hotels.flatMap(hotel => {
        return hotel.rooms?.map(room => ({
          ...room,
          hotel: {
            id: hotel._id,
            name: hotel.name,
            address: hotel.address,
            rating: hotel.rating,
            reviews: hotel.reviews,
            images: hotel.images
          }
        })) || [];
      });
      
      setAllRooms(rooms);
    };

    loadData();
    
    // Listen for storage updates
    const handleStorageChange = () => loadData();
    window.addEventListener('storage', handleStorageChange);
    
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Filter rooms
  const filteredRooms = allRooms.filter(room => {
    // Price range filter
    const priceMatch = room.price >= priceRange[0] && room.price <= priceRange[1];
    
    // If no filters selected, just match price
    if (selectedFilters.length === 0) return priceMatch;
    
    // Check if room matches any of the selected filters
    return selectedFilters.some(filter => {
      // Map UI filter names to possible room type values
      const filterMap = {
        'Single Bed': ['single', 'single bed'],
        'Double Bed': ['double', 'double bed'],
        'Luxury Room': ['luxury', 'luxury room', 'deluxe'],
        'Family Suite': ['family', 'family suite', 'suite']
      };
      
      // Get possible matches for this filter
      const possibleMatches = filterMap[filter] || [filter.toLowerCase()];
      
      // Check if room type matches any of the possible values
      return possibleMatches.some(match => 
        room.type?.toLowerCase().includes(match)
      );
    }) && priceMatch;
  });

  // Sort rooms
  const sortedRooms = [...filteredRooms].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
    return 0;
  });

  // Popular filters
  const popularFilters = ['Single Bed', 'Double Bed', 'Luxury Room', 'Family Suite'];
  const priceRanges = [
    { label: '$0 to $500', value: [0, 500] },
    { label: '$500 to $1000', value: [500, 1000] },
    { label: '$1000 to $2000', value: [1000, 2000] },
    { label: '$2000 to $3000', value: [2000, 3000] }
  ];

  const toggleFilter = (filter) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter) 
        : [...prev, filter]
    );
  };

  const handleRoomClick = (room) => {
    navigate(`/rooms/${room._id}`, { 
      state: { 
        room,
        hotel: room.hotel 
      } 
    });
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      variants={staggerContainer()}
      className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32"
    >
      {/* Header */}
      <motion.div 
        variants={fadeIn("up", 0.2)}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-2">All Rooms</h1>
        <p className="text-gray-600 max-w-2xl">
          Explore all available rooms across our hotels
        </p>
      </motion.div>

      {/* Filters and Sorting */}
      <motion.div 
        variants={fadeIn("up", 0.3)}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
      >
        {/* Mobile filter button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
        >
          <FiFilter /> Filters
        </motion.button>

        {/* Sort by dropdown */}
        <div className="w-full md:w-auto">
          <motion.select
            whileHover={{ scale: 1.02 }}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full md:w-48 p-2 border rounded-lg"
          >
            <option value="default">Sort By</option>
            <option value="price-low">Price Low to High</option>
            <option value="price-high">Price High to Low</option>
            <option value="newest">Newest First</option>
          </motion.select>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters sidebar */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ 
            type: 'tween',
            duration: 0.6,
            ease: [0.25, 0.25, 0.25, 0.75]
          }}
          className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}
        >
          <div className="bg-white p-4 rounded-lg shadow-md sticky top-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">FILTERS</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedFilters([]);
                  setPriceRange([0, 500]);
                }}
                className="text-blue-600 text-sm"
              >
                CLEAR
              </motion.button>
            </div>

            {/* Popular filters */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Popular filters</h4>
              <div className="flex flex-wrap gap-2">
                {popularFilters.map(filter => (
                  <motion.button
                    key={filter}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleFilter(filter)}
                    className={`px-3 py-1 text-sm rounded-full ${
                      selectedFilters.includes(filter) 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {filter}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Price range */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Price Range</h4>
              <div className="space-y-2">
                {priceRanges.map((range, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <input
                      type="radio"
                      id={`price-${index}`}
                      name="price-range"
                      checked={priceRange[0] === range.value[0] && priceRange[1] === range.value[1]}
                      onChange={() => setPriceRange(range.value)}
                      className="mr-2"
                    />
                    <label htmlFor={`price-${index}`}>{range.label}</label>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Room listings */}
        <div 
          variants={staggerContainer(0.1)}
          className="flex-1"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedRooms.map((room, index) => (
              <div
                key={`${room.hotel.id}-${room._id}`}
                variants={fadeIn("up", 0.2 + index * 0.05)}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
                onClick={() => handleRoomClick(room)}
              >
                {/* Room image */}
                <motion.div 
                  className="h-48 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={room.images?.[0] || room.hotel.images?.[0] || Icons.defaultRoom}
                    alt={room.type}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </motion.div>

                {/* Hotel and Room details */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg">{room.hotel.name}</h3>
                      <p className="text-sm text-gray-600">{room.type}</p>
                      <div className="flex items-center gap-1 text-yellow-500 my-1">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            fill={i < Math.floor(room.hotel.rating) ? 'currentColor' : 'none'}
                            size={14}
                          />
                        ))}
                        <span className="text-gray-500 text-sm ml-1">
                          {room.hotel.reviews}+ reviews
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-semibold">${room.price}</span>
                      <span className="block text-gray-500 text-sm">/night</span>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <FiMapPin size={14} className="mr-1" />
                    <span>{room.hotel.address}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {room.amenities?.slice(0, 3).map((amenity, index) => (
                      <motion.span 
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-100 px-2 py-1 rounded text-xs capitalize"
                      >
                        {amenity.replace('_', ' ')}
                      </motion.span>
                    ))}
                    {room.amenities?.length > 3 && (
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                        +{room.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedRooms.length === 0 && (
            <motion.div 
              variants={fadeIn("up", 0.4)}
              className="text-center py-12"
            >
              <img 
                src={Icons.emptyState} 
                alt="No rooms" 
                className="w-32 h-32 mx-auto opacity-70"
              />
              <h3 className="text-xl font-medium mt-4">No rooms available</h3>
              <p className="text-gray-600 mt-2">
                {allRooms.length === 0 
                  ? "There are currently no rooms listed" 
                  : "No rooms match your filters"}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Allrooms;
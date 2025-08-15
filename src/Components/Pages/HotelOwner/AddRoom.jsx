import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { roomsDummyData, addNewRoom, addNewHotel } from '../../../Data/hotelsData';
import Title from '../../../Models/Title/title';
import Icons from '../../../assets/icons';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../virains';

const AddRoom = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState({ 1: null, 2: null, 3: null, 4: null });
  const [inputs, setInputs] = useState({
    hotelOption: 'existing',
    hotelId: roomsDummyData[0]?._id || '',
    newHotelName: '',
    newHotelAddress: '',
    roomType: '',
    pricePerNight: '',
    amenities: {
      'Free WiFi': false,
      'Free Breakfast': false,
      'Room Service': false,
      'Pool Access': false,
      'Air Conditioning': false
    }
  });

  const roomTypes = [
    'Single Room',
    'Double Room',
    'Deluxe Room',
    'Suite',
    'Executive Suite',
    'Family Room'
  ];

  const handleImageChange = (id, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages(prev => ({
          ...prev,
          [id]: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAmenityChange = (amenity) => {
    setInputs(prev => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [amenity]: !prev.amenities[amenity]
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!inputs.roomType || !inputs.pricePerNight) {
      alert('Please fill in all required fields');
      return;
    }

    // Validate at least one image
    if (Object.values(images).filter(img => img !== null).length === 0) {
      alert('Please upload at least one image');
      return;
    }

    let hotelId = inputs.hotelId;
    let updatedHotels = [...roomsDummyData];
    
    // If creating a new hotel
    if (inputs.hotelOption === 'new') {
      if (!inputs.newHotelName || !inputs.newHotelAddress) {
        alert('Please fill in all hotel details');
        return;
      }

      const newId = `hotel_${Date.now()}`;
      const newHotel = {
        _id: newId,
        name: inputs.newHotelName,
        address: inputs.newHotelAddress,
        rating: 0,
        reviews: 0,
        rooms: [],
        cityId: 1,
        description: "New hotel description",
        stars: 3,
        priceRange: { min: 0, max: 0 },
        originalPrice: 0,
        seasonalPricing: {
          highSeason: { multiplier: 1.2, months: [11, 12, 1, 2] },
          lowSeason: { multiplier: 0.85, months: [5, 6, 7, 8, 9] }
        },
        amenities: ["wifi"],
        images: [Icons.defaultHotel],
        tags: ["new"],
        discountPercent: 0,
        isNew: true
      };
      
      updatedHotels = addNewHotel(newHotel);
      hotelId = newId;
    }

    // Create new room object with complete data structure
    const newRoom = {
      _id: `room_${Date.now()}`,
      type: inputs.roomType,
      price: parseInt(inputs.pricePerNight),
      amenities: Object.keys(inputs.amenities)
                     .filter(a => inputs.amenities[a])
                     .map(a => a.toLowerCase().replace(' ', '_')),
      images: Object.values(images).filter(img => img !== null),
      description: "New room description",
      maxOccupancy: 2,
      size: "30 sqm",
      bedType: "Double Bed",
      available: 1,
      createdAt: new Date().toISOString(),
      hotel: {
        id: hotelId,
        name: inputs.hotelOption === 'existing' 
          ? roomsDummyData.find(h => h._id === hotelId)?.name 
          : inputs.newHotelName,
        address: inputs.hotelOption === 'existing'
          ? roomsDummyData.find(h => h._id === hotelId)?.address
          : inputs.newHotelAddress,
        rating: 0,
        reviews: 0
      }
    };

    updatedHotels = addNewRoom(hotelId, newRoom);
    localStorage.setItem('hotelsData', JSON.stringify(updatedHotels));
    
    alert('Room added successfully!');
    // Navigate directly to the room details page
    navigate(`/rooms/${newRoom._id}`, { state: { room: newRoom } });
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn("up", 0.2)}
      className="p-4 md:p-8"
    >
      <form onSubmit={handleSubmit}>
        <Title 
          title={'Add Room'} 
          subTitle={'Fill in the details carefully to add a new room'} 
          align="left"
        />

        {/* Hotel Selection */}
        <motion.div 
          variants={fadeIn("up", 0.3)}
          className="mt-8 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Add to</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="hotelOption"
                  value="existing"
                  checked={inputs.hotelOption === 'existing'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Existing Hotel
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="hotelOption"
                  value="new"
                  checked={inputs.hotelOption === 'new'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                New Hotel
              </label>
            </div>
          </div>

          {inputs.hotelOption === 'existing' ? (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Hotel</label>
              <select
                name="hotelId"
                value={inputs.hotelId}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                {roomsDummyData.map(hotel => (
                  <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                ))}
              </select>
            </div>
          ) : (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hotel Name*</label>
                <input
                  type="text"
                  name="newHotelName"
                  value={inputs.newHotelName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter hotel name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hotel Address*</label>
                <input
                  type="text"
                  name="newHotelAddress"
                  value={inputs.newHotelAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter hotel address"
                  required
                />
              </div>
            </>
          )}
        </motion.div>

        {/* Image Upload Section */}
        <motion.div 
          variants={fadeIn("up", 0.4)}
          className="mt-8"
        >
          <h3 className="text-lg font-medium text-gray-800 mb-4">Images*</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((id) => (
              <motion.div 
                key={id} 
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <label className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                  {images[id] ? (
                    <img 
                      src={images[id]} 
                      alt={`Room preview ${id}`} 
                      className="h-full w-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-4 text-center">
                      <img src={Icons.upload} alt="Upload" className="h-8 w-8 mb-2 opacity-70" />
                      <p className="text-sm text-gray-500">Upload Image</p>
                    </div>
                  )}
                  <input 
                    type="file" 
                    className="hidden" 
                    accept="image/*"
                    onChange={(e) => handleImageChange(id, e)}
                  />
                </label>
                {images[id] && (
                  <button
                    type="button"
                    onClick={() => setImages(prev => ({ ...prev, [id]: null }))}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                  >
                    <img src={Icons.close} alt="Remove" className="h-4 w-4" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
          <p className="mt-2 text-sm text-gray-500">Upload at least one image (Max 4 images)</p>
        </motion.div>

        {/* Room Details Section */}
        <motion.div 
          variants={fadeIn("up", 0.5)}
          className="mt-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Room Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Room Type*</label>
              <select
                name="roomType"
                value={inputs.roomType}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select Room Type</option>
                {roomTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Price Per Night */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price / night ($)*</label>
              <input
                type="number"
                name="pricePerNight"
                min="0"
                value={inputs.pricePerNight}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
                required
              />
            </div>
          </div>

          {/* Amenities */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Amenities</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Object.keys(inputs.amenities).map((amenity) => (
                <motion.div 
                  key={amenity} 
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  <input
                    type="checkbox"
                    id={amenity}
                    checked={inputs.amenities[amenity]}
                    onChange={() => handleAmenityChange(amenity)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor={amenity} className="ml-2 text-sm text-gray-700">
                    {amenity}
                  </label>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div 
          variants={fadeIn("up", 0.6)}
          className="mt-10"
        >
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Add Room
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default AddRoom;
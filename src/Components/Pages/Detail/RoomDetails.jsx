import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { roomsDummyData } from '../../../Data/hotelsData';
import Icons from '../../../assets/icons';
import { testimonials } from '../../../Data/hostData';
import { motion, AnimatePresence } from 'framer-motion';

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const [hotel, setHotel] = useState(null);
    const [mainImage, setMainImage] = useState(null);
    const [guestCount, setGuestCount] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [nights, setNights] = useState(0);
    const [serviceFee] = useState(25);
    const [currentHost, setCurrentHost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('features');
    const [formErrors, setFormErrors] = useState({
        checkIn: '',
        checkOut: '',
        guests: ''
    });
    const [showMobileBookingForm, setShowMobileBookingForm] = useState(false);
    const [availabilityChecked, setAvailabilityChecked] = useState(false);
    const [bookingSuccess, setBookingSuccess] = useState(false);

    useEffect(() => {
        setLoading(true);
        const foundHotel = roomsDummyData.find(hotel =>
            hotel.rooms.some(room => room._id.toString() === id)
        );

        if (foundHotel) {
            const foundRoom = foundHotel.rooms.find(room => room._id.toString() === id);
            setRoom(foundRoom);
            setHotel(foundHotel);
            setMainImage(foundRoom.images[0]);

            const randomHost = testimonials[Math.floor(Math.random() * testimonials.length)];
            setCurrentHost(randomHost);
        }
        setLoading(false);
    }, [id]);

    useEffect(() => {
        if (checkInDate && checkOutDate) {
            const start = new Date(checkInDate);
            const end = new Date(checkOutDate);
            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            setNights(diffDays);
        } else {
            setNights(0);
        }
    }, [checkInDate, checkOutDate]);

    const validateForm = () => {
        const errors = {
            checkIn: '',
            checkOut: '',
            guests: ''
        };
        let isValid = true;

        if (!checkInDate) {
            errors.checkIn = 'Check-in date is required';
            isValid = false;
        }

        if (!checkOutDate) {
            errors.checkOut = 'Check-out date is required';
            isValid = false;
        } else if (checkInDate && new Date(checkOutDate) <= new Date(checkInDate)) {
            errors.checkOut = 'Check-out must be after check-in';
            isValid = false;
        }

        if (!guestCount) {
            errors.guests = 'Number of guests is required';
            isValid = false;
        } else if (guestCount > room?.maxOccupancy) {
            errors.guests = `Maximum ${room.maxOccupancy} guests allowed`;
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleCheckAvailability = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setTimeout(() => {
                setAvailabilityChecked(true);
            }, 1000);
        }
    };

    const handleBookNow = () => {
        const bookingId = Date.now().toString();

        const bookingData = {
            _id: bookingId,
            hotelId: hotel._id,
            hotelName: hotel.name,
            roomId: room._id,
            roomType: room.type,
            hotelImage: mainImage,
            location: hotel.address,
            checkInDate,
            checkOutDate,
            totalPrice: (room.price * nights) + serviceFee,
            paymentMethod: 'Credit Card',
            guests: parseInt(guestCount),
            status: 'confirmed',
            bookedAt: new Date().toISOString()
        };

        const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        const updatedBookings = [...existingBookings, bookingData];
        localStorage.setItem('bookings', JSON.stringify(updatedBookings));

        setBookingSuccess(true);
        setTimeout(() => {
            setBookingSuccess(false);
            setAvailabilityChecked(false);
            setShowMobileBookingForm(false);
        }, 3000);
    };

    const isFormValid = checkInDate && checkOutDate && guestCount &&
        new Date(checkOutDate) > new Date(checkInDate) &&
        parseInt(guestCount) <= room?.maxOccupancy;

    if (loading || !room || !hotel || !currentHost) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center items-center min-h-screen"
            >
                <div className="animate-pulse text-center py-20">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200"></div>
                    <p className="text-lg text-gray-600">Loading room details...</p>
                </div>
            </motion.div>
        );
    }

    const subtotal = room.price * nights;
    const total = subtotal + serviceFee;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='py-10 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto'
        >
            {/* Booking Success Animation */}
            <AnimatePresence>
                {bookingSuccess && (
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="fixed bottom-6 right-6 z-50"
                    >
                        <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                                <p className="font-bold">Booking Confirmed!</p>
                                <p className="text-sm">Your reservation is now complete.</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Header Section */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-8 md:mb-12"
            >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                    {room.type} at {hotel.name}
                </h1>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-3 md:mb-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                        {hotel.name}
                    </h2>
                    {hotel.discountPercent && (
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-xs font-medium py-1 px-2.5 text-white bg-pink-600 rounded-full"
                        >
                            {hotel.discountPercent}% OFF
                        </motion.span>
                    )}
                </div>

                <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                {i < Math.floor(hotel.rating) ? (
                                    // Full star
                                    <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ) : (
                                    // Empty star
                                    <svg className="w-6 h-6 text-gray-300 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                )}
                            </motion.div>
                        ))}
                    </div>
                    <span className="text-sm text-gray-600">{hotel.reviews} reviews</span>
                    <span className="hidden sm:inline-block mx-2 text-gray-300">•</span>
                    <div className="hidden sm:flex items-center gap-1">
                        <img src={Icons.location} alt="location" className="w-4 h-4" />
                        <p className="text-sm text-gray-600">{hotel.address}</p>
                    </div>
                </div>

                <div className="sm:hidden flex items-center gap-2 mb-4">
                    <img src={Icons.location} alt="location" className="w-4 h-4" />
                    <p className="text-sm text-gray-600">{hotel.address}</p>
                </div>
            </motion.div>

            {/* Mobile Tabs */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="lg:hidden flex border-b border-gray-200 mb-6"
            >
                <button
                    className={`px-4 py-2 font-medium text-sm ${activeTab === 'features' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('features')}
                >
                    Features
                </button>
                <button
                    className={`px-4 py-2 font-medium text-sm ${activeTab === 'details' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('details')}
                >
                    Details
                </button>
                <button
                    className={`px-4 py-2 font-medium text-sm ${activeTab === 'location' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('location')}
                >
                    Location
                </button>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Left Column - Images and Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Main Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-xl overflow-hidden shadow-md"
                    >
                        <img
                            src={mainImage}
                            alt={room.type}
                            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                        />
                    </motion.div>

                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
                    >
                        {room.images.map((img, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden ${mainImage === img ? 'ring-2 ring-blue-500' : ''}`}
                                onClick={() => setMainImage(img)}
                            >
                                <img
                                    src={img}
                                    alt={`Room ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Room Description */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-4"
                    >
                        <h2 className="text-xl md:text-2xl font-bold">About this room</h2>
                        <p className="text-gray-700 leading-relaxed">{room.description}</p>
                    </motion.div>

                    {/* Features Section */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className={`${activeTab === 'features' || !activeTab ? 'block' : 'hidden'} lg:block`}
                    >
                        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Features</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {room.amenities.map((amenity, index) => {
                                const iconData = Icons.amenities[amenity.toLowerCase()];

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + index * 0.05 }}
                                        whileHover={{ y: -3 }}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
                                    >
                                        <div className="bg-blue-100 p-2.5 rounded-full flex items-center justify-center w-10 h-10">
                                            {iconData?.icon ? (
                                                <img
                                                    src={iconData.icon}
                                                    alt={iconData.text}
                                                    className="w-5 h-5 object-contain"
                                                />
                                            ) : (
                                                <span className="text-xs text-gray-500">N/A</span>
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="font-medium capitalize text-sm md:text-base">
                                                {amenity.replace('-', ' ')}
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                {iconData?.text || 'Available'}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Room Details */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className={`${activeTab === 'details' || !activeTab ? 'block' : 'hidden'} lg:block`}
                    >
                        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Room Details</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {[
                                { label: 'Size', value: room.size },
                                { label: 'Bed Type', value: room.bedType },
                                { label: 'Max Occupancy', value: `${room.maxOccupancy} guests` },
                                { label: 'Availability', value: `${room.available} rooms left` }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    className="bg-gray-50 p-4 rounded-lg"
                                >
                                    <h3 className="font-semibold text-gray-700 text-sm">{item.label}</h3>
                                    <p className="text-gray-900 mt-1">{item.value}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Location Section */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className={`${activeTab === 'location' || !activeTab ? 'block' : 'hidden'} lg:block`}
                    >
                        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Location</h2>
                        <div className="flex items-center gap-2 mb-3">
                            <img src={Icons.location} alt="location" className="w-5 h-5" />
                            <p className="text-gray-600">{hotel.address}</p>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-gray-200"
                        >
                            <iframe
                                title="Google Map"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                src={`https://www.google.com/maps?q=${encodeURIComponent(hotel.address)}&output=embed`}
                                className="rounded-lg"
                            ></iframe>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right Column - Booking Card - Desktop */}
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="hidden lg:block"
                >
                    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
                        <h2 className="text-xl font-bold mb-6">Book Your Stay</h2>

                        <form onSubmit={handleCheckAvailability}>
                            <div className="space-y-5">
                                {/* Check-In */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.9 }}
                                >
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-In</label>
                                    <div className={`flex items-center gap-3 border ${formErrors.checkIn ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition`}>
                                        <img src={Icons.calendar} alt="calendar" className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="date"
                                            className="outline-none flex-1 bg-transparent"
                                            value={checkInDate}
                                            onChange={(e) => {
                                                setCheckInDate(e.target.value);
                                                setFormErrors({ ...formErrors, checkIn: '' });
                                            }}
                                            min={new Date().toISOString().split('T')[0]}
                                        />
                                    </div>
                                    {formErrors.checkIn && (
                                        <p className="text-red-500 text-xs mt-1">{formErrors.checkIn}</p>
                                    )}
                                </motion.div>

                                {/* Check-Out */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.0 }}
                                >
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-Out</label>
                                    <div className={`flex items-center gap-3 border ${formErrors.checkOut ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition`}>
                                        <img src={Icons.calendar} alt="calendar" className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="date"
                                            className="outline-none flex-1 bg-transparent"
                                            value={checkOutDate}
                                            onChange={(e) => {
                                                setCheckOutDate(e.target.value);
                                                setFormErrors({ ...formErrors, checkOut: '' });
                                            }}
                                            min={checkInDate || new Date().toISOString().split('T')[0]}
                                        />
                                    </div>
                                    {formErrors.checkOut && (
                                        <p className="text-red-500 text-xs mt-1">{formErrors.checkOut}</p>
                                    )}
                                </motion.div>

                                {/* Guests */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.1 }}
                                >
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                                    <div className={`flex items-center gap-3 border ${formErrors.guests ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition`}>
                                        <img src={Icons.user} alt="user" className="w-5 h-5 text-gray-400" />
                                        <select
                                            className="outline-none flex-1 bg-transparent appearance-none"
                                            value={guestCount}
                                            onChange={(e) => {
                                                setGuestCount(e.target.value);
                                                setFormErrors({ ...formErrors, guests: '' });
                                            }}
                                        >
                                            <option value="">Select guests</option>
                                            {[...Array(room.maxOccupancy).keys()].map(num => (
                                                <option key={num + 1} value={num + 1}>
                                                    {num + 1} {num === 0 ? 'guest' : 'guests'}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {formErrors.guests && (
                                        <p className="text-red-500 text-xs mt-1">{formErrors.guests}</p>
                                    )}
                                </motion.div>

                                {/* Price Summary */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2 }}
                                    className="border-t border-gray-200 pt-4 mt-4"
                                >
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-600">${room.price} x {nights} night{nights !== 1 ? 's' : ''}</span>
                                        <span className="font-medium">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-600">Service fee</span>
                                        <span className="font-medium">${serviceFee.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-lg border-t border-gray-200 mt-3 pt-3">
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </motion.div>

                                {!availabilityChecked ? (
                                    <motion.button
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.3 }}
                                        type="submit"
                                        className={`w-full py-3 px-6 rounded-lg font-medium transition duration-300 shadow-md hover:shadow-lg ${!isFormValid
                                                ? 'bg-gray-400 cursor-not-allowed'
                                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                                            }`}
                                        disabled={!isFormValid}
                                        onClick={handleCheckAvailability}
                                        whileHover={isFormValid ? { scale: 1.02 } : {}}
                                        whileTap={isFormValid ? { scale: 0.98 } : {}}
                                    >
                                        Check Availability
                                    </motion.button>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="space-y-3"
                                    >
                                        <div className="p-4 bg-green-50 text-green-800 rounded-lg">
                                            <p>✓ Room available for your selected dates!</p>
                                        </div>
                                        <motion.button
                                            type="button"
                                            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition duration-300 shadow-md hover:shadow-lg"
                                            onClick={handleBookNow}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Confirm Booking
                                        </motion.button>
                                        <motion.button
                                            type="button"
                                            className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium transition duration-300"
                                            onClick={() => setAvailabilityChecked(false)}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Change Dates
                                        </motion.button>
                                    </motion.div>
                                )}
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>

            {/* Mobile Booking Card - Sticky at bottom */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-10"
            >
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-gray-600 text-sm">Starting from</p>
                        <p className="text-xl font-bold">${room.price} <span className="text-sm font-normal text-gray-500">/ night</span></p>
                    </div>
                    <motion.button
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium"
                        onClick={() => setShowMobileBookingForm(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Book Now
                    </motion.button>
                </div>
            </motion.div>

            {/* Mobile Booking Form Modal */}
            <AnimatePresence>
                {showMobileBookingForm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold">Book Your Stay</h2>
                                    <motion.button
                                        onClick={() => setShowMobileBookingForm(false)}
                                        className="text-gray-500 hover:text-gray-700"
                                        whileHover={{ rotate: 90 }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </motion.button>
                                </div>

                                <form onSubmit={handleCheckAvailability}>
                                    <div className="space-y-5">
                                        {/* Check-In */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Check-In</label>
                                            <div className={`flex items-center gap-3 border ${formErrors.checkIn ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition`}>
                                                <img src={Icons.calendar} alt="calendar" className="w-5 h-5 text-gray-400" />
                                                <input
                                                    type="date"
                                                    className="outline-none flex-1 bg-transparent"
                                                    value={checkInDate}
                                                    onChange={(e) => {
                                                        setCheckInDate(e.target.value);
                                                        setFormErrors({ ...formErrors, checkIn: '' });
                                                    }}
                                                    min={new Date().toISOString().split('T')[0]}
                                                />
                                            </div>
                                            {formErrors.checkIn && (
                                                <p className="text-red-500 text-xs mt-1">{formErrors.checkIn}</p>
                                            )}
                                        </motion.div>

                                        {/* Check-Out */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Check-Out</label>
                                            <div className={`flex items-center gap-3 border ${formErrors.checkOut ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition`}>
                                                <img src={Icons.calendar} alt="calendar" className="w-5 h-5 text-gray-400" />
                                                <input
                                                    type="date"
                                                    className="outline-none flex-1 bg-transparent"
                                                    value={checkOutDate}
                                                    onChange={(e) => {
                                                        setCheckOutDate(e.target.value);
                                                        setFormErrors({ ...formErrors, checkOut: '' });
                                                    }}
                                                    min={checkInDate || new Date().toISOString().split('T')[0]}
                                                />
                                            </div>
                                            {formErrors.checkOut && (
                                                <p className="text-red-500 text-xs mt-1">{formErrors.checkOut}</p>
                                            )}
                                        </motion.div>

                                        {/* Guests */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                                            <div className={`flex items-center gap-3 border ${formErrors.guests ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition`}>
                                                <img src={Icons.user} alt="user" className="w-5 h-5 text-gray-400" />
                                                <select
                                                    className="outline-none flex-1 bg-transparent appearance-none"
                                                    value={guestCount}
                                                    onChange={(e) => {
                                                        setGuestCount(e.target.value);
                                                        setFormErrors({ ...formErrors, guests: '' });
                                                    }}
                                                >
                                                    <option value="">Select guests</option>
                                                    {[...Array(room.maxOccupancy).keys()].map(num => (
                                                        <option key={num + 1} value={num + 1}>
                                                            {num + 1} {num === 0 ? 'guest' : 'guests'}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            {formErrors.guests && (
                                                <p className="text-red-500 text-xs mt-1">{formErrors.guests}</p>
                                            )}
                                        </motion.div>

                                        {/* Price Summary */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="border-t border-gray-200 pt-4 mt-4"
                                        >
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-600">${room.price} x {nights} night{nights !== 1 ? 's' : ''}</span>
                                                <span className="font-medium">${subtotal.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-600">Service fee</span>
                                                <span className="font-medium">${serviceFee.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between font-bold text-lg border-t border-gray-200 mt-3 pt-3">
                                                <span>Total</span>
                                                <span>${total.toFixed(2)}</span>
                                            </div>
                                        </motion.div>

                                        {!availabilityChecked ? (
                                            <motion.button
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 }}
                                                type="submit"
                                                className={`w-full py-3 px-6 rounded-lg font-medium transition duration-300 shadow-md hover:shadow-lg ${!isFormValid
                                                        ? 'bg-gray-400 cursor-not-allowed'
                                                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                                                    }`}
                                                disabled={!isFormValid}
                                                onClick={handleCheckAvailability}
                                                whileHover={isFormValid ? { scale: 1.02 } : {}}
                                                whileTap={isFormValid ? { scale: 0.98 } : {}}
                                            >
                                                Check Availability
                                            </motion.button>
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="space-y-3"
                                            >
                                                <div className="p-4 bg-green-50 text-green-800 rounded-lg">
                                                    <p>✓ Room available for your selected dates!</p>
                                                </div>
                                                <motion.button
                                                    type="button"
                                                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition duration-300 shadow-md hover:shadow-lg"
                                                    onClick={handleBookNow}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    Confirm Booking
                                                </motion.button>
                                                <motion.button
                                                    type="button"
                                                    className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium transition duration-300"
                                                    onClick={() => setAvailabilityChecked(false)}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    Change Dates
                                                </motion.button>
                                            </motion.div>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Host Info Section */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="border-t border-gray-200 pt-8 mt-8"
            >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
                    <div className="flex items-center gap-3 md:gap-4">
                        <motion.img
                            src={currentHost?.image || "https://via.placeholder.com/64"}
                            alt={currentHost?.name || "Host"}
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/64";
                            }}
                            whileHover={{ rotate: 5 }}
                        />
                        <div>
                            <h3 className="font-semibold text-base md:text-lg">
                                Hosted by {currentHost?.name || "Host"}
                            </h3>
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-gray-600 text-xs md:text-sm mt-1">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.img
                                            key={i}
                                            src={Icons.star}
                                            alt="star"
                                            className={`w-3 h-3 md:w-4 md:h-4 ${i < (currentHost?.rating || 5) ? "opacity-100" : "opacity-30"}`}
                                            whileHover={{ scale: 1.2 }}
                                        />
                                    ))}
                                    <span className="ml-1">200+ reviews</span>
                                </div>
                                <span className="hidden sm:inline-block text-gray-300">•</span>
                                <span>Response rate: 100%</span>
                                <span className="hidden sm:inline-block text-gray-300">•</span>
                                <span>Response time: 30 min</span>
                            </div>
                        </div>
                    </div>
                    <motion.button
                        className="mt-3 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium self-start md:self-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Now
                    </motion.button>
                </div>

                {currentHost?.review && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6 }}
                        className="mt-4 md:mt-6 bg-gray-50 p-4 rounded-lg"
                    >
                        <p className="text-gray-700 italic">"{currentHost.review}"</p>
                        <p className="text-gray-500 text-xs md:text-sm mt-2">
                            - {currentHost.name}, {currentHost.location}
                        </p>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default RoomDetails;
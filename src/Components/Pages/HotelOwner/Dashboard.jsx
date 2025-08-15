import React, { useState, useEffect } from 'react';
import Title from '../../../Models/Title/title';
import Icons from '../../../assets/icons';

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const hotelName = "Ohana Phnom Penh"; // Current hotel name

  // Load bookings for this specific hotel
  useEffect(() => {
    const loadBookings = () => {
      try {
        // In a real app, this would come from an API filtered by hotelId
        const savedBookings = localStorage.getItem('bookings');
        if (savedBookings) {
          const allBookings = JSON.parse(savedBookings);
          // Filter bookings for this specific hotel
          const hotelBookings = allBookings.filter(booking => 
            booking.hotelName === hotelName
          );
          setBookings(hotelBookings);
        }
      } catch (error) {
        console.error('Error loading bookings:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBookings();
    window.addEventListener('storage', loadBookings);
    return () => window.removeEventListener('storage', loadBookings);
  }, [hotelName]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const calculateNights = (checkIn, checkOut) => {
    const diffTime = Math.abs(new Date(checkOut) - new Date(checkIn));
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const getTotalRevenue = () => {
    return bookings.reduce((total, booking) => total + booking.totalPrice, 0);
  };

  const getBookingStatusCount = (status) => {
    return bookings.filter(booking => booking.status === status).length;
  };

  return (
    <div className='pb-28 md:pb-32 pt-20 md:pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
      <Title 
        title={`${hotelName} Bookings`} 
        subTitle={`Manage reservations for your hotel (${bookings.length} total bookings)`} 
        align="left" 
      />
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {/* Total Bookings */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-full">
              <img src={Icons.hotel} alt="Bookings" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Total Bookings</h3>
              <p className="text-2xl font-bold mt-1">{bookings.length}</p>
            </div>
          </div>
        </div>
        
        {/* Confirmed Bookings */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-green-50 p-3 rounded-full">
              <img src={Icons.confirm} alt="Confirmed" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Confirmed</h3>
              <p className="text-2xl font-bold mt-1">{getBookingStatusCount('confirmed')}</p>
            </div>
          </div>
        </div>
        
        {/* Total Revenue */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-purple-50 p-3 rounded-full">
              <img src={Icons.money} alt="Revenue" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Total Revenue</h3>
              <p className="text-2xl font-bold mt-1">${getTotalRevenue().toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mt-8 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>
        
        {bookings.length > 0 ? (
          <>
            {/* Desktop View */}
            <div className="hidden md:block">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {bookings.map((booking) => (
                    <tr key={booking._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          User #{booking._id.slice(0, 6)} {/* In real app, show user name */}
                        </div>
                        <div className="text-sm text-gray-500">
                          {booking.guests} {booking.guests > 1 ? 'guests' : 'guest'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {booking.roomType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {formatDate(booking.checkInDate)} - {formatDate(booking.checkOutDate)}
                        </div>
                        <div className="text-sm text-gray-500">
                          {calculateNights(booking.checkInDate, booking.checkOutDate)} nights
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        ${booking.totalPrice.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          booking.status === 'confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="md:hidden space-y-4">
              {bookings.map((booking) => (
                <div key={booking._id} className="border border-gray-100 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">User #{booking._id.slice(0, 6)}</h4>
                      <p className="text-sm text-gray-600">{booking.roomType}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      booking.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-gray-500">Dates</p>
                      <p className="text-sm">
                        {formatDate(booking.checkInDate)} - {formatDate(booking.checkOutDate)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Nights</p>
                      <p className="text-sm">
                        {calculateNights(booking.checkInDate, booking.checkOutDate)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Guests</p>
                      <p className="text-sm">{booking.guests}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Amount</p>
                      <p className="text-sm font-medium">${booking.totalPrice.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <img 
              src={Icons.emptyState} 
              alt="No bookings" 
              className="w-32 h-32 mx-auto opacity-70"
            />
            <h3 className="text-xl font-medium mt-4">No bookings yet</h3>
            <p className="text-gray-600 mt-2">
              Your hotel hasn't received any bookings yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBooking;
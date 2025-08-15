import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../../../Models/Title/title';
import Icons from '../../../assets/icons';

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  // Load bookings from localStorage
  useEffect(() => {
    const loadBookings = () => {
      const savedBookings = localStorage.getItem('bookings');
      if (savedBookings) {
        setBookings(JSON.parse(savedBookings));
      }
    };
    loadBookings();
    
    window.addEventListener('storage', loadBookings);
    return () => window.removeEventListener('storage', loadBookings);
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const calculateNights = (checkIn, checkOut) => {
    const diffTime = Math.abs(new Date(checkOut) - new Date(checkIn));
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const handleCancelBooking = (bookingId) => {
    const updatedBookings = bookings.filter(booking => booking._id !== bookingId);
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    alert('Booking cancelled successfully');
  };

  const handleViewReceipt = (bookingId) => {
    navigate(`/booking-receipt/${bookingId}`);
  };

  return (
    <div className='pb-28 md:pb-32 pt-20 md:pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
      <Title 
        title={'My Bookings'} 
        subTitle='Manage your reservations' 
        align="left" 
      />
      
      {/* Desktop View */}
      <div className="hidden md:block mt-8">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hotel</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-16 w-16">
                        <img className="h-16 w-16 rounded-lg object-cover" src={booking.hotelImage} alt={booking.hotelName} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{booking.hotelName}</div>
                        <div className="text-sm text-gray-500">{booking.roomType}</div>
                        <div className="text-sm text-gray-500">{booking.guests} {booking.guests > 1 ? 'guests' : 'guest'}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {formatDate(booking.checkInDate)} - {formatDate(booking.checkOutDate)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {calculateNights(booking.checkInDate, booking.checkOutDate)} nights
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">${booking.totalPrice.toFixed(2)}</div>
                    <div className="text-sm text-gray-500">Paid {booking.paymentMethod}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleViewReceipt(booking._id)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Receipt
                    </button>
                    <button
                      onClick={() => handleCancelBooking(booking._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden mt-6 space-y-4">
        {bookings.map((booking) => (
          <div key={booking._id} className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-start">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">{booking.hotelName}</h3>
                <p className="mt-1 text-sm text-gray-500">{booking.roomType}</p>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                'bg-red-100 text-red-800'
              }`}>
                {booking.status}
              </span>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Hotel Image</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <img src={booking.hotelImage} alt={booking.hotelName} className="h-32 w-full object-cover rounded-lg"/>
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Dates</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {formatDate(booking.checkInDate)} - {formatDate(booking.checkOutDate)} ({calculateNights(booking.checkInDate, booking.checkOutDate)} nights)
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Guests</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {booking.guests}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Total Price</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    ${booking.totalPrice.toFixed(2)}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="px-4 py-4 bg-gray-50 text-right sm:px-6">
              <button
                type="button"
                onClick={() => handleViewReceipt(booking._id)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
              >
                View Receipt
              </button>
              <button
                type="button"
                onClick={() => handleCancelBooking(booking._id)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Cancel Booking
              </button>
            </div>
          </div>
        ))}
      </div>

      {bookings.length === 0 && (
        <div className="text-center py-12">
          <img 
            src={Icons.emptyState} 
            alt="No bookings" 
            className="w-32 h-32 mx-auto opacity-70"
          />
          <h3 className="text-xl font-medium mt-4">No bookings yet</h3>
          <p className="text-gray-600 mt-2">
            Your upcoming bookings will appear here
          </p>
          <button 
            onClick={() => navigate('/rooms')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Browse Rooms
          </button>
        </div>
      )}
    </div>
  );
};

export default MyBooking;
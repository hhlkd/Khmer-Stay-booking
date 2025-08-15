// src/context/BookingsContext.js
import { createContext, useContext, useState } from 'react';

const BookingsContext = createContext();

export function BookingsProvider({ children }) {
  const [bookings, setBookings] = useState([]);

  const addBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
  };

  const cancelBooking = (bookingId) => {
    setBookings(bookings.map(booking => 
      booking._id === bookingId ? { ...booking, status: 'cancelled' } : booking
    ));
  };

  return (
    <BookingsContext.Provider value={{ bookings, addBooking, cancelBooking }}>
      {children}
    </BookingsContext.Provider>
  );
}

export function useBookings() {
  return useContext(BookingsContext);
}
import React, { createContext, useState, useEffect } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  // Load bookings from localStorage on mount
  useEffect(() => {
    const savedBookings = localStorage.getItem('myBookings');
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  // Save bookings to localStorage when they change
  useEffect(() => {
    localStorage.setItem('myBookings', JSON.stringify(bookings));
  }, [bookings]);

  // Function to add a new booking
  const addBooking = (newBooking) => {
    setBookings(prev => [...prev, newBooking]);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
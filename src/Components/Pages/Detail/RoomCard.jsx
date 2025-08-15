const RoomCard = ({ room, hotel, onAddToBookings }) => {
  const handleAddToBookings = () => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const newBooking = {
      _id: `${hotel._id}-${room._id}-${Date.now()}`,
      hotelName: hotel.name,
      location: hotel.address,
      checkIn: today.toISOString().split('T')[0],
      checkOut: tomorrow.toISOString().split('T')[0],
      roomType: room.type,
      guests: 1,
      price: room.price,
      status: 'Confirmed',
      image: hotel.images[0],
      originalPrice: hotel.originalPrice,
      roomDetails: room
    };

    onAddToBookings(newBooking);
  };

  return (
    <div className="border rounded-lg p-4 mb-4">
      {/* ... other room details ... */}
       <h3 className="font-bold text-lg">{room.type}</h3>
      <p>{room.description}</p>
      <p>Size: {room.size}</p>
      <p>Bed: {room.bedType}</p>
      <p>Max Occupancy: {room.maxOccupancy}</p>
      <p className="font-bold text-xl my-2">${room.price}/night</p>
      <button 
        onClick={handleAddToBookings}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium"
      >
        Book Now
      </button>
    </div>
  );
};
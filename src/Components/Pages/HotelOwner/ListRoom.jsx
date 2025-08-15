// src/Components/Pages/ListRoom/ListRoom.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Title from '../../../Models/Title/title';

const ListRoom = () => {
  const location = useLocation();
  const [rooms, setRooms] = useState([]);
  const [hotel, setHotel] = useState(null);
  const [newRoomId, setNewRoomId] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const hotelId = queryParams.get('hotelId');
    const roomId = queryParams.get('newRoom');
    
    if (roomId) setNewRoomId(roomId);

    const storedData = localStorage.getItem('hotelsData');
    const hotelsData = storedData ? JSON.parse(storedData) : [];

    const selectedHotel = hotelsData.find(h => h._id === hotelId);
    if (selectedHotel) {
      setHotel(selectedHotel);
      // Sort rooms by creation date (newest first)
      const sortedRooms = [...selectedHotel.rooms].sort((a, b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
      );
      setRooms(sortedRooms);
    }
  }, [location.search]);

  return (
    <div className="p-4">
      <Title 
        title={hotel ? `${hotel.name} Rooms` : 'Room List'} 
        subTitle={'Manage your rooms'} 
        align="left"
      />
      
      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amenities</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rooms.map(room => (
              <tr 
                key={room._id} 
                className={newRoomId === room._id ? 'bg-blue-50' : ''}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  {room.type}
                  {newRoomId === room._id && (
                    <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                      New
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">${room.price}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {room.amenities?.map(amenity => (
                      <span key={amenity} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {amenity.replace('_', ' ')}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    room.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {room.available ? 'Available' : 'Booked'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;
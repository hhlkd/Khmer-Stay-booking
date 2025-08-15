import React from 'react';
import Icons from '../../assets/icons';


const HotelCard = ({ hotel }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
      <img
        src={hotel.images[0]}
        alt={hotel.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{hotel.name}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {hotel.stars}★
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{hotel.address}</p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 flex items-center">
            <img
              src={Icons.star}
              className="w-4 h-4 text-yellow-400"
              alt="star rating"
              style={{ filter: 'brightness(0) saturate(100%) invert(81%) sepia(65%) saturate(7483%) hue-rotate(359deg) brightness(102%) contrast(106%)' }}
            />
            {hotel.rating}
          </span>
          <span className="text-gray-500 text-sm ml-1">({hotel.reviews} reviews)</span>
        </div>
      </div>
      <div className="px-4 pb-4">
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">
            From ${hotel.priceRange.min}/night
          </span>
          <span className="text-blue-600 text-sm font-medium">
            View Details →
          </span>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
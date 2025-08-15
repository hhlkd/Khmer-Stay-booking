import React, { useState } from 'react';
import RegImage from '../../assets/Images/Reg.jpg';
import Icons from '../../assets/icons';

const HotelReg = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: ''
  });

  const cambodianCities = [
    { name: 'Phnom Penh', country: 'Cambodia' },
    { name: 'Siem Reap', country: 'Cambodia' },
    { name: 'Sihanoukville', country: 'Cambodia' },
    { name: 'Battambang', country: 'Cambodia' },
    { name: 'Kampot', country: 'Cambodia' },
    { name: 'Kep', country: 'Cambodia' },
    { name: 'Kampong Cham', country: 'Cambodia' },
    { name: 'Kratie', country: 'Cambodia' },
    { name: 'Stung Treng', country: 'Cambodia' },
    { name: 'Ratanakiri', country: 'Cambodia' },
    { name: 'Mondulkiri', country: 'Cambodia' }
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hotel Registration:', formData);
    // Add your form submission logic here
    onClose();
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4'>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row bg-white rounded-xl max-w-4xl w-full overflow-hidden shadow-xl">
        <img 
          src={RegImage} 
          alt="Hotel Registration" 
          className='w-full md:w-1/2 h-48 md:h-auto object-cover hidden md:block'
        />
        
        <div className="relative flex flex-col w-full md:w-1/2 p-6 md:p-8">
          <button 
            type="button" 
            onClick={onClose}
            className='absolute top-4 right-4 h-8 w-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors'
            aria-label="Close registration form"
          >
            <img src={Icons.close} alt="Close" className='h-4 w-4' />
          </button>
          
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Register Your Hotel</h2>
          
          <div className="space-y-4">
            {/* Hotel Name */}
            <div>
              <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-1'>
                Hotel Name <span className="text-red-500">*</span>
              </label>
              <input 
                id="name" 
                type="text" 
                placeholder='Enter hotel name' 
                className='w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            {/* Phone */}
            <div>
              <label htmlFor="phone" className='block text-sm font-medium text-gray-700 mb-1'>
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input 
                id="phone" 
                type="tel" 
                placeholder='Enter phone number' 
                className='w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
            
            {/* Address */}
            <div>
              <label htmlFor="address" className='block text-sm font-medium text-gray-700 mb-1'>
                Address <span className="text-red-500">*</span>
              </label>
              <input 
                id="address" 
                type="text" 
                placeholder='Enter full address' 
                className='w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                value={formData.address}
                onChange={handleChange}
                required 
              />
            </div>
            
            {/* City Select */}
            <div>
              <label htmlFor="city" className='block text-sm font-medium text-gray-700 mb-1'>
                City <span className="text-red-500">*</span>
              </label>
              <select
                id="city"
                className='w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                value={formData.city}
                onChange={handleChange}
                required
              >
                <option value="">Select a city in Cambodia</option>
                {cambodianCities.map((city, index) => (
                  <option key={index} value={city.name}>{city.name}</option>
                ))}
              </select>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Register Hotel
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
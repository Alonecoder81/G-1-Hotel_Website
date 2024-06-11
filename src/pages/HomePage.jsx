// src/components/HomePage.jsx
import React from 'react';
import { hotelData } from '../data/hotelData';

const HomePage = () => {
  return (
    <div>
      {/* Search Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Find Your Perfect Stay</h1>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Location"
              className="p-2 rounded-md w-1/3"
            />
            <input
              type="date"
              placeholder="Check-in"
              className="p-2 rounded-md w-1/3"
            />
            <input
              type="date"
              placeholder="Check-out"
              className="p-2 rounded-md w-1/3"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-200 p-2 rounded-md w-1/6">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Featured Hotels */}
      <div className="max-w-7xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4">Featured Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotelData.slice(0, 4).map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={hotel.images[0]}
                alt={hotel.hotel_name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{hotel.hotel_name}</h3>
                <p className="text-gray-700">{hotel.description}</p>
                <div className="mt-4">
                  <span className="text-blue-600 font-bold">{hotel.price}</span>
                  <span className="text-gray-500 ml-2 line-through">
                    {(
                      parseFloat(hotel.price) *
                      (1 + parseFloat(hotel.discount) / 100)
                    ).toFixed(2)}{' '}
                    INR
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Offers */}
      <div className=" p-8 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotelData
              .filter((hotel) => parseFloat(hotel.discount) >= 20)
              .slice(0, 8)
              .map((hotel) => (
                <div
                  key={hotel.id}
                  className="bg-white text-black shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={hotel.images[0]}
                    alt={hotel.hotel_name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">
                      {hotel.hotel_name}
                    </h3>
                    <p className="text-gray-700">{hotel.description}</p>
                    <div className="mt-4">
                      <span className="text-blue-600 font-bold">
                        {hotel.price}
                      </span>
                      <span className="text-gray-500 ml-2 line-through">
                        {(
                          parseFloat(hotel.price) *
                          (1 + parseFloat(hotel.discount) / 100)
                        ).toFixed(2)}{' '}
                        INR
                      </span>
                      <span className="text-green-600 ml-2">
                        ({hotel.discount} OFF)
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
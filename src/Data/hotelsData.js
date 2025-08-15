// src/constants/data.js
import sky_villa01 from '../assets/Images/sky_villa01.jpg';
import sky_villa02 from '../assets/Images/sky_villa02.jpg';
import sky_villa03 from '../assets/Images/sky_villa03.jpg';
import sky_villa04 from '../assets/Images/sky_villa04.jpg';

import Anaya_koh_rong1 from '../assets/Images/anaya_koh_rong01.jpg';
import Anaya_koh_rong2 from '../assets/Images/anaya_koh_rong02.jpg';
import Anaya_koh_rong3 from '../assets/Images/anaya_koh_rong03.jpg';
import Anaya_koh_rong4 from '../assets/Images/anaya_koh_rong04.jpg';

import prana_hotel01 from '../assets/Images/prana_hotel01.jpg';
import prana_hotel02 from '../assets/Images/prana_hotel02.jpg';
import prana_hotel03 from '../assets/Images/prana_hotel03.jpg';
import prana_hotel04 from '../assets/Images/prana_hotel04.jpg';

import sala_siem_reap01 from '../assets/Images/sala_siem_reap01.jpg';
import sala_siem_reap02 from '../assets/Images/sala_siem_reap02.jpg';
import sala_siem_reap03 from '../assets/Images/sala_siem_reap03.jpg';
import sala_siem_reap04 from '../assets/Images/sala_siem_reap04.jpg';

import rainforest_hotel01 from '../assets/Images/rainforest_hotel01.jpg';
import rainforest_hotel02 from '../assets/Images/rainforest_hotel02.jpg';
import rainforest_hotel03 from '../assets/Images/rainforest_hotel03.jpg';
import rainforest_hotel04 from '../assets/Images/rainforest_hotel04.jpg';


import kompot_sunny01 from '../assets/Images/kompot_sunny01.jpg';
import kompot_sunny02 from '../assets/Images/kompot_sunny02.jpg';
import kompot_sunny03 from '../assets/Images/kompot_sunny03.jpg';
import kompot_sunny04 from '../assets/Images/kompot_sunny04.jpg';
import kompot_sunny05 from '../assets/Images/kompot_sunny05.jpg';

import Ohana_Phnom_Penh01 from '../assets/Images/Ohana_Phnom_Penh01.jpg';
import Ohana_Phnom_Penh02 from '../assets/Images/Ohana_Phnom_Penh02.jpg';
import Ohana_Phnom_Penh03 from '../assets/Images/Ohana_Phnom_Penh03.jpg';
import Ohana_Phnom_Penh04 from '../assets/Images/Ohana_Phnom_Penh04.jpg';
import Ohana_Phnom_Penh05 from '../assets/Images/Ohana_Phnom_Penh05.jpg';

import Phnom_Penh_51_01 from '../assets/Images/Phnom_Penh_51_01.jpg';
import Phnom_Penh_51_02 from '../assets/Images/Phnom_Penh_51_02.jpg';
import Phnom_Penh_51_03 from '../assets/Images/Phnom_Penh_51_03.jpg';
import Phnom_Penh_51_04 from '../assets/Images/Phnom_Penh_51_04.jpg';
import Phnom_Penh_51_05 from '../assets/Images/Phnom_Penh_51_05.jpg';

import pippali_boutique01 from '../assets/Images/pippali_boutique01.jpg';
import pippali_boutique02 from '../assets/Images/pippali_boutique02.jpg';
import pippali_boutique03 from '../assets/Images/pippali_boutique03.jpg';
import pippali_boutique04 from '../assets/Images/pippali_boutique04.jpg';
import pippali_boutique05 from '../assets/Images/pippali_boutique05.jpg';

import romano01 from '../assets/Images/romano01.jpg';
import romano02 from '../assets/Images/romano02.jpg';
import romano03 from '../assets/Images/romano03.jpg';
import romano04 from '../assets/Images/romano04.jpg';
import romano05 from '../assets/Images/romano05.jpg';

// Cities Data
export const cities = [
  {
    _id: 1,
    name: "Phnom Penh",
    country: "Cambodia",
    description: "The vibrant capital city with rich history and culture",
    image: sky_villa01,
    popularAttractions: ["Royal Palace", "National Museum", "Central Market"],
    coordinates: [104.917445, 11.558831],
    bestSeason: [11, 12, 1, 2] // Nov-Feb
  },
  {
    _id: 2,
    name: "Siem Reap",
    country: "Cambodia",
    description: "Gateway to the ancient Angkor temple complex",
    image: sala_siem_reap01,
    popularAttractions: ["Angkor Wat", "Bayon Temple", "Pub Street"],
    coordinates: [103.856426, 13.367097],
    bestSeason: [11, 12, 1, 2] // Nov-Feb
  },
  {
    _id: 3,
    name: "Koh Rong",
    country: "Cambodia",
    description: "Tropical island paradise with pristine beaches",
    image: Anaya_koh_rong1,
    popularAttractions: ["Long Beach", "Koh Touch", "Fishing Village"],
    coordinates: [103.305, 10.628],
    bestSeason: [1, 2, 3, 12] // Dec-Mar
  },
  {
    _id: 4,
    name: "Kampot",
    country: "Cambodia",
    description: "Riverside town famous for pepper plantations",
    image: rainforest_hotel01,
    popularAttractions: ["Bokor Mountain", "Kampot River", "Salt Fields"],
    coordinates: [104.181667, 10.616667],
    bestSeason: [11, 12, 1, 2] // Nov-Feb
  }
];

// Enhanced Hotels Data
export const hotelsData = [
  {
    _id: 1,
    name: "SKY VILLA - BKK Central Phnom Penh",
    cityId: 1,
    address: "BKK1 District, Phnom Penh",
    description: "Luxury serviced apartments with panoramic city views and rooftop infinity pool",
    stars: 5,
    priceRange: { min: 120, max: 350 },
    originalPrice: 150,
    seasonalPricing: {
      highSeason: { multiplier: 1.3, months: [11, 12, 1, 2] },
      lowSeason: { multiplier: 0.9, months: [5, 6, 7, 8, 9] }
    },
    amenities: ["wifi", "pool", "gym", "restaurant", "spa", "parking"],
    images: [sky_villa01, sky_villa02, sky_villa03, sky_villa04],
    rating: 4.9,
    reviews: 328,
    tags: ["best-recommendation", "discount", "luxury"],
    discountPercent: 20,
    isNew: false,
    isTrending: true,
    isLuxury: true,
    rooms: [
      {
        _id: 101,
        type: "Deluxe Studio",
        description: "Modern studio with city view and kitchenette",
        maxOccupancy: 2,
        size: "45 sqm",
        bedType: "King Bed",
        price: 120,
        amenities: ["wifi", "ac", "minibar", "tv"],
        images: [sky_villa01, sky_villa02],
        available: 8
      },
      {
        _id: 102,
        type: "Executive Suite",
        description: "Spacious suite with separate living area",
        maxOccupancy: 3,
        size: "75 sqm",
        bedType: "King Bed + Sofa Bed",
        price: 220,
        amenities: ["wifi", "ac", "minibar", "tv", "kitchen"],
        images: [sky_villa03, sky_villa04],
        available: 4
      },
      {
        _id: 103,
        type: "Penthouse",
        description: "Luxury penthouse with private terrace",
        maxOccupancy: 4,
        size: "120 sqm",
        bedType: "King Bed + 2 Single Beds",
        price: 350,
        amenities: ["wifi", "ac", "minibar", "tv", "kitchen", "jacuzzi"],
        images: [sky_villa03, sky_villa04],
        available: 2
      }
    ]
  },
  {
    _id: 2,
    name: "Anaya Koh Rong",
    cityId: 3,
    address: "Long Beach, Koh Rong",
    description: "Beachfront eco-resort with private bungalows and stunning ocean views",
    stars: 4,
    priceRange: { min: 80, max: 250 },
    originalPrice: 100,
    seasonalPricing: {
      highSeason: { multiplier: 1.4, months: [12, 1, 2] },
      lowSeason: { multiplier: 0.8, months: [5, 6, 7, 8, 9] }
    },
    amenities: ["wifi", "beach", "restaurant", "bar", "diving"],
    images: [Anaya_koh_rong1, Anaya_koh_rong2, Anaya_koh_rong3, Anaya_koh_rong4],
    rating: 4.7,
    reviews: 215,
    tags: ["new", "eco-friendly"],
    isNew: true,
    isTrending: true,
    isEcoFriendly: true,
    rooms: [
      {
        _id: 201,
        type: "Beachfront Bungalow",
        description: "Private bungalow steps from the beach",
        maxOccupancy: 2,
        size: "40 sqm",
        bedType: "King Bed",
        price: 150,
        amenities: ["wifi", "ac", "terrace", "hammock"],
        images: [Anaya_koh_rong1, Anaya_koh_rong2],
        available: 6
      },
      {
        _id: 202,
        type: "Ocean View Villa",
        description: "Luxury villa with panoramic ocean views",
        maxOccupancy: 4,
        size: "80 sqm",
        bedType: "King Bed + Sofa Bed",
        price: 250,
        amenities: ["wifi", "ac", "minibar", "private pool"],
        images: [Anaya_koh_rong3, Anaya_koh_rong4],
        available: 3
      }
    ]
  },
  {
    _id: 3,
    name: "Prana Hotel",
    cityId: 1,
    address: "Tonle Bassac, Phnom Penh",
    description: "Boutique hotel with modern design and excellent service",
    stars: 4,
    priceRange: { min: 90, max: 200 },
    originalPrice: 120,
    seasonalPricing: {
      highSeason: { multiplier: 1.2, months: [11, 12, 1, 2] },
      lowSeason: { multiplier: 0.85, months: [5, 6, 7, 8, 9] }
    },
    amenities: ["wifi", "pool", "restaurant", "spa"],
    images: [prana_hotel01, prana_hotel02, prana_hotel03, prana_hotel04],
    rating: 4.5,
    reviews: 187,
    tags: ["best-recommendation"],
    isNew: false,
    isTrending: false,
    rooms: [
      {
        _id: 301,
        type: "Superior Room",
        description: "Comfortable room with city view",
        maxOccupancy: 2,
        size: "35 sqm",
        bedType: "Queen Bed",
        price: 90,
        amenities: ["wifi", "ac", "tv"],
        images: [prana_hotel01, prana_hotel02],
        available: 5
      },
      {
        _id: 302,
        type: "Executive Room",
        description: "Spacious room with work area",
        maxOccupancy: 2,
        size: "45 sqm",
        bedType: "King Bed",
        price: 140,
        amenities: ["wifi", "ac", "tv", "work-desk"],
        images: [prana_hotel03, prana_hotel04],
        available: 3
      }
    ]
  },
  {
    _id: 4,
    name: "Sala Siem Reap",
    cityId: 2,
    address: "River Road, Siem Reap",
    description: "Luxury resort with traditional Khmer architecture",
    stars: 5,
    priceRange: { min: 150, max: 400 },
    originalPrice: 200,
    seasonalPricing: {
      highSeason: { multiplier: 1.3, months: [11, 12, 1, 2] },
      lowSeason: { multiplier: 0.9, months: [5, 6, 7, 8, 9] }
    },
    amenities: ["wifi", "pool", "gym", "restaurant", "spa"],
    images: [sala_siem_reap01, sala_siem_reap02, sala_siem_reap03, sala_siem_reap04],
    rating: 4.8,
    reviews: 276,
    tags: ["discount", "luxury"],
    discountPercent: 25,
    isNew: false,
    isLuxury: true,
    rooms: [
      {
        _id: 401,
        type: "Garden Villa",
        description: "Private villa with garden view",
        maxOccupancy: 2,
        size: "60 sqm",
        bedType: "King Bed",
        price: 200,
        amenities: ["wifi", "ac", "minibar", "tv", "terrace"],
        images: [sala_siem_reap03, sala_siem_reap04],
        available: 3
      },
      {
        _id: 402,
        type: "Pool Villa",
        description: "Luxury villa with private pool",
        maxOccupancy: 4,
        size: "100 sqm",
        bedType: "King Bed + 2 Single Beds",
        price: 400,
        amenities: ["wifi", "ac", "minibar", "tv", "private pool"],
        images: [sala_siem_reap01, sala_siem_reap02],
        available: 2
      }
    ]
  },
  {
    _id: 5,
    name: "Rainforest Retreat Kampot",
    cityId: 4,
    address: "Bokor Mountain Road, Kampot",
    description: "Eco-friendly retreat nestled in the rainforest",
    stars: 4,
    priceRange: { min: 110, max: 280 },
    originalPrice: 150,
    seasonalPricing: {
      highSeason: { multiplier: 1.25, months: [11, 12, 1, 2] },
      lowSeason: { multiplier: 0.8, months: [5, 6, 7, 8, 9] }
    },
    amenities: ["wifi", "spa", "restaurant", "nature-view"],
    images: [rainforest_hotel01, rainforest_hotel02, rainforest_hotel03, rainforest_hotel04],
    rating: 4.6,
    reviews: 195,
    tags: ["new", "best-recommendation", "discount", "eco-friendly"],
    discountPercent: 15,
    isNew: true,
    isEcoFriendly: true,
    rooms: [
      {
        _id: 501,
        type: "Rainforest Bungalow",
        description: "Secluded bungalow with rainforest views",
        maxOccupancy: 2,
        size: "50 sqm",
        bedType: "King Bed",
        price: 110,
        amenities: ["wifi", "ac", "balcony"],
        images: [rainforest_hotel01, rainforest_hotel02],
        available: 5
      },
      {
        _id: 502,
        type: "Treehouse Suite",
        description: "Unique elevated suite with panoramic views",
        maxOccupancy: 2,
        size: "65 sqm",
        bedType: "King Bed",
        price: 180,
        amenities: ["wifi", "ac", "minibar", "private deck"],
        images: [rainforest_hotel03, rainforest_hotel04],
        available: 3
      }
    ]
  }
];

// Enhanced Exclusive Offers
export const exclusiveOffers = [
  {
    _id: 1,
    title: "Early Bird Special 2024",
    description: "Book 30 days in advance and save 25%",
    priceOff: 25,
    expiryDate: "2024-12-31",
    image: sky_villa02,
    applicableHotels: [1, 2, 3, 4, 5],
    terms: "Valid for bookings made before December 1, 2024",
    isFeatured: true,
    badge: "Limited Time"
  },
  {
    _id: 2,
    title: "Long Stay Discount",
    description: "Stay 7+ nights and get 20% off",
    priceOff: 20,
    expiryDate: "2024-12-31",
    image: sala_siem_reap02,
    applicableHotels: "all",
    terms: "Minimum 7-night stay required",
    isFeatured: true,
    badge: "Popular"
  },
  {
    _id: 3,
    title: "Weekend Getaway",
    description: "Special weekend rates with free breakfast",
    priceOff: 15,
    expiryDate: "2024-06-30",
    image: rainforest_hotel02,
    applicableHotels: [2, 4, 5],
    terms: "Friday-Sunday stays only",
    isFeatured: false,
    badge: "Weekend Special"
  },
  {
    _id: 4,
    title: "Family Package",
    description: "Special rates for families with kids under 12",
    priceOff: 10,
    expiryDate: "2024-06-30",
    image: Anaya_koh_rong3,
    applicableHotels: [1, 3, 5],
    terms: "Minimum 2 adults + 1 child",
    isFeatured: true,
    badge: "Family Deal"
  },
  {
    _id: 5,
    title: "Honeymoon Package",
    description: "Romantic package with champagne and spa credits",
    priceOff: 15,
    expiryDate: "2024-12-31",
    image: sala_siem_reap04,
    applicableHotels: [2, 4, 5],
    terms: "Valid for couples only",
    isFeatured: true,
    badge: "Romantic"
  }
];
export const roomsDummyData = [
  {
    _id: 1,
    name: "SKY VILLA - BKK Central Phnom Penh",
    cityId: 1,
    address: "BKK1 District, Phnom Penh",
    description: "Luxury serviced apartments with panoramic city views and rooftop infinity pool",
    stars: 5,
    priceRange: { min: 120, max: 350 },
    originalPrice: 150,
    
    seasonalPricing: {
      highSeason: { multiplier: 1.3, months: [11, 12, 1, 2] },
      lowSeason: { multiplier: 0.9, months: [5, 6, 7, 8, 9] }
    },
    amenities: ['wifi', 'breakfast', 'service', 'Tv', 'Ac','minibar',''],
    images: [sky_villa01, sky_villa02, sky_villa03, sky_villa04],
    rating: 4.9,
    reviews: 328,
    tags: ["best-recommendation", "discount", "luxury"],
    discountPercent: 20,
    isNew: false,
    isTrending: true,
    isLuxury: true,
    rooms: [
      {
        _id: 101,
        type: "Deluxe Studio",
        description: "Modern studio with city view and kitchenette",
        maxOccupancy: 2,
        size: "45 sqm",
        bedType: "King Bed",
        price: 120,
        amenities: ["wifi", "ac", "minibar", "tv"],
        images: [sky_villa01, sky_villa02, sky_villa03, sky_villa04],
        available: 8
      },
      // {
      //   _id: 102,
      //   type: "Executive Suite",
      //   description: "Spacious suite with separate living area",
      //   maxOccupancy: 3,
      //   size: "75 sqm",
      //   bedType: "King Bed + Sofa Bed",
      //   price: 220,
      //   amenities: ["wifi", "ac", "minibar", "tv", "kitchen"],
      //   images: [sky_villa01,sky_villa02,sky_villa03, sky_villa04],
      //   available: 4
      // },
      // {
      //   _id: 103,
      //   type: "Penthouse",
      //   description: "Luxury penthouse with private terrace",
      //   maxOccupancy: 4,
      //   size: "120 sqm",
      //   bedType: "King Bed + 2 Single Beds",
      //   price: 350,
      //   amenities: ["wifi", "ac", "minibar", "tv", "kitchen", "jacuzzi"],
      //   images: [sky_villa03, sky_villa04],
      //   available: 2
      // }
    ]
  },
  {
    _id: 2,
    name: "Anaya Koh Rong",
    cityId: 3,
    address: "Long Beach, Koh Rong",
    description: "Beachfront eco-resort with private bungalows and stunning ocean views",
    stars: 4,
    priceRange: { min: 80, max: 250 },
    originalPrice: 100,
    seasonalPricing: {
      highSeason: { multiplier: 1.4, months: [12, 1, 2] },
      lowSeason: { multiplier: 0.8, months: [5, 6, 7, 8, 9] }
    },
    amenities: ["wifi", "beach", "restaurant", "bar", "diving"],
    images: [Anaya_koh_rong1, Anaya_koh_rong2, Anaya_koh_rong3, Anaya_koh_rong4],
    rating: 4.7,
    reviews: 215,
    tags: ["new", "eco-friendly"],
    isNew: true,
    isTrending: true,
    isEcoFriendly: true,
    rooms: [
      {
        _id: 201,
        type: "Beachfront Bungalow",
        description: "Private bungalow steps from the beach",
        maxOccupancy: 2,
        size: "40 sqm",
        bedType: "King Bed",
        price: 150,
        amenities: ["wifi", "ac", "terrace", "hammock"],
        images: [Anaya_koh_rong1, Anaya_koh_rong2, Anaya_koh_rong3, Anaya_koh_rong4],
        available: 6
      },
      // {
      //   _id: 202,
      //   type: "Ocean View Villa",
      //   description: "Luxury villa with panoramic ocean views",
      //   maxOccupancy: 4,
      //   size: "80 sqm",
      //   bedType: "King Bed + Sofa Bed",
      //   price: 250,
      //   amenities: ["wifi", "ac", "minibar", "private pool"],
      //   images: [Anaya_koh_rong3, Anaya_koh_rong4],
      //   available: 3
      // }
    ]
  },
  {
    _id: 3,
    name: "Prana Hotel",
    cityId: 1,
    address: "Tonle Bassac, Phnom Penh",
    description: "Boutique hotel with modern design and excellent service",
    stars: 4,
    priceRange: { min: 90, max: 200 },
    originalPrice: 120,
    seasonalPricing: {
      highSeason: { multiplier: 1.2, months: [11, 12, 1, 2] },
      lowSeason: { multiplier: 0.85, months: [5, 6, 7, 8, 9] }
    },
    amenities: ["wifi", "pool", "restaurant", "spa"],
    images: [prana_hotel01, prana_hotel02, prana_hotel03, prana_hotel04],
    rating: 4.5,
    reviews: 187,
    tags: ["best-recommendation"],
    isNew: false,
    isTrending: false,
    rooms: [
      {
        _id: 301,
        type: "Superior Room",
        description: "Comfortable room with city view",
        maxOccupancy: 2,
        size: "35 sqm",
        bedType: "Queen Bed",
        price: 90,
        amenities: ["wifi", "ac", "tv"],
        images: [prana_hotel01, prana_hotel02, prana_hotel03, prana_hotel04],
        available: 5
      },
      // {
      //   _id: 302,
      //   type: "Executive Room",
      //   description: "Spacious room with work area",
      //   maxOccupancy: 2,
      //   size: "45 sqm",
      //   bedType: "King Bed",
      //   price: 140,
      //   amenities: ["wifi", "ac", "tv", "work-desk"],
      //   images: [prana_hotel03, prana_hotel04],
      //   available: 3
      // }
    ]
  },
  {
    _id: 4,
    name: "Sala Siem Reap",
    cityId: 2,
    address: "River Road, Siem Reap",
    description: "Luxury resort with traditional Khmer architecture",
    stars: 5,
    priceRange: { min: 150, max: 400 },
    originalPrice: 140,
    seasonalPricing: {
      highSeason: { multiplier: 1.3, months: [11, 12, 1, 2] },
      lowSeason: { multiplier: 0.9, months: [5, 6, 7, 8, 9] }
    },
    amenities: ["wifi", "pool", "gym", "restaurant", "spa"],
    images: [sala_siem_reap01, sala_siem_reap02, sala_siem_reap03, sala_siem_reap04],
    rating: 4.8,
    reviews: 276,
    tags: ["discount", "luxury"],
    discountPercent: 25,
    isNew: false,
    isLuxury: true,
    rooms: [
      {
        _id: 401,
        type: "Garden Villa",
        description: "Private villa with garden view",
        maxOccupancy: 2,
        size: "60 sqm",
        bedType: "King Bed",
        price: 200,
        amenities: ["wifi", "ac", "minibar", "tv", "terrace"],
        images: [sala_siem_reap01, sala_siem_reap02, sala_siem_reap03, sala_siem_reap04],
        available: 3
      },
      // {
      //   _id: 402,
      //   type: "Pool Villa",
      //   description: "Luxury villa with private pool",
      //   maxOccupancy: 4,
      //   size: "100 sqm",
      //   bedType: "King Bed + 2 Single Beds",
      //   price: 400,
      //   amenities: ["wifi", "ac", "minibar", "tv", "private pool"],
      //   images: [sala_siem_reap01, sala_siem_reap02],
      //   available: 2
      // }
    ]
  },
  {
    _id: 5,
    name: "Rainforest Retreat Kampot",
    cityId: 4,
    address: "Bokor Mountain Road, Kampot",
    description: "Eco-friendly retreat nestled in the rainforest",
    stars: 4,
    priceRange: { min: 110, max: 280 },
    originalPrice: 150,
    seasonalPricing: {
      highSeason: { multiplier: 1.25, months: [11, 12, 1, 2] },
      lowSeason: { multiplier: 0.8, months: [5, 6, 7, 8, 9] }
    },
    amenities: ["wifi", "spa", "restaurant", "nature-view"],
    images: [rainforest_hotel01, rainforest_hotel02, rainforest_hotel03, rainforest_hotel04],
    rating: 4.6,
    reviews: 195,
    tags: ["new", "best-recommendation", "discount", "eco-friendly"],
    discountPercent: 15,
    isNew: true,
    isEcoFriendly: true,
    rooms: [
      {
        _id: 501,
        type: "Rainforest Bungalow",
        description: "Secluded bungalow with rainforest views",
        maxOccupancy: 2,
        size: "50 sqm",
        bedType: "King Bed",
        price: 110,
        amenities: ["wifi", "ac", "balcony"],
        images: [rainforest_hotel01, rainforest_hotel02, rainforest_hotel03, rainforest_hotel04],
        available: 5
      },
      // {
      //   _id: 502,
      //   type: "Treehouse Suite",
      //   description: "Unique elevated suite with panoramic views",
      //   maxOccupancy: 2,
      //   size: "65 sqm",
      //   bedType: "King Bed",
      //   price: 180,
      //   amenities: ["wifi", "ac", "minibar", "private deck"],
      //   images: [rainforest_hotel03, rainforest_hotel04],
      //   available: 3
      // }
    ]
  },
  {
    _id: 6,
    name: "Kompot Sunny Hotel",
    cityId: 4, // Kampot
    address: "Riverside, Kampot",
    description: "Sunny riverside hotel with spectacular mountain views",
    stars: 4,
    priceRange: { min: 70, max: 180 },
    originalPrice: 90,
    seasonalPricing: {
      highSeason: { multiplier: 1.2, months: [11, 12, 1, 2] },
      lowSeason: { multiplier: 0.8, months: [5, 6, 7, 8, 9] }
    },
    amenities: ["wifi", "pool", "restaurant", "river-view", "bike-rental"],
    images: [kompot_sunny01, kompot_sunny02, kompot_sunny03, kompot_sunny04, kompot_sunny05],
    rating: 4.4,
    reviews: 156,
    tags: ["family-friendly", "great-value"],
    isNew: false,
    rooms: [
      {
        _id: 601,
        type: "Standard Room",
        description: "Comfortable room with mountain view",
        maxOccupancy: 2,
        size: "35 sqm",
        bedType: "Queen Bed",
        price: 70,
        amenities: ["wifi", "ac", "tv"],
        images: [kompot_sunny01, kompot_sunny02, kompot_sunny03, kompot_sunny04, kompot_sunny05],
        available: 7
      },
      // {
      //   _id: 602,
      //   type: "Family Room",
      //   description: "Spacious room for families",
      //   maxOccupancy: 4,
      //   size: "55 sqm",
      //   bedType: "Queen Bed + 2 Single Beds",
      //   price: 120,
      //   amenities: ["wifi", "ac", "tv", "minifridge"],
      //   images: [kompot_sunny03, kompot_sunny04],
      //   available: 4
      // }
    ]
  },
  {
    _id: 7,
    name: "Ohana Phnom Penh",
    cityId: 1, // Phnom Penh
    address: "BKK3 District, Phnom Penh",
    description: "Boutique hotel with tropical garden and pool",
    stars: 3,
    priceRange: { min: 60, max: 150 },
    originalPrice: 80,
    seasonalPricing: {
      highSeason: { multiplier: 1.15, months: [11, 12, 1, 2] },
      lowSeason: { multiplier: 0.85, months: [5, 6, 7, 8, 9] }
    },
    amenities: ["wifi", "pool", "garden", "cafe"],
    images: [Ohana_Phnom_Penh01, Ohana_Phnom_Penh02, Ohana_Phnom_Penh03, Ohana_Phnom_Penh04, Ohana_Phnom_Penh05],
    rating: 4.3,
    reviews: 132,
    tags: ["budget-friendly", "cozy"],
    discountPercent: 10,
    isNew: true,
    rooms: [
      {
        _id: 701,
        type: "Garden View Room",
        description: "Cozy room overlooking tropical garden",
        maxOccupancy: 2,
        size: "30 sqm",
        bedType: "Queen Bed",
        price: 60,
        amenities: ["wifi", "ac", "tv"],
        images: [Ohana_Phnom_Penh01, Ohana_Phnom_Penh02, Ohana_Phnom_Penh03, Ohana_Phnom_Penh04, Ohana_Phnom_Penh05],
        available: 6
      },
      // {
      //   _id: 702,
      //   type: "Poolside Suite",
      //   description: "Private suite with pool access",
      //   maxOccupancy: 2,
      //   size: "45 sqm",
      //   bedType: "King Bed",
      //   price: 100,
      //   amenities: ["wifi", "ac", "tv", "minibar"],
      //   images: [Ohana_Phnom_Penh03, Ohana_Phnom_Penh04],
      //   available: 3
      // }
    ]
  },
  {
    _id: 8,
    name: "Phnom Penh 51 Hotel",
    cityId: 1, // Phnom Penh
    address: "Street 51, Phnom Penh",
    description: "Modern hotel in the heart of the city's nightlife district",
    stars: 4,
    priceRange: { min: 80, max: 200 },
    originalPrice: 100,
    seasonalPricing: {
      highSeason: { multiplier: 1.25, months: [11, 12, 1, 2] },
      lowSeason: { multiplier: 0.9, months: [5, 6, 7, 8, 9] }
    },
    amenities: ["wifi", "rooftop-bar", "gym", "restaurant"],
    images: [Phnom_Penh_51_01, Phnom_Penh_51_02, Phnom_Penh_51_03, Phnom_Penh_51_04, Phnom_Penh_51_05],
    rating: 4.5,
    reviews: 187,
    tags: ["nightlife", "central-location"],
    isNew: false,
    rooms: [
      {
        _id: 801,
        type: "City View Room",
        description: "Room with views of the bustling city",
        maxOccupancy: 2,
        size: "40 sqm",
        bedType: "King Bed",
        price: 80,
        amenities: ["wifi", "ac", "tv", "soundproofing"],
        images: [Phnom_Penh_51_01, Phnom_Penh_51_02, Phnom_Penh_51_03, Phnom_Penh_51_04, Phnom_Penh_51_05],
        available: 5
      },
      // {
      //   _id: 802,
      //   type: "Executive Suite",
      //   description: "Spacious suite with premium amenities",
      //   maxOccupancy: 3,
      //   size: "65 sqm",
      //   bedType: "King Bed + Sofa Bed",
      //   price: 150,
      //   amenities: ["wifi", "ac", "tv", "minibar", "work-desk"],
      //   images: [Phnom_Penh_51_03, Phnom_Penh_51_04],
      //   available: 2
      // }
    ]
  },
  {
    _id: 9,
    name: "Pippali Boutique Hotel",
    cityId: 2, // Siem Reap
    address: "Old Market Area, Siem Reap",
    description: "Charming boutique hotel with traditional Khmer decor",
    stars: 4,
    priceRange: { min: 75, max: 180 },
    originalPrice: 90,
    seasonalPricing: {
      highSeason: { multiplier: 1.2, months: [11, 12, 1, 2] },
      lowSeason: { multiplier: 0.85, months: [5, 6, 7, 8, 9] }
    },
    amenities: ["wifi", "pool", "spa", "restaurant"],
    images: [pippali_boutique01, pippali_boutique02, pippali_boutique03, pippali_boutique04, pippali_boutique05],
    rating: 4.6,
    reviews: 203,
    tags: ["boutique", "cultural-experience"],
    discountPercent: 15,
    isNew: true,
    rooms: [
      {
        _id: 901,
        type: "Pippali Boutique Hotel",
        description: "Room decorated with local handicrafts",
        maxOccupancy: 2,
        size: "38 sqm",
        bedType: "Queen Bed",
        price: 75,
        amenities: ["wifi", "ac", "tv"],
        images: [pippali_boutique01, pippali_boutique02, pippali_boutique03, pippali_boutique04, pippali_boutique05],
        available: 5
      },
      
    ]
  }
]

// Helper Functions
export const getHotelById = (id) => {
  return hotelsData.find(hotel => hotel._id === id);
};

export const getRoomById = (hotelId, roomId) => {
  const hotel = getHotelById(hotelId);
  if (hotel) {
    return hotel.rooms.find(room => room._id === roomId);
  }
  return null;
};

export const getHotelsByCityId = (cityId) => {
  return hotelsData.filter(hotel => hotel.cityId === cityId);
};

export const getNewHotels = () => {
  return hotelsData.filter(hotel => hotel.isNew);
};

export const getRecommendedHotels = () => {
  return hotelsData.filter(hotel => hotel.tags && hotel.tags.includes("best-recommendation"));
};

export const getDiscountedHotels = () => {
  return hotelsData.filter(hotel => hotel.tags.includes("discount"));
};

export const getLuxuryHotels = () => {
  return hotelsData.filter(hotel => hotel.isLuxury);
};

export const getEcoFriendlyHotels = () => {
  return hotelsData.filter(hotel => hotel.isEcoFriendly);
};

export const getTrendingHotels = () => {
  return hotelsData.filter(hotel => hotel.isTrending);
};


export const addNewHotel = (newHotel) => {
  roomsDummyData.push(newHotel);
  localStorage.setItem('hotelsData', JSON.stringify(roomsDummyData));
  return [...roomsDummyData];
};

export const addNewRoom = (hotelId, newRoom) => {
  const hotelIndex = roomsDummyData.findIndex(h => h._id === hotelId);
  if (hotelIndex !== -1) {
    roomsDummyData[hotelIndex].rooms.push(newRoom);
    localStorage.setItem('hotelsData', JSON.stringify(roomsDummyData));
  }
  return [...roomsDummyData];
};
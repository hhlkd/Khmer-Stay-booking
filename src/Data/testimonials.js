// src/Data/testimonials.js
export const testimonials = [
  {
    id: 1,
    name: "Emma Rodriguez",
    address: "Barcelona, Spain", 
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    rating: 5,
    review: "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!"
  },
  {
    id: 2,
    name: "Liam Johnson",
    address: "New York, USA",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    rating: 4,
    review: "I'm truly impressed by the quality and consistency. The entire process was smooth, and the results exceeded all expectations. Thank you!"
  },
  {
    id: 3, 
    name: "Sophia Lee",
    address: "Seoul, South Korea",
    image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
    rating: 5,
    review: "Fantastic experience! From start to finish, the team was professional, responsive, and genuinely cared about delivering great results."
  }
];

export const Star = ({ filled }) => (
  <svg 
    className="w-4 h-4" 
    fill={filled ? "currentColor" : "none"} 
    stroke="currentColor" 
    strokeWidth="1.5" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z" 
    />
  </svg>
);
// src/data/testimonials.js (recommended file location)
export const testimonials = [
  {
    id: 1,
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    rating: 5,
    review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides.",
    date: "2023-10-15"  // Added for better sorting/filtering
  },
  {
    id: 2,
    name: "Liam Johnson",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    rating: 5,
    review: "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!",
    date: "2023-11-02",
    featured: true  // Mark as featured if needed
  },
  {
    id: 3,
    name: "Sophia Lee",
    location: "Seoul, South Korea",
    image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
    rating: 5,
    review: "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!",
    date: "2024-01-18",
    verified: true  // Mark as verified purchase
  }
];

// Optional: Export as default too for different import styles
export default testimonials;
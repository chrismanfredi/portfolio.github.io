'use client';
import { useState, useEffect, SetStateAction } from "react";
import { motion } from "framer-motion";

const slides = [
  { id: 1, image: "https://placehold.co/600x256", thumb: "/images/thumb1.jpg" },
  { id: 2, image: "https://placehold.co/600x256", thumb: "/images/thumb2.jpg" },
  { id: 3, image: "https://placehold.co/600x256", thumb: "/images/thumb3.jpg" },
  { id: 4, image: "https://placehold.co/600x256", thumb: "/images/thumb4.jpg" },
];

export default function Carousel() {
    const [current, setCurrent] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 3000);
      return () => clearInterval(timer);
    }, []);
  
    const goToSlide = (index: SetStateAction<number>) => {
      setCurrent(index);
    };
  
    return (
      <div className="w-full max-w-4xl mx-auto p-4">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <motion.div
            className="flex transition-transform duration-700"
            animate={{ x: `-${current * 100}%` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="min-w-full h-80 bg-center bg-cover"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
            ))}
          </motion.div>
        </div>
  
        {/* Thumbnails */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                index === current ? "border-blue-500" : "border-transparent"
              }`}
            >
              <img
                src={slide.thumb}
                alt="Thumbnail"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    );
  }
  
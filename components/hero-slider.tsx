"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  { id: 1, image: "/g1.jpg", alt: "Premium Fabrication Services" },
  { id: 2, image: "/g2.jpg", alt: "Professional Construction" },
  { id: 3, image: "/g3.jpg", alt: "Garden Maintenance & Design" },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-play every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Slider Container */}
      <div className="relative h-full w-full">
        {/* Slides */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative h-full w-full flex-shrink-0"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover rounded-xl md:rounded-2xl"
                priority={slide.id === 1}
                sizes="100vw"
              />
              {/* Optional: Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-xl md:rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 
                     bg-white/80 hover:bg-white backdrop-blur-sm text-gray-800 
                     p-3 md:p-4 rounded-full shadow-lg 
                     transition-all duration-200 hover:scale-110 
                     focus:outline-none focus:ring-4 focus:ring-white/50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 
                     bg-white/80 hover:bg-white backdrop-blur-sm text-gray-800 
                     p-3 md:p-4 rounded-full shadow-lg 
                     transition-all duration-200 hover:scale-110 
                     focus:outline-none focus:ring-4 focus:ring-white/50"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Optional: Dots Indicator (Clean & Minimal) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white w-8 shadow-md"
                  : "bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
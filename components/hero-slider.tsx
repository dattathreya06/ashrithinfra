"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
const slides = [
  {
    id: 1,
    title: "Premium Fabrication Services",
    subtitle: "Expert metal and structural fabrication for all your construction needs",
    color: "from-slate-800 to-slate-900",
    image: "/g1.jpg"
  },
  {
    id: 2,
    title: "Professional Construction",
    subtitle: "Building dreams with precision, quality, and innovation",
    color: "from-teal-700 to-slate-800",
    image: "/g2.jpg"
  },
  {
    id: 3,
    title: "Garden Maintenance & Design",
    subtitle: "Transform your outdoor spaces into beautiful green paradises",
    color: "from-green-700 to-slate-800",
    image: "/g3.jpg"
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="slider-container h-96 md:h-[500px] bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Slides */}
      <div
        className="slider-wrapper"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`slider-slide flex items-center justify-center bg-gradient-to-r ${slide.color} relative overflow-hidden`}
          >
            {/* Accent elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/10 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-500/5 rounded-full -ml-40 -mb-40"></div>

            <div className="relative z-10 text-center text-white px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">{slide.title}</h2>
           
              <p className="text-lg md:text-xl text-gray-200 text-balance">{slide.subtitle}</p>
            </div>
            
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-2 rounded-full transition"
      >
        <ChevronLeft size={32} className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-2 rounded-full transition"
      >
        <ChevronRight size={32} className="text-white" />
      </button>

      {/* Dots Navigation */}
      <div className="slider-nav">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`slider-dot ${index === currentSlide ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  )
}

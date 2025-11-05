"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Premium Fabrication Services",
    subtitle: "Expert metal and structural fabrication for all your construction needs",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop",
    accent: "from-amber-400 to-orange-500",
  },
  {
    id: 2,
    title: "Professional Construction",
    subtitle: "Building dreams with precision, quality, and innovation",
    image: "https://images.unsplash.com/photo-1504917595217-3404ee9c6e68?w=1200&h=600&fit=crop",
    accent: "from-blue-400 to-cyan-500",
  },
  {
    id: 3,
    title: "Garden Maintenance & Design",
    subtitle: "Transform your outdoor spaces into beautiful green paradises",
    image: "https://images.unsplash.com/photo-1585766899112-f7b637dc60f8?w=1200&h=600&fit=crop",
    accent: "from-green-400 to-emerald-500",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  return (
    <div className="slider-container h-80 md:h-[600px] relative overflow-hidden group">
      {/* Slides */}
      <div
        className="slider-wrapper transition-transform duration-700 ease-in-out h-full"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slider-slide flex-shrink-0 w-full h-full relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.accent} opacity-10`}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center px-4 md:px-8">
              <div className="text-center text-white max-w-3xl">
                <div className="inline-block mb-6">
                  <div className={`bg-gradient-to-r ${slide.accent} px-6 py-2 rounded-full text-sm font-semibold`}>
                    ✨ Featured Service
                  </div>
                </div>
                <h1 className="text-3xl md:text-6xl font-bold mb-6 text-balance leading-tight">{slide.title}</h1>
                <p className="text-base md:text-xl text-gray-100 text-balance mb-8 leading-relaxed">{slide.subtitle}</p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <button
                    className={`bg-gradient-to-r ${slide.accent} text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-200 transform hover:scale-105`}
                  >
                    Learn More
                  </button>
                  <button className="bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 border border-white/30">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            {/* Animated accent element */}
            <div
              className={`absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br ${slide.accent} opacity-10 rounded-full -mr-48 -mb-48 animate-pulse`}
            ></div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-3 md:p-4 rounded-full transition-all duration-200 backdrop-blur-sm group-hover:scale-110 transform"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-white md:w-8 md:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-3 md:p-4 rounded-full transition-all duration-200 backdrop-blur-sm group-hover:scale-110 transform"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-white md:w-8 md:h-8" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlay(false)
            }}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide ? "bg-white w-8 h-3" : "bg-white/50 w-3 h-3 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Indicator */}
      <div className="absolute top-6 md:top-8 right-6 md:right-8 z-20 text-white/60 text-sm flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${isAutoPlay ? "bg-green-400 animate-pulse" : "bg-gray-400"}`}></div>
        <span className="hidden md:inline">{isAutoPlay ? "Auto-playing" : "Manual mode"}</span>
      </div>
    </div>
  )
}

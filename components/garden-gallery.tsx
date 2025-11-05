"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryImage {
  id: number
  title: string
  image: string
}

export default function GardenGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images: GalleryImage[] = [
    {
      id: 1,
      title: "Garden Design ",
      image: "./g1.jpg",
    },
    {
      id: 2,
      title: "Garden Design & Planning",
      image: "./g2.jpg",
    },
    {
      id: 3,
      title: "Lawn Maintenance",
      image: "./g3.jpg",
    },
    {
      id: 4,
      title: "Plant Care",
      image: "./g4.jpg",
    },
    {
      id: 5,
      title: "Landscape Design",
      image: "./g5.jpg",
    },
    {
      id: 6,
      title: "Seasonal Garden",
      image: "./g6.jpg",
    },
    
  ]

  const imagesPerRow = 3
  const totalPages = Math.ceil(images.length / imagesPerRow)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages)
  }

  // Get the 3 visible images based on current index
  const visibleImages = images.slice(currentIndex * imagesPerRow, (currentIndex + 1) * imagesPerRow)

  return (
    <div className="w-full space-y-6">
      {/* Gallery Grid - Shows 3 images per row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleImages.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-lg aspect-square cursor-pointer"
          >
            <img
              src={image.image || "/placeholder.svg"}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-end opacity-0 group-hover:opacity-100">
              <div className="p-4 text-white w-full">
                <h3 className="text-lg font-semibold">{image.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Navigation Controls */}
      <div className="flex items-center justify-center gap-6">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="p-3 bg-gradient-to-br from-lime-400 to-lime-500 text-white rounded-full hover:shadow-lg transition transform hover:scale-110 active:scale-95"
          aria-label="Previous gallery"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Dot Indicators */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-lime-500 w-8" : "bg-gray-300 w-3 hover:bg-gray-400"
              }`}
              aria-label={`Go to gallery page ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-3 bg-gradient-to-br from-lime-400 to-lime-500 text-white rounded-full hover:shadow-lg transition transform hover:scale-110 active:scale-95"
          aria-label="Next gallery"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Page Counter */}
      <div className="text-center text-gray-600 text-sm font-medium">
        Page {currentIndex + 1} of {totalPages}
      </div>
    </div>
  )
}

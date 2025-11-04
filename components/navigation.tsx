"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-30">
          {/* Logo */}
            <Link href="/" className="flex items-center gap-2 pt-4">
            <div className="w-35 h-30">
              <img 
              src="/logo-a.png" 
              alt="Ashrith Logo"
              className=" object-contain"
              />
            </div>
          
            </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-lime-500 transition font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-lime-500 transition font-medium">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-lime-500 transition font-medium">
              Services
            </Link>
            <Link
              href="/contact"
              className="bg-lime-500 text-white px-6 py-2 rounded-lg hover:bg-lime-600 transition font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-lime-500">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-lime-500">
              About Us
            </Link>
            <Link href="/services" className="block py-2 text-gray-700 hover:text-lime-500">
              Services
            </Link>
            <Link href="/contact" className="block py-2 bg-lime-500 text-white px-4 rounded-lg text-center">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

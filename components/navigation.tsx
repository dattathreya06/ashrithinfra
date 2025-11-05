"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Zap } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Icon */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-lime-400 via-lime-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition transform group-hover:scale-105">
              <Zap size={24} />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900">Ashrith</h1>
              <p className="text-xs text-lime-600 font-semibold">Infra & Energy</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1 items-center">
            <Link
              href="/"
              className="text-gray-700 hover:text-lime-600 px-4 py-2 rounded-lg transition font-medium relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-lime-600 px-4 py-2 rounded-lg transition font-medium relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-lime-600 px-4 py-2 rounded-lg transition font-medium relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-lime-500 to-lime-600 text-white px-6 py-2 rounded-xl hover:shadow-lg transition font-medium ml-4 transform hover:scale-105"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-gray-900" /> : <Menu size={24} className="text-gray-900" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <Link
              href="/"
              className="block py-3 px-4 text-gray-700 hover:bg-lime-50 hover:text-lime-600 rounded-lg transition font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-3 px-4 text-gray-700 hover:bg-lime-50 hover:text-lime-600 rounded-lg transition font-medium"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="block py-3 px-4 text-gray-700 hover:bg-lime-50 hover:text-lime-600 rounded-lg transition font-medium"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block py-3 px-4 bg-gradient-to-r from-lime-500 to-lime-600 text-white rounded-lg text-center font-medium hover:shadow-lg transition"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

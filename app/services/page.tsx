"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServiceLogo from "@/components/service-logo"
import GardenGallery from "@/components/garden-gallery"
import { Leaf, Hammer, Home, Shovel } from "lucide-react"

const servicesData = [
  {
    id: "construction",
    title: "House Construction",
    icon: Home,
    description: "Complete residential and commercial construction solutions",
    bgColor: "from-blue-600 to-blue-700",
    logoBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    logoText: "text-white",
    details: [
      "Foundation and structural work",
      "Complete home construction",
      "Interior finishing",
      "Quality material selection",
      "Timely project delivery",
      "Professional supervision",
    ],
    features:
      "We handle every aspect of construction, from planning to completion, ensuring the highest quality standards.",
  },
  {
    id: "garden",
    title: "Garden Maintenance",
    icon: Leaf,
    description: "Professional landscaping and garden care services",
    bgColor: "from-green-600 to-green-700",
    logoBg: "bg-gradient-to-br from-green-500 to-green-600",
    logoText: "text-white",
    details: [
      "Garden design and planning",
      "Regular maintenance services",
      "Lawn and plant care",
      "Irrigation system setup",
      "Seasonal pruning and trimming",
      "Pest control management",
    ],
    features: "Transform your outdoor spaces into beautiful, well-maintained green areas with our expert care.",
    hasGallery: true,
  },
  {
    id: "material",
    title: "Garden Material Supply",
    icon: Shovel,
    description: "Quality materials for your garden projects",
    bgColor: "from-amber-600 to-amber-700",
    logoBg: "bg-gradient-to-br from-amber-500 to-amber-600",
    logoText: "text-white",
    details: [
      "Soil and compost supply",
      "Mulch and ground cover",
      "Garden tools and equipment",
      "Landscaping materials",
      "Fertilizers and plant nutrients",
      "Delivery services available",
    ],
    features: "Premium quality materials sourced and delivered to your doorstep for all your gardening needs.",
  },
  {
    id: "fabrication",
    title: "Fabrication Services",
    icon: Hammer,
    description: "Expert metal and structural fabrication",
    bgColor: "from-gray-700 to-gray-800",
    logoBg: "bg-gradient-to-br from-gray-600 to-gray-700",
    logoText: "text-white",
    details: [
      "Metal fabrication work",
      "Structural design and construction",
      "Custom fabrication solutions",
      "Quality welding services",
      "Heavy-duty equipment fabrication",
      "Project customization",
    ],
    features: "Professional fabrication services using modern techniques and quality materials for durability.",
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState(servicesData[0])

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-200">Comprehensive solutions tailored to your needs</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Service Tabs with Logos */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`p-6 rounded-2xl transition text-center transform hover:scale-105 ${
                  selectedService.id === service.id
                    ? `${service.bgColor} bg-gradient-to-br text-white shadow-2xl scale-105`
                    : "bg-white text-gray-900 border-2 border-gray-200 hover:border-lime-500 hover:shadow-lg"
                }`}
              >
                <div className="flex flex-col items-center gap-3">
                  <ServiceLogo
                    serviceName={service.title}
                    backgroundColor={service.logoBg}
                    textColor={service.logoText}
                    size="md"
                  />
                  <h3 className="font-bold text-lg">{service.title}</h3>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Service Details */}
          <div className={`bg-gradient-to-br ${selectedService.bgColor} rounded-2xl p-12 shadow-2xl text-white`}>
            <div className="flex items-start gap-6 mb-8">
              <ServiceLogo
                serviceName={selectedService.title}
                backgroundColor={selectedService.logoBg}
                textColor={selectedService.logoText}
                size="lg"
              />
              <div>
                <h2 className="text-4xl font-bold mb-2">{selectedService.title}</h2>
                <p className="text-xl opacity-90">{selectedService.description}</p>
              </div>
            </div>

            <p className="text-lg opacity-90 mb-12">{selectedService.features}</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">What We Offer</h3>
                <ul className="space-y-4">
                  {selectedService.details.map((detail, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className={`text-${selectedService.bgColor.split("-")[2]}-600 text-sm font-bold`}>✓</span>
                      </div>
                      <span className="text-lg opacity-90">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                <p className="text-lg mb-8 opacity-90">
                  Contact us today to discuss your project requirements and get a quote.
                </p>
                <div className="space-y-4">
                  <a
                    href="/contact"
                    className="block bg-white text-gray-900 font-bold py-3 px-6 rounded-lg text-center hover:bg-gray-100 transition"
                  >
                    Get in Touch
                  </a>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm mb-2 opacity-80">Call us directly:</p>
                    <a href="tel:+916303791385" className="text-xl font-bold hover:underline">
                      +91-63037 91385
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Garden Maintenance Gallery */}
          {selectedService.id === "garden" && (
            <div className="mt-16">
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Garden Maintenance Gallery</h2>
                <p className="text-xl text-gray-600">Explore our recent projects and transformations</p>
              </div>
              <GardenGallery />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

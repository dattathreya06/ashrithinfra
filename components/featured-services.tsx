"use client"

import { Building2, Leaf, Hammer, ArrowRight } from "lucide-react"
import ServiceLogo from "./service-logo"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "House Construction",
    description: "Complete residential construction from foundation to finishing with quality workmanship",
    icon: Building2,
    logoBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    logoText: "text-white",
    features: ["Design Planning", "Foundation Work", "Interior Finishing"],
  },
  {
    id: 2,
    title: "Garden Maintenance",
    description: "Professional maintenance and landscaping services to keep your gardens thriving",
    icon: Leaf,
    logoBg: "bg-gradient-to-br from-green-500 to-emerald-600",
    logoText: "text-white",
    features: ["Regular Maintenance", "Landscaping", "Plant Care"],
  },
  {
    id: 3,
    title: "Fabrication",
    description: "Expert metal fabrication and structural work for industrial and residential projects",
    icon: Hammer,
    logoBg: "bg-gradient-to-br from-amber-600 to-orange-600",
    logoText: "text-white",
    features: ["Metal Works", "Structure Design", "Welding"],
  },
]

export default function FeaturedServices() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-100 rounded-full -mr-48 -mt-48 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full -ml-48 -mb-48 opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 text-balance">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for fabrication, construction, and garden maintenance with years of expertise
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-lime-500 to-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 group border border-gray-100 hover:border-lime-200"
              >
                <ServiceLogo
                  serviceName={service.title}
                  backgroundColor={service.logoBg}
                  textColor={service.logoText}
                  size="md"
                />
                <h3 className="text-2xl font-bold mb-3 text-gray-900 mt-6">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Feature list with icons */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-lime-500 to-green-500 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/services"
                  className="text-lime-600 font-semibold hover:text-lime-700 inline-flex items-center gap-2 group/link transition"
                >
                  Learn more <ArrowRight size={18} className="group-hover/link:translate-x-1 transition" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

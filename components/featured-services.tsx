import { Building2, Leaf, Hammer } from "lucide-react"
import ServiceLogo from "./service-logo"

const services = [
  {
    id: 1,
    title: "House Construction",
    description: "Complete residential construction from foundation to finishing",
    icon: Building2,
    Image: "/logo_infra.jpg",
    logoText: "text-white",
  },
  {
    id: 2,
    title: "Garden Maintenance",
    description: "Professional maintenance and landscaping services",
    icon: Leaf,
    logoBg: "bg-gradient-to-br from-green-500 to-green-600",
    logoText: "text-white",
  },
  {
    id: 3,
    title: "Fabrication",
    description: "Expert metal fabrication and structural work",
    icon: Hammer,
    logoBg: "bg-gradient-to-br from-gray-600 to-gray-700",
    logoText: "text-white",
  },
]

export default function FeaturedServices() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for fabrication, construction, and garden maintenance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition group">
                <ServiceLogo
                  serviceName={service.title}
                  backgroundColor={service.logoBg}
                  textColor={service.logoText}
                  size="md"
                />
                <h3 className="text-2xl font-bold mb-3 text-gray-900 mt-6">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a
                  href="/services"
                  className="text-lime-500 font-semibold hover:text-lime-600 inline-flex items-center gap-2"
                >
                  Learn more →
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

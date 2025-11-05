import { Phone, Mail, MapPin, Zap } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-lime-500 rounded-xl flex items-center justify-center font-bold text-xl text-gray-900 shadow-lg">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Ashrith</h3>
                <p className="text-xs text-gray-400">Infra & Energy</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Fabrication, Construction and Garden Maintenance Services with excellence
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-lime-400 to-green-500 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-lime-400 transition inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-lime-400 group-hover:w-4 transition-all"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-lime-400 to-green-500 rounded-full"></span>
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: "House Construction", param: "construction" },
                { name: "Garden Maintenance", param: "garden" },
                { name: "Garden Material Supply", param: "material" },
                { name: "Fabrication", param: "fabrication" },
              ].map((service) => (
                <li key={service.param}>
                  <a
                    href={`/services?service=${service.param}`}
                    className="text-gray-400 hover:text-lime-400 transition inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-lime-400 group-hover:w-4 transition-all"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-lime-400 to-green-500 rounded-full"></span>
              Contact
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3 group cursor-pointer">
                <Phone size={20} className="text-lime-400 flex-shrink-0 mt-1 group-hover:rotate-12 transition" />
                <div>
                  <a href="tel:+916303791385" className="text-sm font-semibold hover:text-lime-400 transition">
                    +91-63037 91385
                  </a>
                  <p className="text-xs text-gray-400">Prop: Hareesh Reddy</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group cursor-pointer">
                <Mail size={20} className="text-lime-400 flex-shrink-0 mt-1 group-hover:rotate-12 transition" />
                <a href="mailto:Ashrithinfra@gmail.com" className="text-sm hover:text-lime-400 transition">
                  Ashrithinfra@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-lime-400 flex-shrink-0 mt-1" />
                <div className="text-sm text-gray-400">
                  <p className="font-semibold text-white">Building 3-87/4/A</p>
                  <p>Gajwel Mutrajpalle Road</p>
                  <p>Siddipet, Telangana - 502278</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 Ashrith Infra and Energy Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <a
                  key={link}
                  href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-lime-400 text-sm transition"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

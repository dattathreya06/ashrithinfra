import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-slate-800 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
             
              <div className="w-30 h-30">
              <img 
              src="/logo-a.png" 
              alt="Ashrith Logo"
              className=" object-contain"
              />
            </div>
            </div>
            <p className="text-gray-400">Fabrication, Construction and Garden Maintenance</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-lime-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-lime-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-lime-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-lime-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/services?service=construction" className="hover:text-lime-400 transition">
                  House Construction
                </a>
              </li>
              <li>
                <a href="/services?service=garden" className="hover:text-lime-400 transition">
                  Garden Maintenance
                </a>
              </li>
              <li>
                <a href="/services?service=material" className="hover:text-lime-400 transition">
                  Garden Material Supply
                </a>
              </li>
              <li>
                <a href="/services?service=fabrication" className="hover:text-lime-400 transition">
                  Fabrication
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-lime-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold">+91-63037 91385</p>
                  <p className="text-xs text-gray-400">Prop: Hareesh Reddy</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-lime-400 flex-shrink-0 mt-1" />
                <p className="text-sm">Ashrithinfra@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-lime-400 flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p>Gajwel, Siddipet</p>
                  <p>Telangana - 502278</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Ashrith Infra and Energy Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

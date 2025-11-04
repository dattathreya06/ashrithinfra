import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { CheckCircle2 } from "lucide-react"

export default function About() {
  const highlights = [
    "Professional expertise in fabrication and construction",
    "Garden maintenance and landscaping services",
    "Dedicated team with years of experience",
    "Customer-focused approach and quality assurance",
    "Reliable and timely project completion",
    "Competitive pricing and flexible solutions",
  ]

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Ashrith</h1>
          <p className="text-xl text-gray-200">Innovating for a Timeless Future</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-4">
                Ashrith Infra and Energy Solutions is a dedicated company specializing in fabrication, construction, and
                garden maintenance. With a focus on quality and innovation, we've been serving our community with
                excellence.
              </p>
              <p className="text-lg text-gray-600">
                Our team of skilled professionals brings expertise, dedication, and attention to detail to every
                project. We believe in transforming spaces and creating lasting value for our clients.
              </p>
            </div>
            <div className="bg-gradient-to-br from-lime-400 to-lime-500 h-80 rounded-2xl shadow-xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-2">30+</div>
                <p className="text-xl">Years Combined Experience</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-50 rounded-2xl p-12 mb-16">
            <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <CheckCircle2 className="text-lime-500 flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg text-gray-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Company Info Card */}
          <div className="bg-white border-2 border-lime-500 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Company Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-2 text-lime-600">Proprietor</h3>
                <p className="text-gray-700 text-lg">Hareesh Reddy</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-lime-600">Business Type</h3>
                <p className="text-gray-700 text-lg">Fabrication, Construction & Garden Maintenance</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-lime-600">Location</h3>
                <p className="text-gray-700">
                  Building No. 3-87/4/A, Gajwel Mutrajpalle Road, Gajwel, Siddipet, Telangana - 502278
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-lime-600">Tagline</h3>
                <p className="text-gray-700 text-lg italic">Innovating for a Timeless Future</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

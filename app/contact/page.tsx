"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  }

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-200">We'd love to hear from you. Contact us today!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border-t-4 border-lime-500">
              <Phone size={40} className="text-lime-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Phone</h3>
              <a href="tel:+916303791385" className="text-xl text-lime-600 font-semibold hover:underline">
                +91-63037 91385
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center border-t-4 border-lime-500">
              <Mail size={40} className="text-lime-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Email</h3>
              <a href="mailto:Ashrithinfra@gmail.com" className="text-lg text-lime-600 font-semibold hover:underline">
                Ashrithinfra@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center border-t-4 border-lime-500">
              <MapPin size={40} className="text-lime-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Location</h3>
              <p className="text-gray-600">
                Gajwel, Siddipet
                <br />
                Telangana - 502278
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lime-500 outline-none transition"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lime-500 outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lime-500 outline-none transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lime-500 outline-none transition"
                  >
                    <option value="">Select a service</option>
                    <option value="construction">House Construction</option>
                    <option value="garden">Garden Maintenance</option>
                    <option value="material">Garden Material Supply</option>
                    <option value="fabrication">Fabrication Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lime-500 outline-none transition resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-lime-400 to-lime-500 text-white font-bold py-3 rounded-lg hover:shadow-lg transition flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>

                {submitted && (
                  <div className="bg-green-100 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg text-center">
                    Thank you! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-lime-400 to-lime-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-lg">
                  <p>
                    <span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM
                  </p>
                  <p>
                    <span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM
                  </p>
                  <p>
                    <span className="font-semibold">Sunday:</span> Closed
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Proprietor</h3>
                <p className="text-lg font-semibold text-gray-700 mb-6">Hareesh Reddy</p>
                <h4 className="font-bold text-gray-900 mb-2">Address</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Building No./Flat No.: 3-87/4/A
                  <br />
                  Road/Street: Gajwel Mutrajpalle Road
                  <br />
                  City/Town/Village: Gajwel
                  <br />
                  District: Siddipet
                  <br />
                  State: Telangana - 502278
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Quick Response</h3>
                <p className="text-gray-700 mb-4">
                  We typically respond to inquiries within 24 hours. For urgent matters, please call us directly.
                </p>
                <p className="text-sm text-gray-600">
                  Your privacy is important to us. We'll only use your information to respond to your inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

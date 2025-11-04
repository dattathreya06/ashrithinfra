"use client"
import Navigation from "@/components/navigation"
import HeroSlider from "@/components/hero-slider"
import FeaturedServices from "@/components/featured-services"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSlider />
      <FeaturedServices />
      <Footer />
    </main>
  )
}

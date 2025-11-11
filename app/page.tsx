"use client"

import Navigation from "@/components/navigation"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Education from "@/components/sections/education"
import Research from "@/components/sections/research"
import Patents from "@/components/sections/patents"
import Experience from "@/components/sections/experience"
import Trainings from "@/components/sections/trainings"
import Activities from "@/components/sections/activities"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Research />
        <Patents />
        <Experience />
        <Trainings />
        <Activities />
      </main>
      <Footer />
    </div>
  )
}

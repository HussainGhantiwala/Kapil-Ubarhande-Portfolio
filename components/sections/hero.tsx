"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="home" className="section pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Professional Headshot Placeholder */}
          <div
            className={`flex justify-center ${isLoaded ? "animate-fadeInUp" : "opacity-0"}`}
            style={{ animationDelay: "0ms" }}
          >
            <div className="relative w-56 h-56 rounded-full border-4 border-primary/20 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shadow-lg">
             <Image
                src="/Kapil2.png"  // 👈 Make sure Kapil.png is in /public folder
                alt="Mr. Kapil Fakira Ubarhande"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className={isLoaded ? "animate-fadeInUp" : "opacity-0"} style={{ animationDelay: "100ms" }}>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2 tracking-tight">
              Mr. Kapil Fakira
              <br />
              <span className="text-primary">Ubarhande</span>
            </h1>
            <p className="text-2xl font-semibold text-primary mb-2">Assistant Professor</p>
            <p className="text-lg text-muted-foreground mb-6">Pimpri Chinchwad University, Pune</p>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-lg text-foreground leading-relaxed">
                <span className="font-semibold text-primary">"Advancing Food Science & Nutrition</span> through
                research, innovation, and teaching."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

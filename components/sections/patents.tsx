"use client"

import { useEffect, useRef, useState } from "react"

interface FlipState {
  [key: number]: boolean
}

export default function Patents() {
  const [flipped, setFlipped] = useState<FlipState>({})
  const [visibleItems, setVisibleItems] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const patents = [
    {
      title: "Nutri-Mix Moringa Fortification Machine",
      appNo: "437729-001",
      cbrNo: "221187",
      date: "18/11/2024",
      description: "Innovative machine for moringa fortification in food products",
    },
    {
      title: "Compact Food Waste Biogas Converter",
      appNo: "441960001",
      cbrNo: "224097",
      date: "25/12/2024",
      description: "Sustainable biogas generation from food waste",
    },
    {
      title: "Geothermal Based Underground Food Storage",
      appNo: "451740-001",
      cbrNo: "205614",
      date: "17/03/2025",
      description: "Eco-friendly food storage solution using geothermal energy",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Array.from(entry.target.parentElement?.children || []).indexOf(entry.target as Element)
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }, index * 100)
          }
        })
      },
      { threshold: 0.2 },
    )

    const items = sectionRef.current?.querySelectorAll("[data-patent]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const toggleFlip = (index: number) => {
    setFlipped((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <section id="patents" ref={sectionRef} className="section py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Patents</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {patents.map((patent, index) => (
            <div
              key={index}
              data-patent
              className={`transition-all duration-500 ${
                visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"
              }`}
            >
              <div className="h-72 flip-card">
                <div className={`flip-card-inner ${flipped[index] ? "flipped" : ""}`} onClick={() => toggleFlip(index)}>
                  {/* Front */}
                  <div className="flip-card-front bg-card border-2 border-primary/30 rounded-lg p-6 cursor-pointer hover:border-primary transition-colors flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-bold text-primary">{index + 1}</span>
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">{patent.title}</h3>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <p className="mb-1">
                        <span className="font-semibold">App No:</span> {patent.appNo}
                      </p>
                      <p className="mb-1">
                        <span className="font-semibold">CBR No:</span> {patent.cbrNo}
                      </p>
                      <p>
                        <span className="font-semibold">Date:</span> {patent.date}
                      </p>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="flip-card-back rounded-lg p-6 flex items-center justify-center text-center">
                    <p className="text-sm font-medium text-primary-foreground">{patent.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-8 text-center italic">Click cards to reveal descriptions</p>
      </div>
    </section>
  )
}

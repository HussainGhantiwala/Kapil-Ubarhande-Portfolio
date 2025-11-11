"use client"

import { useEffect, useRef, useState } from "react"

export default function Trainings() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const trainings = [
    {
      title: "FDP on Flipped Learning",
      type: "Faculty Development Program",
    },
    {
      title: "MS-DEED Level 1 (IISER, Pune & MS-FDA)",
      type: "Professional Development",
    },
    {
      title: "FDP on Next-Gen AI: ML, DL and Generative Models (MMIT, Pune)",
      type: "Faculty Development Program",
    },
    {
      title: "Food Safety Management System & HACCP awareness course",
      type: "Professional Development",
    },
    {
      title: "Participation in national conferences and teacher debate event",
      type: "Conference & Event (2014)",
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
            }, index * 75)
          }
        })
      },
      { threshold: 0.1 },
    )

    const items = sectionRef.current?.querySelectorAll("[data-training]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="trainings" ref={sectionRef} className="section py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Trainings & Conferences</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {trainings.map((training, index) => (
            <div
              key={index}
              data-training
              className={`bg-card border border-border rounded-lg p-6 hover:shadow-md hover:scale-105 transition-all duration-300 ${
                visibleItems[index] ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-primary mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground leading-tight">{training.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{training.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"

export default function Education() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const educationItems = [
    {
      degree: "Ph.D. in Food Science & Nutrition",
      status: "Currently pursuing",
      year: "Ongoing",
    },
    {
      degree: "NET",
      institution: "University Grants Commission",
      status: "Qualified",
      year: "2022",
    },
    {
      degree: "SET",
      institution: "Savitribai Phule Pune University (SPPU)",
      status: "Qualified",
      year: "2022",
    },
    {
      degree: "M.Sc. (Food Science)",
      institution: "MIHMCT, Pune",
      percentage: "73.47%",
      year: "2012–13",
    },
    {
      degree: "B.Tech (Food Technology)",
      institution: "Mahatma Phule Krishi Vidyapeeth, Rahuri, Ahmednagar",
      percentage: "73.50%",
      year: "2010–11",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(entry.target.parentElement?.children || []).indexOf(entry.target as Element)
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
      { threshold: 0.1 },
    )

    const items = sectionRef.current?.querySelectorAll("[data-animate]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" ref={sectionRef} className="section py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Education</h2>

        <div className="space-y-4">
          {educationItems.map((item, index) => (
            <div
              key={index}
              data-animate
              className={`flex gap-4 transition-all duration-500 ${
                visibleItems[index] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-10px]"
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                {index < educationItems.length - 1 && <div className="w-1 h-16 bg-primary/30 my-2"></div>}
              </div>
              <div className="pb-4 flex-1">
                <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground">{item.degree}</h3>
                  {item.institution && <p className="text-sm text-muted-foreground mt-1">{item.institution}</p>}
                  {item.status && <p className="text-sm text-muted-foreground mt-1">{item.status}</p>}
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-sm text-muted-foreground">{item.year}</span>
                    {item.percentage && <span className="text-sm font-medium text-primary">{item.percentage}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-6">
          <p className="text-sm text-foreground">
            <span className="font-semibold text-primary">Subjects of Interest:</span> Food Science & Nutrition;
            Nutrition & Dietetics; Food Processing & Preservation; Food Science & Quality Control
          </p>
        </div>
      </div>
    </section>
  )
}

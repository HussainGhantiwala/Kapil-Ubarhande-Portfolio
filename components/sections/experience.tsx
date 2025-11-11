"use client"

import { useEffect, useRef, useState } from "react"

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const experiences = [
    {
      position: "Assistant Professor",
      institution: "Pimpri Chinchwad University, Pune",
      period: "01/09/2025 – Present",
    },
    {
      position: "Assistant Professor",
      institution: "Sanjay Ghodawat University, Atighre, Kolhapur",
      period: "01/07/2024 – 23/06/2025",
    },
    {
      position: "Assistant Professor",
      institution: "Rajkuwar College, Dhanwat, Dist. Ch. Sambhaji Nagar",
      period: "15/07/2021 – 26/02/2024",
    },
    {
      position: "Assistant Professor",
      institution: "Sau. Vasudhatai Deshmukh College of Food Technology, Amravati",
      period: "05/07/2013 – 28/05/2017",
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
      { threshold: 0.1 },
    )

    const items = sectionRef.current?.querySelectorAll("[data-exp]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="section py-16 md:py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Experience</h2>

        <div className="space-y-4 mb-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-exp
              className={`flex gap-4 transition-all duration-500 ${
                visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[10px]"
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                {index < experiences.length - 1 && <div className="w-1 h-20 bg-primary/30 my-2"></div>}
              </div>
              <div className="pb-4 flex-1">
                <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground">{exp.position}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{exp.institution}</p>
                  <p className="text-xs text-primary font-medium mt-3">{exp.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <p className="text-foreground font-semibold">
            <span className="text-primary">Total: 08+ Years</span> of dedicated academic and research experience in Food
            Science and Nutrition
          </p>
        </div>
      </div>
    </section>
  )
}

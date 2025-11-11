"use client"

import { useState, useEffect, useRef } from "react"

interface Counter {
  label: string
  target: number
  suffix: string
}

const PDF_FILE_NAME = "Kapil_Ubarhande.pdf" // put this file in /public

export default function About() {
  const [counters, setCounters] = useState<Record<string, number>>({
    years: 0,
    patents: 0,
    publications: 0,
  })
  const [isVisible, setIsVisible] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const stats: Counter[] = [
    { label: "Years Experience", target: 8, suffix: "+" },
    { label: "Registered Patents", target: 3, suffix: "" },
    { label: "Publications", target: 9, suffix: "+" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true)
      }
    })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const intervals = Object.keys(counters).map((key, index) => {
      const target = stats[index].target
      const duration = 2000
      const increment = target / (duration / 16)

      let current = 0
      return setInterval(() => {
        current += increment
        if (current >= target) {
          setCounters((prev) => ({ ...prev, [key]: target }))
          clearInterval(intervals[index])
        } else {
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
        }
      }, 16)
    })

    return () => intervals.forEach((interval) => clearInterval(interval))
  }, [isVisible])

  // Programmatic download handler
  async function handleDownloadCV() {
    try {
      setIsDownloading(true)

      // If you prefer direct link download, you could use:
      // window.open(`/${PDF_FILE_NAME}`, "_blank") 
      // but fetch->blob ensures consistent "download file" behavior.

      const response = await fetch(`/${PDF_FILE_NAME}`)
      if (!response.ok) throw new Error("Failed to fetch CV file")

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      // Suggested filename when user saves
      a.download = `Dr_Kapil_Ubarhande_CV_${new Date().getFullYear()}.pdf`
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)
    } catch (err) {
      // Simple error handling — adapt to your UI (toast, alert, Sentry, etc.)
      console.error("Download failed", err)
      alert("Sorry — download failed. Please try again or open the CV directly from the site root.")
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <section id="about" ref={sectionRef} className="section py-16 md:py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">About</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Mr. Kapil Ubarhande is a dedicated academician and researcher with expertise in food processing,
              preservation, and nutritional optimization through innovative technologies.
            </p>
            <p className="text-foreground text-muted-foreground leading-relaxed">
              With a commitment to excellence in both teaching and research, he actively contributes to advancing the
              field through publications, patents, and collaborative research initiatives.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              aria-label="Download CV"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {/* download icon */}
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>

              {isDownloading ? "Downloading..." : "Download CV"}
            </button>
          </div>
        </div>

        {/* Stats Counters */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {counters[Object.keys(counters)[index]]}
                {stat.suffix}
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

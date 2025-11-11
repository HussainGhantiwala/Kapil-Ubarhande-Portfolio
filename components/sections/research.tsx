"use client"

import { useEffect, useRef, useState } from "react"

export default function Research() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const publications = [
    {
      title:
        "Enhancing the nutritional properties of pomegranate juice through optimization of processing conditions and by incorporating pomegranate peel.",
      venue: "The Bioscan",
      status: "Accepted for full length paper",
      indexed: "Web of Science",
    },
    {
      title: "Technical Efficiency in Food Crop Production.",
      venue: "JEAAM Journal",
      status: "Published",
      indexed: "Peer Reviewed",
    },
    {
      title:
        "Preparation of protein rich cost-effective weaning food by fortifying soybean sprouts flour with pigeon pea and cow pea flour.",
      venue: "IJCESR Journal",
      status: "Published",
      indexed: "Peer Reviewed",
    },
    {
      title:
        "Improvement of therapeutic qualities of strawberry jelly by adding drumstick seeds and basil seeds in considerable proportions.",
      venue: "IJSRST Journal",
      status: "Published",
      indexed: "Peer Reviewed",
    },
    {
      title:
        "Studies on mineral enrichment of mix vegetable soup powder fortified with papaya leaf powder and jowar flour.",
      venue: "IJSRST Journal",
      status: "Published",
      indexed: "Peer Reviewed",
    },
    {
      title:
        "Studies on nutritional enrichment of semolina cookies fortified with spinach and pea protein concentrate.",
      venue: "IJSRST Journal",
      status: "Published",
      indexed: "Peer Reviewed",
    },
    {
      title:
        "Evaluation of sensory qualities and nutritional abilities of guava RTS beverage added with betel leaves and mint leaves.",
      venue: "IJCESR Journal",
      status: "Published",
      indexed: "Peer Reviewed",
    },
    {
      title: "Nutritional Improvement of wheat flour noodles by fortifying with pea protein concentrate and spinach.",
      venue: "IJAFST Journal",
      status: "Published",
      indexed: "Peer Reviewed",
    },
    {
      title:
        "Exploring the Role of Technology – Enhanced Learning in Improving Student Engagement and Academic Performance.",
      venue: "JHSSD Journal",
      status: "Published",
      indexed: "Peer Reviewed",
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
            }, index * 50)
          }
        })
      },
      { threshold: 0.1 },
    )

    const items = sectionRef.current?.querySelectorAll("[data-pub]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="research" ref={sectionRef} className="section py-16 md:py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Research & Publications</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              data-pub
              className={`bg-card border border-border rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-105 ${
                visibleItems[index] ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-base font-semibold text-foreground mb-3 leading-tight">{pub.title}</h3>
              <p className="text-sm text-muted-foreground mb-2 font-medium">{pub.venue}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">{pub.status}</span>
                <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded font-medium">
                  {pub.indexed}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <p className="text-foreground">
            <span className="font-semibold text-primary">9+ Research Papers</span> published in reputed peer-reviewed
            journals.{" "}
            <span className="text-sm text-muted-foreground italic">
              If DOIs / publication IDs are available they can be added as links on each card.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

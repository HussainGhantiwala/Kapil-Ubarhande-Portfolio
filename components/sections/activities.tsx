"use client"

export default function Activities() {
  const responsibilities = [
    {
      title: "Internal BOS Member",
      detail: "Board of Studies",
    },
    {
      title: "Faculty Coordinator",
      detail: "Industrial Visits & Placements",
    },
    {
      title: "Library & Journals Coordinator",
      detail: "Academic Resource Management",
    },
    {
      title: "Exam Assistance",
      detail: "Examination Support",
    },
  ]

  const languages = ["English", "Marathi", "Hindi"]

  return (
    <section id="activities" className="section py-16 md:py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Extracurricular & Responsibilities</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Responsibilities */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Key Responsibilities</h3>
            <div className="space-y-4">
              {responsibilities.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Languages</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {languages.map((lang, index) => (
                <span
                  key={index}
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
            <p className="text-foreground text-muted-foreground">
              Fluent communication skills across multiple languages, enabling effective interaction with diverse
              academic and professional communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

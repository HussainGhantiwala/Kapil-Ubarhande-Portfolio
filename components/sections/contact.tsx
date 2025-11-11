export default function Contact() {
  return (
    <section id="contact" className="section py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Left: Copyright */}
          <div className="flex items-center justify-center md:justify-start">
            <p className="text-sm text-muted-foreground">© 2025 Mr. Kapil Fakira Ubarhande</p>
          </div>

          {/* Center: Contact Info */}
          <div className="flex flex-col items-center justify-center gap-2">
            <a href="tel:+918668204757" className="text-sm text-foreground hover:text-primary transition-colors">
              Phone: (+91) 8668204757
            </a>
            <a
              href="mailto:kapilubarhande1@gmail.com"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Email: kapilubarhande1@gmail.com
            </a>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://researchgate.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
              aria-label="ResearchGate"
              title="ResearchGate"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3.708 13.262c-1.145 0-1.98-1.062-1.98-2.442 0-1.44.787-2.46 1.98-2.46 1.193 0 1.98 1.02 1.98 2.46 0 1.38-.835 2.442-1.98 2.442zm3.97 3.938h-2.022v-3.76c0-.924-.328-1.55-1.134-1.55-.618 0-.987.434-1.15 1.05a1.504 1.504 0 0 0-.077.552v3.708h-2.022s.026-6.016 0-6.638h2.022v.94c.293-.451.816-1.087 1.985-1.087 1.451 0 2.54.948 2.54 3.006v3.779z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

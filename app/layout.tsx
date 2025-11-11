import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap" })
const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Mr. Kapil Fakira Ubarhande | Assistant Professor | Food Science & Nutrition",
  description:
    "Professional portfolio of Mr. Kapil Fakira Ubarhande, Assistant Professor in Food Science and Nutrition at Pimpri Chinchwad University. Research, publications, patents, and academic experience.",
  keywords: ["Food Science", "Nutrition", "Research", "Academic", "Professor", "Publications", "Patents", "Pune"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --font-sans: ${inter.style.fontFamily};
            --font-display: ${poppins.style.fontFamily};
          }
        `}</style>
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

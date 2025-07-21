"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight, Play, Pause } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const slides = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sl-2.jpg-ahAkOADMQgo6MhIXj7E60KxbOqwCx1.jpeg",
    title: "Leading Water Treatment Solutions",
    subtitle: "Advanced ETP & ZLD Systems",
    description:
      "Comprehensive water treatment facilities with cutting-edge technology for maximum efficiency and environmental compliance.",
    cta1: { text: "Explore Solutions", href: "/solutions" },
    cta2: { text: "View Projects", href: "/industries" },
    overlay: "from-black/60 via-black/40 to-transparent",
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sl-3.jpg-Ne0pOudvqwx2PNo3QKuZZyTKXVbXoL.jpeg",
    title: "Advanced Membrane Technology",
    subtitle: "RO & Filtration Systems",
    description:
      "State-of-the-art reverse osmosis and membrane filtration systems delivering superior water quality and recovery rates.",
    cta1: { text: "View Technologies", href: "/technologies" },
    cta2: { text: "Get Quote", href: "/contact" },
    overlay: "from-blue-900/70 via-blue-800/50 to-transparent",
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sl-1.jpg-soYZRGL2Lo3AS7kSHlLfPxZFLdDKbJ.jpeg",
    title: "Water Loving Technology",
    subtitle: "Innovation in Every Drop",
    description:
      "Patented technologies and innovative solutions that set new standards in water treatment efficiency and sustainability.",
    cta1: { text: "Patent Technologies", href: "/patents" },
    cta2: { text: "Learn More", href: "/innovation" },
    overlay: "from-gray-900/70 via-gray-800/50 to-transparent",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="relative h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`}></div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl text-white">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full mb-4">
                    {slide.subtitle}
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">{slide.title}</h1>
                <p className="text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl">{slide.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg" asChild>
                    <Link href={slide.cta1.href}>
                      {slide.cta1.text}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg bg-transparent"
                    asChild
                  >
                    <Link href={slide.cta2.href}>{slide.cta2.text}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? "bg-orange-500 scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="w-8 h-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-orange-500 transition-all duration-100 ease-linear"
          style={{
            width: isPlaying
              ? `${((currentSlide + 1) / slides.length) * 100}%`
              : `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  )
}

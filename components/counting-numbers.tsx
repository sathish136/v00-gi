"use client"

import { useState, useEffect, useRef } from "react"

interface CountingNumbersProps {
  target: number
  duration?: number // in milliseconds
  suffix?: string
}

export default function CountingNumbers({ target, duration = 2000, suffix = "" }: CountingNumbersProps) {
  const [currentNumber, setCurrentNumber] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const animationFrameId = useRef<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting()
            observer.unobserve(entry.target) // Stop observing once animated
          }
        })
      },
      { threshold: 0.5 }, // Trigger when 50% of the component is visible
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [target, duration])

  const startCounting = () => {
    const startTime = performance.now()
    const animate = (currentTime: DOMHighResTimeStamp) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      const animatedValue = Math.floor(progress * target)
      setCurrentNumber(animatedValue)

      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(animate)
      } else {
        setCurrentNumber(target) // Ensure it reaches the exact target
      }
    }
    animationFrameId.current = requestAnimationFrame(animate)
  }

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white mb-2">
      {currentNumber}
      {suffix}
    </div>
  )
}

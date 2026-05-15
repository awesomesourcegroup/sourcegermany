"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const GOLD = "#C9A84C";

const slides = [
  { src: "/images/hero-leica.jpg",       alt: "Leica Q camera",              label: "Cameras & Optics",    opacity: 0.78 },
  { src: "/images/pillar-smarthome.jpg", alt: "Sennheiser HD 820 audiophile headphones", label: "Smart Home & Audio",  opacity: 0.65 },
  { src: "/images/pillar-fashion.jpg",   alt: "German menswear",             label: "Fashion & Luxury",    opacity: 0.65 },
  { src: "/images/why-germany-tools.jpg", alt: "German precision gearbox engineering", label: "Tools & Hardware",    opacity: 0.75 },
  { src: "/images/pillar-auto.jpg",      alt: "German automotive",           label: "Automotive",          opacity: 0.65 },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[500px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? slide.opacity : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="45vw"
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" />

      {/* Category label */}
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
        <div className="overflow-hidden">
          {slides.map((slide, i) => (
            <p
              key={slide.src}
              className="font-mono text-xs uppercase tracking-[0.2em] transition-all duration-700 absolute"
              style={{
                color: GOLD,
                opacity: i === current ? 1 : 0,
                transform: i === current ? "translateY(0)" : "translateY(8px)",
              }}
            >
              {slide.label}
            </p>
          ))}
          {/* spacer so the container has height */}
          <p className="font-mono text-xs opacity-0">placeholder</p>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300"
              aria-label={`Show slide ${i + 1}`}
              style={{
                width: i === current ? "1.5rem" : "0.375rem",
                height: "0.375rem",
                backgroundColor: i === current ? GOLD : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

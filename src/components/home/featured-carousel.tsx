"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    src: "/unsplash-living-room.jpg",
    alt: "Bright living room with a modern sofa, coffee table, and dining set",
    label: "Bright living room",
  },
  {
    src: "/unsplash-dining-room.jpg",
    alt: "Sunlit dining area with a wooden table and chairs",
    label: "Wood dining set",
  },
  {
    src: "/unsplash-living-room-2.jpg",
    alt: "Cozy living room with a sofa and warm neutral accents",
    label: "Cozy sofa collection",
  },
];

export function FeaturedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % slides.length);
  }

  return (
    <div
      className="flex min-h-64 flex-col gap-2 md:min-h-[330px]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured furniture"
    >
      <div className="relative min-h-64 flex-1 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-500 ${index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"}`}
            aria-hidden={index !== activeIndex}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}: ${slide.label}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 55vw, 720px"
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}

        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous featured image"
          className="absolute left-3 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ArrowLeft aria-hidden="true" size={18} />
        </button>
        <button
          type="button"
          onClick={showNext}
          aria-label="Next featured image"
          className="absolute right-3 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ArrowRight aria-hidden="true" size={18} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-1.5" aria-label="Choose a featured image">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${slide.label}`}
            aria-current={index === activeIndex ? "true" : undefined}
            className={`rounded-full transition-all ${index === activeIndex ? "h-2 w-2 bg-zinc-950 dark:bg-zinc-100" : "h-1.5 w-1.5 bg-zinc-300 hover:bg-zinc-500 dark:bg-zinc-700 dark:hover:bg-zinc-500"}`}
          />
        ))}
      </div>
    </div>
  );
}

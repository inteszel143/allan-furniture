"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import diningOne from "../../assets/mock-images/795386099_1507304011422988_6399367379796584480_n.jpg";
import diningTwo from "../../assets/mock-images/795431293_1507300628089993_1418986746379169239_n.jpg";
import diningThree from "../../assets/mock-images/795431312_1507300414756681_3844650131686751172_n.jpg";

const slides = [
  {
    src: diningOne,
    alt: "Wooden dining set displayed in the Allan Furniture collection",
    label: "Classic dining set",
  },
  {
    src: diningTwo,
    alt: "Light wood dining table and chairs",
    label: "Light wood dining set",
  },
  {
    src: diningThree,
    alt: "Warm-toned dining table and matching chairs",
    label: "Warm wood dining set",
  },
];

export function FeaturedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (!isPlaying || isInteracting || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPlaying, isInteracting]);

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % slides.length);
  }

  return (
    <div
      className="flex min-h-64 flex-col gap-3 md:min-h-[350px]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured furniture"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocusCapture={() => setIsInteracting(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsInteracting(false);
      }}
    >
      <div className="relative min-h-64 flex-1 overflow-hidden rounded-3xl bg-zinc-100 shadow-xl shadow-zinc-950/10 ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
        <div
          className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${activeIndex === 0 ? "opacity-100" : "pointer-events-none opacity-0"}`}
          aria-hidden={activeIndex !== 0}
          role="group"
          aria-roledescription="slide"
          aria-label={`1 of ${slides.length}: ${slides[0].label}`}
        >
          <Image
            src={slides[0].src}
            alt={slides[0].alt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 55vw, 760px"
            loading="eager"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
          <p className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-black/30 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm sm:bottom-7 sm:left-7 sm:text-sm">
            {slides[0].label}
          </p>
        </div>
        {slides.slice(1).map((slide, offset) => {
          const index = offset + 1;

          return (
          <div
            key={slide.label}
            className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"}`}
            aria-hidden={index !== activeIndex}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}: ${slide.label}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 55vw, 760px"
              loading="lazy"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
            <p className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-black/30 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm sm:bottom-7 sm:left-7 sm:text-sm">
              {slide.label}
            </p>
          </div>
          );
        })}

        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous featured image"
          className="absolute left-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-5"
        >
          <ArrowLeft aria-hidden="true" size={18} />
        </button>
        <button
          type="button"
          onClick={showNext}
          aria-label="Next featured image"
          className="absolute right-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-5"
        >
          <ArrowRight aria-hidden="true" size={18} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setIsPlaying((playing) => !playing)}
          aria-label={isPlaying ? "Pause automatic slide rotation" : "Resume automatic slide rotation"}
          className="inline-flex h-7 w-7 items-center justify-center rounded-full text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white dark:focus-visible:outline-white"
        >
          {isPlaying ? <Pause aria-hidden="true" size={13} /> : <Play aria-hidden="true" size={13} />}
        </button>
        <div className="flex items-center justify-center gap-1.5" role="group" aria-label="Choose a featured image">
          {slides.map((slide, index) => (
            <button
              key={slide.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${slide.label}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`rounded-full transition-all ${index === activeIndex ? "h-2 w-2 bg-zinc-950 dark:bg-zinc-100" : "h-1.5 w-1.5 bg-zinc-300 hover:bg-zinc-500 dark:bg-zinc-700 dark:hover:bg-zinc-500"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

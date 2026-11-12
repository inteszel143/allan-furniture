"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type WhileInViewProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function WhileInView({ children, className, delay = 0 }: WhileInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [observerReady, setObserverReady] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }
    setObserverReady(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${observerReady ? "home-reveal" : ""} ${isInView ? "home-reveal-visible" : ""} ${className ?? ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

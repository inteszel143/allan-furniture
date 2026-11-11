"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";

export function ProductImageViewer({ image, alt }: { image: StaticImageData; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`View full-size image: ${alt}`}
        className="group relative block min-h-[55vh] w-full overflow-hidden rounded-3xl bg-zinc-100 p-3 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700 dark:bg-zinc-900 sm:p-6 md:min-h-[72vh]"
      >
        <Image src={image} alt={alt} fill loading="eager" sizes="(max-width: 767px) 100vw, 60vw" className="object-contain p-3 sm:p-6" />
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-zinc-950/80 px-4 py-2.5 text-xs font-semibold text-white shadow-lg backdrop-blur-sm transition group-hover:bg-amber-800">
          <ZoomIn aria-hidden="true" size={15} /> View full image
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={`Full-size view: ${alt}`}
        onClose={() => setIsOpen(false)}
        onCancel={(event) => {
          event.preventDefault();
          setIsOpen(false);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setIsOpen(false);
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none overflow-hidden border-0 bg-black/95 p-4 text-white backdrop:bg-black/80 sm:p-8"
      >
        <button
          type="button"
          autoFocus
          onClick={() => setIsOpen(false)}
          aria-label="Close full-size image"
          className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-7 sm:top-7"
        >
          <X aria-hidden="true" size={22} />
        </button>
        <div className="relative h-full w-full">
          <Image src={image} alt={alt} fill sizes="100vw" className="object-contain" />
        </div>
      </dialog>
    </>
  );
}

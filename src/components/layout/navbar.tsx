"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";

const links = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "Contact us", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 text-zinc-900 backdrop-blur dark:bg-zinc-950/95 dark:text-zinc-100">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-3 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Allan Furniture home" className="flex shrink-0 items-center gap-2">
          <Image
            src="/allan-furniture-logo.png"
            alt="Allan Furniture logo"
            width={56}
            height={56}
            priority
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />
          <span className="hidden text-sm font-bold leading-tight text-amber-950 dark:text-amber-100 min-[420px]:block sm:text-base">
            Allan Furniture
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-zinc-700 transition hover:text-amber-700 dark:text-zinc-300 dark:hover:text-amber-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <Link
            href="/cart"
            aria-label="Shopping cart"
            title="Shopping cart"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition hover:bg-zinc-100 hover:text-amber-800 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-amber-300"
          >
            <ShoppingCart aria-hidden="true" size={21} />
          </Link>
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full bg-zinc-950 px-4 text-sm font-semibold text-white transition hover:bg-amber-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-amber-200"
          >
            Let&apos;s talk
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800 lg:hidden"
          >
            {menuOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-amber-800 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:hover:text-amber-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;

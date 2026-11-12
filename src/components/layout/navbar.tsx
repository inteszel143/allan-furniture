"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";

const links = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contact" },
];

const searchTargets = [
  { label: "Home", href: "/", keywords: "main page start" },
  { label: "About Allan Furniture", href: "/#about", keywords: "about story shop showroom" },
  { label: "Featured products", href: "/#featured-products", keywords: "products dining furniture shop" },
  { label: "Categories", href: "/#categories", keywords: "rooms living bedroom dining accents" },
  { label: "Why shop with us", href: "/#testimonials", keywords: "showroom categories help furniture" },
  { label: "FAQ", href: "/#faq", keywords: "questions answers help" },
  { label: "Contact us", href: "/#contact", keywords: "contact call email address location" },
];

export function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const searchResults = searchTargets.filter((target) =>
    `${target.label} ${target.keywords}`.toLowerCase().includes(normalizedQuery),
  );

  function closeSearch() {
    setSearchOpen(false);
    setSearchQuery("");
  }

  return (
    <header className="sticky top-0 z-40 bg-white/95 text-zinc-900 backdrop-blur dark:bg-zinc-950/95 dark:text-zinc-100">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-3 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Allan Furniture home" className="flex shrink-0 items-center gap-2">
          <Image
            src="/allan-furniture-logo.png"
            alt="Allan Furniture logo"
            width={56}
            height={56}
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
          <button
            type="button"
            aria-label={searchOpen ? "Close site search" : "Open site search"}
            aria-expanded={searchOpen}
            aria-controls="navbar-search"
            onClick={() => {
              setSearchOpen((open) => !open);
              setMenuOpen(false);
            }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition hover:bg-zinc-100 hover:text-amber-800 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-amber-300"
          >
            {searchOpen ? <X aria-hidden="true" size={20} /> : <Search aria-hidden="true" size={20} />}
          </button>
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

      {searchOpen && (
        <div id="navbar-search" className="border-t border-zinc-200 bg-white px-4 py-4 shadow-lg dark:border-zinc-800 dark:bg-zinc-950 sm:px-6">
          <form
            className="mx-auto max-w-3xl"
            role="search"
            onSubmit={(event) => {
              event.preventDefault();
              const firstResult = searchResults[0];
              if (firstResult) {
                closeSearch();
                router.push(firstResult.href);
              }
            }}
          >
            <label htmlFor="site-search" className="sr-only">Search Allan Furniture</label>
            <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 focus-within:border-amber-800 dark:border-zinc-700 dark:bg-zinc-900 dark:focus-within:border-amber-300">
              <Search aria-hidden="true" size={18} className="shrink-0 text-zinc-400" />
              <input
                id="site-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") closeSearch();
                }}
                placeholder="Search products, categories, or help"
                autoFocus
                className="h-12 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-400"
              />
              {searchQuery && (
                <button type="button" onClick={() => setSearchQuery("")} className="text-xs font-medium text-zinc-500 hover:text-zinc-950 dark:hover:text-white">Clear</button>
              )}
            </div>
            <div className="mt-3 grid gap-1 sm:grid-cols-2">
              {searchResults.length > 0 ? searchResults.map((result) => (
                <Link key={result.label} href={result.href} onClick={closeSearch} className="rounded-xl px-3 py-2.5 text-sm text-zinc-700 transition hover:bg-zinc-100 hover:text-amber-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-amber-300">
                  {result.label}
                </Link>
              )) : (
                <p className="px-3 py-2.5 text-sm text-zinc-500">No matching sections. Try “products”, “dining”, or “contact”.</p>
              )}
            </div>
          </form>
        </div>
      )}

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

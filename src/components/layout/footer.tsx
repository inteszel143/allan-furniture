import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "About us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "Contact us", href: "/contact" },
  { label: "FAQ", href: "/#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Allan Furniture home">
            <Image src="/allan-furniture-logo.png" alt="" width={48} height={48} className="h-12 w-12 object-contain" />
            <span className="font-semibold">Allan Furniture</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-zinc-400">Quality furniture and thoughtful service for your home. Visit our showroom in Tagum City or browse our collections online.</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Explore</h2>
          <nav aria-label="Footer navigation" className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
            {footerLinks.map((link) => <Link key={link.label} href={link.href} className="text-sm text-zinc-400 transition hover:text-white">{link.label}</Link>)}
          </nav>
        </div>
      </div>
      <div className="border-t border-zinc-800">
        <p className="mx-auto max-w-7xl px-4 py-4 text-xs text-zinc-500 sm:px-6 lg:px-8">© {new Date().getFullYear()} Allan Furniture. All rights reserved.</p>
      </div>
    </footer>
  );
}

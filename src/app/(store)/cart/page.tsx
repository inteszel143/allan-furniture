import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MessageCircle, ShoppingBag } from "lucide-react";
import { productCategories } from "../../../lib/catalog";

const suggestedCategories = productCategories.slice(0, 3);

export default function CartPage() {
  return (
    <main className="flex-1 bg-[#f8f6f2] text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 transition hover:text-amber-900 dark:text-zinc-400 dark:hover:text-amber-300"
        >
          <ArrowLeft aria-hidden="true" size={16} /> Continue browsing
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.7fr)] lg:items-start">
          <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-10 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-zinc-100 pb-6 dark:border-zinc-800">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-900 dark:text-amber-300">Your selection</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Shopping cart</h1>
              </div>
              <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">0 items</span>
            </div>

            <div className="flex min-h-[320px] flex-col items-center justify-center py-10 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-900 dark:bg-amber-200/15 dark:text-amber-300">
                <ShoppingBag aria-hidden="true" size={28} strokeWidth={1.6} />
              </div>
              <h2 className="mt-5 text-xl font-semibold">Your cart is empty</h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Browse our furniture collection and find something that feels right for your home. Our team can help with current pricing and availability.
              </p>
              <Link
                href="/products"
                className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:bg-amber-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-amber-200"
              >
                Explore products <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </section>

          <aside className="rounded-3xl bg-zinc-950 p-6 text-white sm:p-7 dark:bg-zinc-900">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-amber-200">
              <MessageCircle aria-hidden="true" size={20} />
            </div>
            <h2 className="mt-5 text-lg font-semibold">Need help choosing?</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Ask us about a product, pricing, or delivery options. We’re happy to help you find the right fit.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-zinc-950 transition hover:bg-amber-200"
            >
              Contact our team
            </Link>
            <div className="mt-7 border-t border-white/15 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">How ordering works</p>
              <ol className="mt-4 space-y-3 text-sm text-zinc-200">
                <li className="flex gap-3"><span className="text-amber-300">01</span> Browse the collection</li>
                <li className="flex gap-3"><span className="text-amber-300">02</span> Ask us about your picks</li>
                <li className="flex gap-3"><span className="text-amber-300">03</span> Confirm price and availability</li>
              </ol>
            </div>
          </aside>
        </div>

        <section className="mt-14 sm:mt-16" aria-labelledby="cart-categories-heading">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-900 dark:text-amber-300">A good place to start</p>
              <h2 id="cart-categories-heading" className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">Browse popular categories</h2>
            </div>
            <Link href="/categories" className="inline-flex items-center text-sm font-semibold text-amber-900 hover:underline dark:text-amber-300">
              View all categories <ArrowUpRight aria-hidden="true" className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {suggestedCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image src={category.image} alt={category.name} fill sizes="(max-width: 639px) 100vw, 33vw" className="object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">{category.count} pieces</p>
                    <h3 className="mt-1 text-sm font-semibold">{category.name}</h3>
                  </div>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-zinc-400 transition group-hover:text-amber-900 dark:group-hover:text-amber-300" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

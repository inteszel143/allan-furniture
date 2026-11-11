import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { FeaturedCarousel } from "../components/home/featured-carousel";

export default function Home() {
  return (
    <main className="flex-1 bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <section className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Furniture that makes your house feel like home
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:text-base">
            Find comfortable, quality furniture for every room at Allan Furniture. Visit our Tagum
            City showroom and discover pieces made for everyday living.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white transition hover:bg-amber-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-amber-200"
          >
            Browse all products
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-[minmax(150px,0.28fr)_minmax(0,1fr)_minmax(160px,0.28fr)] lg:mt-12 lg:gap-5">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-4">
            <article className="flex min-h-36 flex-col items-center justify-center rounded-2xl bg-zinc-950 px-4 py-5 text-center text-white shadow-lg dark:bg-zinc-900 sm:min-h-40">
              <p className="text-3xl font-bold tracking-tight">100%</p>
              <p className="mt-1 rounded-full bg-white/15 px-3 py-1 text-[10px] font-medium">
                Customer satisfaction
              </p>
              <p className="mt-3 max-w-48 text-[10px] leading-4 text-zinc-300">
                Quality furniture and thoughtful service for your home.
              </p>
            </article>

            <article className="flex min-h-32 flex-col items-center justify-center rounded-2xl bg-zinc-100 px-4 py-5 text-center dark:bg-zinc-900 sm:min-h-36">
              <p className="text-2xl font-bold tracking-tight">+28,000</p>
              <p className="mt-1 rounded-full bg-white px-3 py-1 text-[10px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                Happy customers
              </p>
            </article>
          </div>

          <FeaturedCarousel />

          <aside className="flex flex-col gap-3 md:gap-4">
            <div className="flex items-center justify-between gap-2 px-1">
              <div>
                <p className="text-sm font-semibold">4.8/5</p>
                <div className="flex text-zinc-950 dark:text-amber-300" role="img" aria-label="Rated 4.8 out of 5">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} aria-hidden="true" className="h-3 w-3 fill-current" />
                  ))}
                </div>
              </div>
              <Link
                href="/products"
                aria-label="Explore furniture"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-950 text-white transition hover:bg-amber-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-amber-200"
              >
                <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
            </div>

            <div className="relative min-h-36 flex-1 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
              <Image
                src="/unsplash-dining-room.jpg"
                alt="Sunlit dining area with a wooden table and chairs"
                fill
                sizes="(max-width: 767px) 100vw, 220px"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-xs leading-5 text-zinc-600 dark:text-zinc-400">
                Discover thoughtfully selected furniture designed for comfort, quality, and
                everyday living.
              </p>
              <Link
                href="/products"
                className="mt-3 inline-flex h-9 items-center justify-center rounded-full bg-zinc-950 px-4 text-xs font-semibold text-white transition hover:bg-amber-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-amber-200"
              >
                Shop now
              </Link>
            </div>
          </aside>
        </div>

        <p className="mt-4 text-center text-[11px] text-zinc-400">
          Photos by{" "}
          <a
            href="https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-large-window-l_gGfgH0B0U"
            className="underline underline-offset-2 hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            Alex Tyson
          </a>
          {" and "}
          <a
            href="https://unsplash.com/photos/wooden-dining-table-and-chairs-in-sunlit-room-bcaFHquzu3M"
            className="underline underline-offset-2 hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            Clay Banks
          </a>
          {", and "}
          <a
            href="https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-large-window-hGFu6Wbu7Lw"
            className="underline underline-offset-2 hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            Blake Wisz
          </a>
          {" on Unsplash"}
        </p>
      </section>
    </main>
  );
}

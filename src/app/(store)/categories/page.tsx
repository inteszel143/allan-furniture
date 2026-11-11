import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { productCategories } from "../../../lib/catalog";

export default function CategoriesPage() {
  return (
    <main className="flex-1 bg-white px-4 py-12 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 sm:py-16">
      <div className="mx-auto max-w-7xl sm:px-2 lg:px-4">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 dark:text-amber-300">Browse by category</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Find furniture for your home</h1>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">Explore the dining sets and chairs in our current collection.</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {productCategories.map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`} className="group grid overflow-hidden rounded-3xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 sm:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-56 bg-zinc-100 dark:bg-zinc-800">
                <Image src={category.image} alt={category.name} fill sizes="(max-width: 639px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-800 dark:text-amber-300">{category.count} pieces</p>
                <h2 className="mt-2 text-xl font-bold">{category.name}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{category.description}</p>
                <span className="mt-5 inline-flex items-center text-sm font-semibold">Explore category <ArrowUpRight aria-hidden="true" className="ml-1.5 h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

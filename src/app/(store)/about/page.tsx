import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, MessageCircleHeart, Sparkles } from "lucide-react";
import aboutAllanImage from "../../../assets/mock-images/aboutAllan.jpg";

const values = [
  { title: "Thoughtful selection", body: "Furniture chosen to bring comfort and character into the spaces you use every day.", icon: Sparkles },
  { title: "Personal service", body: "Our team is here to help you compare options and find pieces that suit your home.", icon: MessageCircleHeart },
  { title: "Local showroom", body: "Visit us in Tagum City to see our furniture up close and talk through what you need.", icon: MapPin },
];

export default function AboutPage() {
  return (
    <main className="flex-1 bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <section className="bg-zinc-50 py-12 dark:bg-zinc-900/40 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
          <div className="relative min-h-72 overflow-hidden rounded-3xl bg-zinc-200 shadow-xl dark:bg-zinc-800 sm:min-h-[420px]">
            <Image src={aboutAllanImage} alt="Allan Furniture shop" fill loading="eager" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="md:py-8 md:pl-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 dark:text-amber-300">About Allan Furniture</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Furniture that makes your house feel like home</h1>
            <p className="mt-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              Allan Furniture Shop &amp; Display Center helps families find furniture for comfortable, welcoming homes. Browse our dining sets, chairs, beds, doors, and sala sets, or visit our Tagum City showroom to see the collection in person.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/products" className="inline-flex h-11 items-center rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:bg-amber-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-amber-200">Explore furniture <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" /></Link>
              <Link href="/contact" className="inline-flex h-11 items-center rounded-full border border-zinc-300 px-5 text-sm font-semibold transition hover:border-amber-800 hover:text-amber-900 dark:border-zinc-700 dark:hover:border-amber-300 dark:hover:text-amber-300">Visit or contact us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 dark:text-amber-300">What you can expect</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Good furniture, helpful people, and a place to explore</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {values.map(({ title, body, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300"><Icon aria-hidden="true" size={20} /></span>
              <h3 className="mt-5 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

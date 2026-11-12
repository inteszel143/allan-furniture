import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, Star } from "lucide-react";
import { FeaturedCarousel } from "../components/home/featured-carousel";
import aboutAllanImage from "../assets/mock-images/aboutAllan.jpg";
import { catalogProducts, productCategories } from "../lib/catalog";

const diningProducts = catalogProducts.filter((product) => product.category === "dining-sets");
const productCount = catalogProducts.length;
const featuredProducts = productCategories
  .map((category) =>
    category.slug === "doors"
      ? catalogProducts.find((product) => product.slug === "door-40")
      : catalogProducts.find((product) => product.category === category.slug),
  )
  .filter((product) => product !== undefined);

const faqs = [
  {
    question: "Can I see the furniture in person?",
    answer: "Yes. Visit our showroom in Tagum City to explore our furniture in person. See our Contact Us section for directions.",
  },
  {
    question: "How do I check product availability and pricing?",
    answer: "Get in touch with our team and let us know which piece you are interested in. We can help with current availability and pricing.",
  },
  {
    question: "Do you offer delivery?",
    answer: "Delivery options depend on your location and the item. Contact us and we will help you find the right option.",
  },
  {
    question: "How can I ask a question about an order?",
    answer: "Call, email, or visit our showroom. Our contact details are listed below and on the Contact Us page.",
  },
];

export default function Home() {
  return (
    <main className="flex-1 bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <section className="overflow-hidden bg-[#f8f6f2] px-4 pb-12 pt-10 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-900 dark:text-amber-300">
                <span className="h-px w-7 bg-amber-800 dark:bg-amber-300" /> Allan Furniture · Tagum City
              </p>
              <h1 className="text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
                Furniture that makes your house feel like <span className="text-amber-900 dark:text-amber-300">home.</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:text-base">
                Find comfortable, quality furniture for every room. Visit our showroom and discover pieces made for everyday living.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:bg-amber-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-amber-200"
              >
                Browse products <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 px-5 text-sm font-semibold transition hover:border-amber-900 hover:text-amber-900 dark:border-zinc-700 dark:hover:border-amber-300 dark:hover:text-amber-300"
              >
                Visit our showroom
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[minmax(145px,0.24fr)_minmax(0,1fr)_minmax(175px,0.27fr)] lg:gap-5">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-4">
              <article className="flex min-h-32 flex-col justify-center rounded-3xl bg-zinc-950 px-4 py-5 text-white shadow-lg shadow-zinc-950/10 sm:min-h-40 sm:px-5 dark:bg-zinc-900">
                <p className="text-3xl font-bold tracking-tight sm:text-4xl">{productCategories.length}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-amber-200">Furniture categories</p>
                <p className="mt-3 text-xs leading-5 text-zinc-300">Find pieces for dining, living, and bedroom spaces.</p>
              </article>

              <article className="flex min-h-32 flex-col justify-center rounded-3xl border border-zinc-200 bg-white/80 px-4 py-5 sm:min-h-36 sm:px-5 dark:border-zinc-800 dark:bg-zinc-900">
                <p className="text-2xl font-bold tracking-tight sm:text-3xl">{productCount}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">Items to explore</p>
                <Link href="/products" className="mt-3 inline-flex items-center text-xs font-semibold text-amber-900 hover:underline dark:text-amber-300">
                  View collection <ArrowUpRight aria-hidden="true" className="ml-1 h-3.5 w-3.5" />
                </Link>
              </article>
            </div>
            <FeaturedCarousel />

            <aside className="flex flex-col gap-3 rounded-3xl border border-zinc-200/80 bg-white/80 p-3 dark:border-zinc-800 dark:bg-zinc-900 sm:p-4">
              <div className="relative min-h-40 flex-1 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={diningProducts[5].image}
                  alt="Wood dining set from the Allan Furniture collection"
                  fill
                  sizes="(max-width: 767px) 100vw, 220px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-10 text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-200">Made for gathering</p>
                  <p className="mt-1 text-sm font-semibold">Find a favorite for your home</p>
                </div>
              </div>
              <a href="https://maps.google.com/?q=Allan+Furniture+Shop+%26+Display+Center%2C+Tagum+City" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-zinc-200 px-4 text-xs font-semibold transition hover:border-amber-900 hover:text-amber-900 dark:border-zinc-700 dark:hover:border-amber-300 dark:hover:text-amber-300">
                <MapPin aria-hidden="true" size={14} /> Get directions
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section id="featured-products" className="scroll-mt-20 border-t border-zinc-100 bg-zinc-50/70 py-12 dark:border-zinc-800 dark:bg-zinc-900/30 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Featured Products</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                A few highlights from across our collection, from dining and living room pieces to
                bedroom furniture and more. Contact us for current pricing and availability.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-zinc-950 px-5 text-xs font-semibold text-white transition hover:bg-amber-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-amber-200"
            >
              Browse all products
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-5">
            {featuredProducts.map((product) => (
              <Link
                key={product.name}
                href={`/products/${product.slug}`}
                className="group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 p-3 sm:p-4">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
                      {product.categoryName}
                    </p>
                    <h3 className="mt-1 text-sm font-semibold sm:text-base">{product.name}</h3>
                  </div>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-zinc-400 transition group-hover:text-amber-800 dark:group-hover:text-amber-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-t border-zinc-100 py-14 dark:border-zinc-800 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
          <div className="relative min-h-64 overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 sm:min-h-80">
            <Image src={aboutAllanImage} alt="Allan Furniture shop" fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="md:px-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 dark:text-amber-300">About Allan Furniture</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Furniture for the moments that make a home</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              We help you find comfortable, quality furniture for the way you live. Visit our Tagum City showroom, explore our collections, and talk with our team about what works for your home.
            </p>
            <Link href="/about" className="mt-6 inline-flex h-10 items-center justify-center rounded-full border border-zinc-300 px-5 text-sm font-semibold transition hover:border-amber-800 hover:text-amber-800 dark:border-zinc-700 dark:hover:border-amber-300 dark:hover:text-amber-300">More about us <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section id="categories" className="scroll-mt-20 bg-zinc-50 py-14 dark:bg-zinc-900/40 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 dark:text-amber-300">Find your fit</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Shop by category</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-zinc-600 dark:text-zinc-400">Browse furniture for dining rooms, bedrooms, and more. Contact us for current pricing and availability.</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {productCategories.map((category) => (
              <Link key={category.slug} href={`/categories/${category.slug}`} className="group grid overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 sm:grid-cols-[0.8fr_1.2fr]">
                <div className="relative min-h-48 bg-zinc-100 dark:bg-zinc-900">
                  <Image src={category.image} alt={category.name} fill sizes="(max-width: 639px) 100vw, 35vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-800 dark:text-amber-300">{category.count} pieces</p>
                  <h3 className="mt-2 text-lg font-semibold">{category.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{category.description}</p>
                  <span className="mt-4 inline-flex items-center text-xs font-semibold text-amber-900 group-hover:underline dark:text-amber-300">Explore category <ArrowUpRight aria-hidden="true" className="ml-1 h-3.5 w-3.5" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="scroll-mt-20 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-3xl bg-zinc-950 p-7 text-white sm:p-10 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:p-14 dark:bg-zinc-900">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Customer testimonials</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Made for homes, chosen by you</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">Every home is different. We love helping our customers find pieces they will enjoy living with every day.</p>
              <Link href="/contact" className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-zinc-950 transition hover:bg-amber-200">Share your experience</Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                <div className="flex text-amber-300" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} aria-hidden="true" className="h-4 w-4 fill-current" />)}</div>
                <p className="mt-4 text-sm font-semibold">A welcoming showroom</p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">Come by, see the furniture for yourself, and find what feels right for your home.</p>
                <p className="mt-4 text-xs text-zinc-400">A note from the Allan Furniture team</p>
              </article>
              <article className="flex flex-col justify-center rounded-2xl bg-amber-100 p-5 text-zinc-950 dark:bg-amber-200">
                <p className="text-4xl font-bold tracking-tight">4.8<span className="text-xl">/5</span></p>
                <div className="mt-2 flex text-amber-800" aria-hidden="true">{Array.from({ length: 5 }, (_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <p className="mt-3 text-xs leading-5 text-zinc-700">Customer rating highlighted by Allan Furniture</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 bg-zinc-50 py-14 dark:bg-zinc-900/40 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 dark:text-amber-300">FAQ</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Questions, answered</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">Need a hand with something else? We’re happy to help.</p>
            <Link href="/contact" className="mt-5 inline-flex items-center text-sm font-semibold text-amber-900 hover:underline dark:text-amber-300">Contact our team <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <div className="divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white px-5 dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 sm:px-6">
            {faqs.map(({ question, answer }) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold marker:hidden">{question}<span className="text-lg text-amber-800 transition group-open:rotate-45 dark:text-amber-300">+</span></summary><p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 border-t border-zinc-100 py-14 dark:border-zinc-800 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 dark:text-amber-300">Contact us</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Let’s find the right piece for your home</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">Visit our Tagum City showroom or get in touch with our team about products, availability, and delivery.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a href="https://maps.google.com/?q=Allan+Furniture+Shop+%26+Display+Center%2C+Tagum+City" className="rounded-2xl border border-zinc-200 p-5 transition hover:border-amber-800/50 dark:border-zinc-800 dark:hover:border-amber-300"><MapPin className="h-5 w-5 text-amber-800 dark:text-amber-300" aria-hidden="true" /><h3 className="mt-3 text-sm font-semibold">Visit our showroom</h3><p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">Purok Bautista, near Saint Genevieve Hospital and Radyo ni Juan, along Barangay Mankilam Highway, Tagum City.</p></a>
            <a href="tel:+639951031561" className="rounded-2xl border border-zinc-200 p-5 transition hover:border-amber-800/50 dark:border-zinc-800"><Phone className="h-5 w-5 text-amber-800 dark:text-amber-300" aria-hidden="true" /><h3 className="mt-3 text-sm font-semibold">Call us</h3><p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">0995-103-1561<br />0977-233-1342</p></a>
            <a href="mailto:maryannlanguban2@gmail.com" className="rounded-2xl border border-zinc-200 p-5 transition hover:border-amber-800/50 dark:border-zinc-800"><Mail className="h-5 w-5 text-amber-800 dark:text-amber-300" aria-hidden="true" /><h3 className="mt-3 text-sm font-semibold">Email us</h3><p className="mt-2 break-all text-sm leading-6 text-zinc-600 dark:text-zinc-400">maryannlanguban2@gmail.com</p></a>
          </div>
        </div>
      </section>
    </main>
  );
}

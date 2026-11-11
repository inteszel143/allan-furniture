import Link from "next/link";
import { Search } from "lucide-react";
import { ProductCard } from "../../components/products/product-card";
import { catalogProducts, productCategories } from "../../lib/catalog";

type ProductsPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const category = typeof params.category === "string" ? params.category : undefined;
  const q = typeof params.q === "string" ? params.q : undefined;
  const query = q?.trim().toLowerCase() ?? "";
  const products = catalogProducts.filter((product) => {
    const matchesCategory = !category || product.category === category;
    const matchesSearch = !query || `${product.name} ${product.categoryName}`.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
  const selectedCategory = productCategories.find((item) => item.slug === category);

  return (
    <main className="flex-1 bg-white px-4 py-12 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 sm:py-16">
      <div className="mx-auto max-w-7xl sm:px-2 lg:px-4">
        <div className="flex flex-col gap-6 border-b border-zinc-200 pb-8 dark:border-zinc-800 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 dark:text-amber-300">Our collection</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{selectedCategory?.name ?? "Furniture for your home"}</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Browse our current dining sets, chairs, beds, and doors. Contact us for pricing, availability, and help choosing the right piece.
            </p>
          </div>
          <form action="/products" className="flex h-11 w-full items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 md:max-w-sm dark:border-zinc-700 dark:bg-zinc-900">
            {category && <input type="hidden" name="category" value={category} />}
            <Search aria-hidden="true" className="h-4 w-4 shrink-0 text-zinc-400" />
            <label htmlFor="product-search" className="sr-only">Search products</label>
            <input id="product-search" type="search" name="q" defaultValue={q} placeholder="Search furniture" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-400" />
            <button type="submit" className="text-xs font-semibold text-amber-900 dark:text-amber-300">Search</button>
          </form>
        </div>

        <div className="flex flex-wrap gap-2 py-6">
          <Link href="/products" className={`rounded-full px-4 py-2 text-xs font-semibold transition ${!category ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"}`}>All furniture</Link>
          {productCategories.map((item) => (
            <Link key={item.slug} href={`/products?category=${item.slug}`} className={`rounded-full px-4 py-2 text-xs font-semibold transition ${category === item.slug ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"}`}>
              {item.name} <span className="ml-1 opacity-60">{item.count}</span>
            </Link>
          ))}
          {query && <Link href={category ? `/products?category=${category}` : "/products"} className="rounded-full px-4 py-2 text-xs font-semibold text-zinc-500 underline underline-offset-4">Clear search</Link>}
        </div>

        {products.length ? (
          <>
            <p className="mb-4 text-xs text-zinc-500 dark:text-zinc-400">Showing {products.length} {products.length === 1 ? "piece" : "pieces"}</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
              {products.map((product) => <ProductCard key={product.slug} product={product} />)}
            </div>
          </>
        ) : (
          <div className="rounded-3xl border border-dashed border-zinc-300 px-6 py-16 text-center dark:border-zinc-700">
            <h2 className="text-lg font-semibold">No matching furniture found</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Try another search or browse the full collection.</p>
            <Link href="/products" className="mt-5 inline-flex h-10 items-center rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">View all products</Link>
          </div>
        )}
      </div>
    </main>
  );
}

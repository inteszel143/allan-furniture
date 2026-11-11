import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProductCard } from "../../../../components/products/product-card";
import { catalogProducts, productCategories } from "../../../../lib/catalog";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productCategories.map((category) => ({ slug: category.slug }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <Suspense fallback={<CategoryLoading />}>
      <CategoryContent params={params} />
    </Suspense>
  );
}

function CategoryLoading() {
  return <main className="min-h-[70vh] flex-1 animate-pulse bg-zinc-50 dark:bg-zinc-950" aria-label="Loading category" />;
}

async function CategoryContent({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = productCategories.find((item) => item.slug === slug);
  if (!category) notFound();

  const products = catalogProducts.filter((product) => product.category === category.slug);

  return (
    <main className="flex-1 bg-white px-4 py-12 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 sm:py-16">
      <div className="mx-auto max-w-7xl sm:px-2 lg:px-4">
        <Link href="/categories" className="text-xs font-semibold text-amber-900 hover:underline dark:text-amber-300">← All categories</Link>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 dark:text-amber-300">Furniture category</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{category.name}</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">{category.description}</p>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">{products.length} pieces in this collection</p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {products.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </div>
    </main>
  );
}

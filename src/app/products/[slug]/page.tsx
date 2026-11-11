import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProductImageViewer } from "../../../components/products/product-image-viewer";
import { catalogProducts } from "../../../lib/catalog";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return catalogProducts.map((product) => ({ slug: product.slug }));
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <Suspense fallback={<ProductLoading />}>
      <ProductContent params={params} />
    </Suspense>
  );
}

function ProductLoading() {
  return <main className="min-h-[70vh] flex-1 animate-pulse bg-zinc-50 dark:bg-zinc-950" aria-label="Loading product" />;
}

async function ProductContent({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = catalogProducts.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <main className="flex-1 bg-white px-4 py-10 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Link href="/products" className="inline-flex items-center text-xs font-semibold text-zinc-600 transition hover:text-amber-900 dark:text-zinc-400 dark:hover:text-amber-300"><ArrowLeft aria-hidden="true" className="mr-2 h-4 w-4" />Back to products</Link>
        <div className="mt-6 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
          <ProductImageViewer image={product.image} alt={product.name} />
          <div className="flex flex-col justify-center">
            <Link href={`/categories/${product.category}`} className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-800 hover:underline dark:text-amber-300">{product.categoryName}</Link>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{product.name}</h1>
            <p className="mt-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              See this piece in the Allan Furniture collection. Contact our team for current pricing, availability, and details about delivery.
            </p>
            <Link href="/contact" className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white transition hover:bg-amber-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-amber-200">
              Ask about this piece <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </Link>
            <p className="mt-3 text-xs leading-5 text-zinc-500 dark:text-zinc-400">Visit our Tagum City showroom to view our furniture in person.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

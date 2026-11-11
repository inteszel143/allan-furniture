import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CatalogProduct } from "../../lib/catalog";

export function ProductCard({ product }: { product: CatalogProduct }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:border-amber-800/40 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <Link href={`/products/${product.slug}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-between gap-3 p-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-800 dark:text-amber-300">{product.categoryName}</p>
            <h2 className="mt-1 text-sm font-semibold">{product.name}</h2>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">Ask us for price and availability</p>
          </div>
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white transition group-hover:bg-amber-800 dark:bg-white dark:text-zinc-950 dark:group-hover:bg-amber-200">
            <ArrowUpRight aria-hidden="true" size={17} />
          </span>
        </div>
      </Link>
    </article>
  );
}

import { Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
  {
    title: "Visit our showroom",
    icon: MapPin,
    content: (
      <address className="not-italic leading-relaxed">
        Purok Bautista, near Saint Genevieve Hospital and Radyo ni Juan, along
        Barangay Mankilam Highway, Tagum City.
      </address>
    ),
  },
  {
    title: "Call us",
    icon: Phone,
    content: (
      <div className="flex flex-col items-start gap-2">
        <a className="hover:text-amber-800 dark:hover:text-amber-300" href="tel:+639951031561">
          0995-103-1561
        </a>
        <a className="hover:text-amber-800 dark:hover:text-amber-300" href="tel:+639772331342">
          0977-233-1342
        </a>
      </div>
    ),
  },
  {
    title: "Email us",
    icon: Mail,
    content: (
      <a
        className="break-all hover:text-amber-800 dark:hover:text-amber-300"
        href="mailto:maryannlanguban2@gmail.com"
      >
        maryannlanguban2@gmail.com
      </a>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="flex-1 bg-zinc-50 px-4 py-16 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-800 dark:text-amber-300">
            We&apos;re here to help
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s talk</h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Visit our showroom or get in touch with us about your furniture needs.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {contactDetails.map(({ title, icon: Icon, content }) => (
            <section
              key={title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                <Icon aria-hidden="true" size={21} />
              </div>
              <h2 className="mb-2 text-lg font-semibold">{title}</h2>
              <div className="text-sm text-zinc-600 dark:text-zinc-300">{content}</div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

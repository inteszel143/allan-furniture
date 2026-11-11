export function MessengerFab() {
  return (
    <a
      href="https://www.facebook.com/AllanFurnicrafts"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Allan Furnicrafts on Facebook"
      title="Message us on Facebook"
      className="group fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0878ff] text-white shadow-lg shadow-blue-950/25 transition hover:scale-105 hover:bg-[#0669e5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 sm:bottom-6 sm:right-6"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M12 2C6.48 2 2 6.16 2 11.29c0 2.92 1.46 5.53 3.74 7.24V22l3.42-1.88c.91.25 1.86.38 2.84.38 5.52 0 10-4.16 10-9.21S17.52 2 12 2Z" />
        <path d="m13.86 6.83-5.29 5.67a.55.55 0 0 0 .73.81l2.48-1.88-1.06 3.86a.27.27 0 0 0 .46.26l5.3-5.67a.55.55 0 0 0-.74-.81l-2.48 1.88 1.06-3.86a.27.27 0 0 0-.46-.26Z" className="fill-[#0878ff]" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-zinc-950 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-md transition group-hover:opacity-100 group-focus-visible:opacity-100">
        Message us
      </span>
    </a>
  );
}

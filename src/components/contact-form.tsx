import { photographerProfile } from "@/lib/portfolio-data";

const inquiryTypes = [
  "Portrait Session",
  "Wedding / Elopement",
  "Brand / Editorial",
  "Travel Story",
];

export function ContactForm() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="grid gap-8 rounded-[2rem] bg-stone-950 px-8 py-10 text-white transition-colors lg:grid-cols-[0.85fr_1.15fr] dark:bg-stone-100 dark:text-stone-950"
    >
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300 dark:text-amber-700">
          Contact
        </p>
        <h2 id="contact-heading" className="text-3xl font-semibold">
          Let’s create something memorable.
        </h2>
        <p className="max-w-md text-base leading-7 text-stone-300 dark:text-stone-700">
          Share your vision, timeline, and location. I’ll get back to you with
          availability, package details, and the next best steps.
        </p>
        <div className="space-y-3 text-sm text-stone-300 dark:text-stone-700">
          <p>Email: {photographerProfile.contact.email}</p>
          <p>Phone: {photographerProfile.contact.phone}</p>
          <p>Instagram: {photographerProfile.contact.instagram}</p>
        </div>
      </div>

      <form className="grid gap-4 rounded-[1.5rem] bg-white p-6 text-stone-900 shadow-2xl dark:bg-stone-950 dark:text-stone-100">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium">
            Name
            <input
              type="text"
              placeholder="Your name"
              className="rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-950 dark:border-stone-700 dark:bg-stone-900 dark:text-white dark:focus:border-stone-300"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Email
            <input
              type="email"
              placeholder="you@example.com"
              className="rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-950 dark:border-stone-700 dark:bg-stone-900 dark:text-white dark:focus:border-stone-300"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium">
          Inquiry Type
          <select className="rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-950 dark:border-stone-700 dark:bg-stone-900 dark:text-white dark:focus:border-stone-300">
            {inquiryTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium">
          Project Details
          <textarea
            rows={5}
            placeholder="Tell me about the shoot, mood, location, and preferred dates."
            className="rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-950 dark:border-stone-700 dark:bg-stone-900 dark:text-white dark:focus:border-stone-300"
          />
        </label>

        <button
          type="submit"
          className="rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200"
        >
          Send Inquiry
        </button>
      </form>
    </section>
  );
}

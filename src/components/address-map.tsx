"use client";

import { photographerProfile } from "@/lib/portfolio-data";
import { MapPin, Mail, Phone } from "lucide-react";

export function AddressMap() {
  const { address } = photographerProfile;

  if (!address) {
    return null;
  }

  return (
    <section
      id="address"
      aria-labelledby="address-heading"
      className="grid gap-8 rounded-[2rem] bg-stone-100 px-8 py-10 text-stone-950 transition-colors lg:grid-cols-2 dark:bg-stone-900 dark:text-stone-100"
    >
      {/* Address Information */}
      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700 dark:text-amber-300">
            Studio Location
          </p>
          <h2 id="address-heading" className="text-3xl font-semibold">
            Find Us
          </h2>
        </div>

        <div className="space-y-4">
          {/* Address */}
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-amber-700 dark:text-amber-300" />
            <div>
              <p className="font-medium">{address.street}</p>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                {address.city}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <Phone className="h-5 w-5 flex-shrink-0 text-amber-700 dark:text-amber-300" />
            <a
              href={`tel:${address.phone}`}
              className="hover:text-amber-700 dark:hover:text-amber-300"
            >
              {address.phone}
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <Mail className="h-5 w-5 flex-shrink-0 text-amber-700 dark:text-amber-300" />
            <a
              href={`mailto:${address.email}`}
              className="hover:text-amber-700 dark:hover:text-amber-300"
            >
              {address.email}
            </a>
          </div>
        </div>

        <p className="text-sm leading-6 text-stone-600 dark:text-stone-400">
          Visit our studio for consultations, portrait sessions, and to view our
          portfolio in person.
        </p>
      </div>

      {/* Google Map Embed */}
      <div className="overflow-hidden rounded-[1.5rem] shadow-lg">
        <iframe
          src={address.mapEmbed}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Studio location on Google Maps"
        />
      </div>
    </section>
  );
}

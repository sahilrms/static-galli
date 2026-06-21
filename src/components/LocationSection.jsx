"use client";
import {
  MapPin,
  Phone,
  Clock
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";
export default function LocationSection({
  data
}) {

  const { business } = data;

  return (
    <section
      id="location"
      className="py-28 bg-black"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="yellow uppercase tracking-[4px]">
            Visit Us
          </span>

          <h2 className="section-title mt-4">
            Find Your Way To Galli
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* INFO */}

          <div className="glass rounded-3xl p-8">

            <div className="space-y-8">

              <div className="flex gap-4">

                <MapPin
                  size={28}
                  className="yellow mt-1"
                />

                <div>
                  <h3 className="text-2xl">
                    Address
                  </h3>

                  <p className="text-zinc-400">
                    {business.address}
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <Phone
                  size={28}
                  className="yellow mt-1"
                />

                <div>

                  <h3 className="text-2xl">
                    Phone
                  </h3>

                  <a
                    href={`tel:${business.phone}`}
                    className="text-zinc-400"
                  >
                    {business.phone}
                  </a>

                </div>

              </div>

              <div className="flex gap-4">

                <Clock
                  size={28}
                  className="yellow mt-1"
                />

                <div>

                  <h3 className="text-2xl">
                    Opening Hours
                  </h3>

                  <p className="text-zinc-400">
                    {business.hours}
                  </p>

                </div>

              </div>

            </div>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href={`tel:${business.phone}`}
                className="btn-primary"
              >
                Call Now
              </a>

              <a
                href={`https://instagram.com/${business.instagram.replace("@","")}`}
                target="_blank"
                className="btn-outline flex items-center gap-2"
              >
                <FaInstagram size={18} />
                Instagram
              </a>

            </div>

          </div>

          {/* MAP */}

          <div className="overflow-hidden rounded-3xl border border-white/10">

            <iframe
              src={`https://maps.google.com/maps?q=${data.location.lat},${data.location.lng}&z=15&output=embed`}
              width="100%"
              height="100%"
              className="min-h-[500px]"
              loading="lazy"
            />

          </div>

        </div>

      </div>

    </section>
  );
}
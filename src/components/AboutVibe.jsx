"use client";

import { motion } from "framer-motion";

export default function AboutVibe({ data }) {
  return (
    <section className="py-28 bg-[#111] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <span className="yellow uppercase tracking-[4px]">
              The Galli Vibe
            </span>

            <h2 className="section-title mt-4">
              Coffee,
              Conversations
              &
              Memories
            </h2>

            <p className="text-zinc-400 text-lg mt-6 leading-relaxed">
              {data.about.description}
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">

              <div className="glass px-5 py-3 rounded-xl">
                ☕ Fresh Coffee
              </div>

              <div className="glass px-5 py-3 rounded-xl">
                🎵 Great Music
              </div>

              <div className="glass px-5 py-3 rounded-xl">
                🍔 Tasty Food
              </div>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >

            <div className="polaroid">

              <img
                src={data.about.image}
                alt="about"
                className="w-full h-[500px] object-cover"
              />

              <div className="p-4 text-center text-black font-semibold">
                #GalliMoments
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
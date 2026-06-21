"use client";

import { motion } from "framer-motion";
import Sticker from "./Stickers";

export default function Hero({ data }) {

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      

      <img
        src={data.hero.image}
        alt=""
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      />

      <div className="absolute inset-0 bg-black/60" />

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-black/30
        via-black/20
        to-black
        "
      />

      <div className="relative z-10">

        <div className="max-w-7xl mx-auto min-h-screen flex items-center px-6">

          <div className="w-full text-center">

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}
            >

              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
                {data.hero.badge}
                
              </span>

            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .3 }}
              className="
              mt-8
              text-[70px]
              md:text-[140px]
              leading-none
              uppercase
              "
            >

              <span className="text-white">
                Galli
              </span>

              {" "}

              <span className="yellow">
                Cafe
              </span>

            </motion.h1>

            <motion.div
              initial={{ scale: .8 }}
              animate={{ scale: 1 }}
              transition={{ delay: .6 }}
              className="
              inline-block
              border
              border-white/20
              px-6
              py-3
              mt-4
              bg-black/40
              backdrop-blur-md
              "
            >
              {data.business.tagline}
            </motion.div>

            <p className="mt-6 text-zinc-300 text-xl">
              {data.business.description}
            </p>

            <div className="flex justify-center gap-4 mt-10 flex-wrap">

              <a
                href="#menu"
                className="btn-primary"
              >
                Explore Menu
              </a>

              <a
                href="#location"
                className="btn-outline"
              >
                Visit Us
              </a>

            </div>

          </div>

        </div>

      </div>

      <Sticker
        text="Good Coffee Only"
        className="
        hidden md:block
        absolute
        left-10
        top-40
        z-20
        "
        image={data.hero.coffeeImage}
      />

      <Sticker
        text="Good Vibes Only"
        className="
        hidden md:block
        absolute
        right-12
        bottom-32
        z-20
        "
      />

      <div
        className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2
        animate-bounce
        text-white
        z-20
        "
      >
        ↓
      </div>

    </section>
  );
}
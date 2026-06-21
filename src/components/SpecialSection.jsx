"use client";

import { motion } from "framer-motion";

export default function SpecialSection({ data }) {
  const special = data.special;

  return (
    <section className="py-28 bg-[#FFC83D] text-black relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-[4px]">
              Today's Pick 🔥
            </span>

            <h2 className="text-[70px] leading-none mt-4">
              {special.title}
            </h2>

            <p className="text-xl mt-6">
              {special.description}
            </p>

            <div className="text-4xl font-bold mt-6">
              ₹{special.price}
            </div>

            <button className="mt-8 bg-black text-white px-8 py-4 rounded-xl">
              Must Try
            </button>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <img
              src={special.image}
              alt={special.title}
              className="
              rounded-[30px]
              h-[550px]
              w-full
              object-cover
              shadow-2xl
              "
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}
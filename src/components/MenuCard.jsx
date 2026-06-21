"use client";

import { motion } from "framer-motion";

export default function MenuCard({ item }) {

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02
      }}
      transition={{
        duration: .3
      }}
      className="
      bg-zinc-900
      rounded-3xl
      overflow-hidden
      border
      border-white/5
      group
      "
    >

      <div className="overflow-hidden">

        <img
          src={item.image}
          alt={item.name}
          className="
          h-72
          w-full
          object-cover
          transition
          duration-700
          group-hover:scale-110
          "
        />

      </div>

      <div className="p-6">

        {item.popular && (
          <span className="
          bg-yellow-400
          text-black
          px-3
          py-1
          rounded-full
          text-sm
          font-bold
          ">
            🔥 Popular
          </span>
        )}

        <div className="flex justify-between items-center mt-4">

          <h3 className="text-3xl">
            {item.name}
          </h3>

          <span className="yellow text-2xl">
            ₹{item.price}
          </span>

        </div>

        <p className="text-zinc-400 mt-3">
          {item.description}
        </p>

      </div>

    </motion.div>
  );
}
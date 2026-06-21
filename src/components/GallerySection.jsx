"use client";

import { motion } from "framer-motion";

export default function GallerySection({ data }) {

  return (
    <section
      id="gallery"
      className="py-28 bg-black"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="yellow uppercase tracking-[4px]">
            Gallery
          </span>

          <h2 className="section-title mt-4">
            Moments Of Joy
          </h2>

        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-5">

          {data.gallery.map((image, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.03
              }}
              className="mb-5 break-inside-avoid"
            >

              <img
                src={image}
                alt=""
                className="
                rounded-3xl
                w-full
                cursor-pointer
                transition
                "
              />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
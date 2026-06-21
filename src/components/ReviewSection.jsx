"use client";

import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import FloatingSticker from "./FloatingSticker";
export default function ReviewSection({
  data
}) {

  const [current, setCurrent] =
    useState(0);

  useEffect(() => {

    const timer =
      setInterval(() => {

        setCurrent(prev =>
          prev === data.reviews.length - 1
            ? 0
            : prev + 1
        );

      }, 4000);

    return () =>
      clearInterval(timer);

  }, [data.reviews.length]);

  return (
    <section
      id="reviews"
      className="
      py-28
      bg-[#111]
      relative
      "
    >
<FloatingSticker
  text="☕ Coffee Lovers"
  top="100px"
  left="40px"
/>

<FloatingSticker
  text="🔥 Trending Spot"
  top="250px"
  left="85%"
/>
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <span className="yellow uppercase tracking-[4px]">
            Reviews
          </span>

          <h2 className="section-title mt-4">
            What People Say
          </h2>

        </div>

        <div className="mt-16">

          <ReviewCard
            review={
              data.reviews[current]
            }
          />

        </div>

        <div className="flex justify-center gap-3 mt-8">

          {data.reviews.map(
            (_, index) => (

              <button
                key={index}
                onClick={() =>
                  setCurrent(index)
                }
                className={`
                h-3
                w-3
                rounded-full
                ${
                  current === index
                    ? "bg-yellow-400"
                    : "bg-zinc-700"
                }
                `}
              />

            )
          )}

        </div>

      </div>

    </section>
  );
}
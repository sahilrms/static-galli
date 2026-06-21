"use client";

import { useState } from "react";
import MenuCard from "./MenuCard";

export default function MenuSection({ data }) {

  const [active, setActive] =
    useState("All");

  const categories = [
    "All",
    ...new Set(
      data.menu.map(
        item => item.category
      )
    )
  ];

  const filteredItems =
    active === "All"
      ? data.menu
      : data.menu.filter(
          item =>
            item.category === active
        );

  return (
    <section
      id="menu"
      className="
      py-28
      bg-black
      "
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="yellow uppercase tracking-[4px]">
            Menu
          </span>

          <h2 className="section-title mt-4">
            Good Food.
            Good Mood.
          </h2>

        </div>

        <div
          className="
          flex
          justify-center
          flex-wrap
          gap-4
          mt-12
          "
        >

          {categories.map(
            category => (

              <button
                key={category}
                onClick={() =>
                  setActive(category)
                }
                className={`
                px-6
                py-3
                rounded-full
                transition
                ${
                  active === category
                    ? "bg-yellow-400 text-black"
                    : "glass"
                }
                `}
              >
                {category}
              </button>

            )
          )}

        </div>

        <div
          className="
          mt-16
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >

          {filteredItems.map(
            (item, index) => (

              <MenuCard
                key={index}
                item={item}
              />

            )
          )}

        </div>

      </div>

    </section>
  );
}
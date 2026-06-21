"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="text-3xl font-black leading-none">
            <span className="yellow">{data.business.name}</span>
          </div>

          <div className="hidden md:flex gap-10 uppercase text-sm tracking-widest">
            <a href="#hero">Home</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">Gallery</a>
            <a href="#reviews">Reviews</a>
            <a href="#location">Location</a>
          </div>

          <a
            href="#location"
            className="hidden md:block btn-primary"
          >
            Visit Us
          </a>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden"
          >
            <Menu size={30} />
          </button>

        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 bg-black z-[999] flex flex-col justify-center items-center gap-8 text-3xl">

          <button
            className="absolute top-5 right-5 text-5xl"
            onClick={() => setOpen(false)}
          >
            ×
          </button>

          <a href="#hero">Home</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
          <a href="#location">Location</a>

        </div>
      )}
    </>
  );
}
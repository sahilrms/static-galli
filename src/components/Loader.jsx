"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>

      <h2 className="mt-6 text-white text-3xl tracking-widest">
        GALLI CAFE
      </h2>

      <p className="text-zinc-400 mt-2">
        Brewing Good Vibes...
      </p>
    </div>
  );
}
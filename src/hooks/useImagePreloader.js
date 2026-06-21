"use client";

import { useEffect, useState } from "react";

export default function useImagePreloader(images = []) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!images.length) {
      setLoaded(true);
      return;
    }

    let count = 0;

    images.forEach((src) => {
      const img = new Image();

      img.src = src;

      img.onload = () => {
        count++;

        if (count === images.length) {
          setLoaded(true);
        }
      };

      img.onerror = () => {
        count++;

        if (count === images.length) {
          setLoaded(true);
        }
      };
    });
  }, [images]);

  return loaded;
}